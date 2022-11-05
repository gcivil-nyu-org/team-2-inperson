from __future__ import annotations

from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import SchoolDimValue

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def school_dim_value(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "GET":
        return HttpResponseBadRequest("bad call")

    req_id = request.GET.get("id", None)
    req_school_id = request.GET.get("schoolId", None)
    req_dim_id = request.GET.get("dimensionId", None)

    if req_id:
        try:
            dim_value = SchoolDimValue.objects.get(pk=req_id)
            return HttpResponse(dim_value.serializeJson())
        except Exception:
            return HttpResponseBadRequest("not found")
    results = SchoolDimValue.objects

    if req_school_id:
        results = results.filter(school_id=req_school_id)
    if req_dim_id:
        results = results.filter(dim_id=req_dim_id)

    response = []
    for result in results.all():
        response.append(result.serializeJson())
    return HttpResponse("[{}]".format(",".join(response)))
