from __future__ import annotations

import json

from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import SchoolDimValue

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def school_dim_value_upsert(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    req_dim_values = sr.body.get("dimensionValues", None)
    if not req_dim_values:
        return HttpResponseBadRequest("bad call")

    results = []
    for dim_value in req_dim_values:
        req_id = dim_value.get("id", None)
        req_school_id = dim_value.get("schoolId", None)
        req_dim_id = dim_value.get("dimensionId", None)
        req_value = dim_value.get("value", None)

        if req_id:
            # this is an update
            try:
                db_dim_value = SchoolDimValue.objects.get(pk=req_id)
                if req_school_id:
                    db_dim_value.school.id = req_school_id
                if req_dim_id:
                    db_dim_value.dim.id = req_dim_id
                db_dim_value.value = req_value
                db_dim_value.save()
                results.append(True)
            except Exception:
                return HttpResponseBadRequest("bad parameters")
        else:
            db_dim_value = SchoolDimValue(
                school_id=req_school_id, dim_id=req_dim_id, value=req_value
            )
            db_dim_value.save()
            results.append(db_dim_value.id)
    return HttpResponse(json.dumps(results))
