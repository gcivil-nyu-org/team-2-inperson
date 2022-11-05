from __future__ import annotations

from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import SchoolDim

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def school_dim(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "GET":
        return HttpResponseBadRequest("bad call")

    req_id = request.GET.get("id", None)
    req_source = request.GET.get("source", None)
    req_field = request.GET.get("field", None)

    if req_id:
        try:
            dim = SchoolDim.objects.get(pk=req_id)
            return HttpResponse(dim.serializeJson())
        except Exception:
            return HttpResponseBadRequest("not found")

    results = SchoolDim.objects
    if req_source:
        results = results.filter(source=req_source)
    if req_field:
        results = results.filter(field=req_field)

    response = []
    for result in results.all():
        response.append(result.serializeJson())
    # TODO(?): return error if blank?

    return HttpResponse("[{}]".format(",".join(response)))
