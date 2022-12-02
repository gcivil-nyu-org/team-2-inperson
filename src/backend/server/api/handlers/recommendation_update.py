from api.handlers.shortlist_request import ShortlistRequest

from django.db import connection
from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
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

    recoID = sr.body.get("recoID", None)

    try:
        with connection.cursor() as cursor:
          cursor.execute(CHECK_QRY.format(recoID) )
        for k in sr.body:
            if k == "accept":
                # SET current_accepted = true
                continue
            elif k == "trash":
                # SET current_trash = true
                continue
    except Exception:
        return HttpResponseServerError("could not update recommendation")

    return HttpResponse(dictfetchall(cursor))