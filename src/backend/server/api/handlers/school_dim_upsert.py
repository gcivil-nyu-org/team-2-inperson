from __future__ import annotations

import json

from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import SchoolDim

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def school_dim_upsert(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    req_dims = sr.body.get("dimensions", None)
    if not req_dims:
        return HttpResponseBadRequest("bad call")

    results = []
    for dim in req_dims:
        req_id = dim.get("id", None)
        req_source = dim.get("source", None)
        req_field = dim.get("field", None)
        req_short = dim.get("displayShort", None)
        req_long = dim.get("displayLong", None)

        if req_id:
            # this is an update
            try:
                db_dim = SchoolDim.objects.get(pk=req_id)
                if req_source:
                    db_dim.source = req_source
                if req_field:
                    db_dim.field = req_field
                if req_short:
                    db_dim.display_short = req_short
                if req_long:
                    db_dim.display_long = req_long
                db_dim.save()
                results.append(True)
            except Exception:
                return HttpResponseBadRequest("bad parameters")
        else:
            # this is an insert
            db_dim = SchoolDim(
                source=req_source,
                field=req_field,
                display_short=req_short if req_short else "unset",
                display_long=req_long if req_long else "unset",
            )
            db_dim.save()
            results.append(db_dim.id)

    return HttpResponse(json.dumps(results))
