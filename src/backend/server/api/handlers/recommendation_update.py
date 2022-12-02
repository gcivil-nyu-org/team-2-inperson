from api.handlers.shortlist_request import ShortlistRequest
from api.models.recommendation import Recommendation

from django.db import connection
from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.http import HttpResponseForbidden
from django.http import HttpResponseServerError
from django.views.decorators.csrf import csrf_exempt

SEEN_QUERY = """
SET seen_count = seen_count + 1
UPDATE api_recommendation 
WHERE id = '{}'
"""

CHECK_QRY = """
SELECT id, seen_count
FROM api_recommendation 
WHERE id = '{}'
"""

def camel_caser(input):
    vals = input.split("_")
    if len(vals) > 1:
        for i in range(1, len(vals)):
            vals[i] = vals[i].capitalize()
    return "".join(vals)


def dictfetchall(cursor):
    columns = [camel_caser(col[0]) for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]

@csrf_exempt
def recommendation_update(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    if not sr.is_logged_in:
        return HttpResponseForbidden("must be logged in")

    try:
        recoID = sr.body.get("recoID", None)
        rec = Recommendation.objects.filter(id=recoID)
    except Exception:
        return HttpResponseServerError("cannot find recommendation")

    try:
        # with connection.cursor() as cursor:
        #   cursor.execute(CHECK_QRY.format(recoID) )
        rec.seen_count = rec.seen_count + 1
        for k in sr.body:
            if k == "accepted":
                rec.current_accepted = True
                rec.current_trashed = False
                continue
            elif k == "trashed":
                rec.current_trashed = True
                rec.current_accepted = False
                continue
        rec.save()
    except Exception:
        return HttpResponseServerError("could not update recommendation")

    return HttpResponse(rec.metadataJson())