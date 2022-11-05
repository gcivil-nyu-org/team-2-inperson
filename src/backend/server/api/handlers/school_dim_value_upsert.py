from __future__ import annotations

import json

from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import SchoolDim

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def school_dim_value_upsert(request: HttpRequest):
    pass
