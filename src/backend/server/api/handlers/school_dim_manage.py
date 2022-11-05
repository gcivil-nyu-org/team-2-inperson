"""Handlers to manage dimensions and dimension-values."""
from __future__ import annotations

import json

from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import SchoolDim
from api.models.school import SchoolDimValue

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

from typing import Tuple


def _dim_value_upsert(school_id: str, dim_id: str, value: object):
    """Update or Insert a dimension value into django db.

    Body Example:
      required: updateDimValues, dimensionValues[], schoolId, dimId, value
      payload:
        "updateDimValues": {
            "dimensionValues": [
                {
                    "schoolId": "adf",
                    "dimId": "asdf",
                    "value": {" HERE IS A JSON OBJECT THAT GETS PUT IN OUTRIGHT"},
                },
            ]
        }
    """
    dim_values = SchoolDimValue.objects.filter(school_id=school_id, dim_id=dim_id)
    if dim_values.count() == 1:
        # update
        dim_value = dim_values[0]
        dim_value.value = value
        dim_value.save()
    else:
        # insert
        dim_value = SchoolDimValue(school_id=school_id, dim_id=dim_id, value=value)
        dim_value.save()

    # TODO(?): should this return something?


"""
body = {
   
    "getDim": {
        "id": "aoilaskhdg",
        "source": "asdfasdf",
        "field": "asdfasdf",
        "short": "short",
        "long": "long",
    },
    
    "getDimValues": {
        "id": "lkasjdf",
        "schoolId": "asdfasdf",
        "dimId": "asdfasdf",
        "dimField": "asdfasdf",
    },
}
"""


@csrf_exempt
def school_dim_manage(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    elif updateDimValues := sr.body.get("updateDimValues", None):
        # update dim values
        new_dim_values = updateDimValues.get("dimensionValues", None)
        if not new_dim_values or not isinstance(new_dim_values, list):
            return HttpResponseBadRequest("missing parameters")
        for dim_value in new_dim_values:
            school_id = dim_value.get("schoolId", None)
            dim_id = dim_value.get("dimId", None)
            value = dim_value.get("value", None)
            if not school_id or not dim_id or not value:
                return HttpResponseBadRequest("missing parameters")
            _dim_value_upsert(school_id, dim_id, value)
        return HttpResponse()
    elif getDim := sr.body.get("getDim", None):
        # get dim
        pass
    elif getDimValues := sr.body.get("getDimValues", None):
        # get dim values
        pass
    else:
        return HttpResponseBadRequest("bad call")
