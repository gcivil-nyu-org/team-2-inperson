"""Handlers to manage dimensions and dimension-values."""
from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import SchoolDim

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


def _dim_upsert(
    id: int = None,
    source: str = None,
    field: str = None,
    short: str = None,
    long: str = None,
):
    """Update or Insert a dimension into django db."""

    if id:
        # this is an update
        try:
            dim = SchoolDim.objects.get(pk=id)
            if source:
                dim.source = source
            if field:
                dim.field = field
            if short:
                dim.display_short = short
            if long:
                dim.display_long = long
            dim.save()
            return HttpResponse()
        except Exception:
            return HttpResponseBadRequest("could not find dimension id")
    else:
        # this is an insert
        dim = SchoolDim(
            source=source, field=field, display_short=short, display_long=long
        )
        dim.save()
        return HttpResponse(dim.id)


body = {
    "updateDim": {
        "dimensions": [
            {
                "id": "blah blah",
                "source": "asdfasdf",
                "field": "asdfasdfasdf",
                "displayShort": "asdfasdf",
                "displayLong": "asdfasdf",
            }
        ],
    },
    "getDim": {
        "id": "aoilaskhdg",
        "source": "asdfasdf",
        "field": "asdfasdf",
        "short": "short",
        "long": "long",
    },
    "updateDimValues": {
        "dimValues": [
            {
                "schoolId": "adf",
                "dimId": "asdf",
                "value": {" HERE IS A JSON OBJECT THAT GETS PUT IN OUTRIGHT"},
            },
        ]
    },
    "getDimValues": {
        "id": "lkasjdf",
        "schoolId": "asdfasdf",
        "dimId": "asdfasdf",
        "dimField": "asdfasdf",
    },
}


@csrf_exempt
def school_dim_manage(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")
