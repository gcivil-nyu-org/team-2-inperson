from __future__ import annotations

from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import School

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def school_metadata(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "GET":
        return HttpResponseBadRequest("bad call")

    req_id = request.GET.get("id", None)
    req_nyc_id = request.GET.get("nycId", None)

    if req_id:
        try:
            school = School.objects.get(pk=req_id)
            return HttpResponse(school.serializeJson())
        except Exception:
            return HttpResponseBadRequest("not found")

    if req_nyc_id:
        schools = School.objects.filter(nyc_id=req_nyc_id)
        if schools.count() != 1:
            return HttpResponse("more than one school")
        return HttpResponse(schools[0].serializeJson())

    return HttpResponseBadRequest("bad call")
