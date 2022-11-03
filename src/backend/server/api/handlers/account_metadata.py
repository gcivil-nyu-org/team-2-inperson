"""Provides metadata about a loggedin account."""

from api.handlers.shortlist_request import ShortlistRequest
from api.models.account import Account

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.http import HttpResponseForbidden
from django.http import HttpResponseServerError
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def account_metadata(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "GET":
        return HttpResponseBadRequest("bad call")

    if not sr.is_logged_in:
        return HttpResponseForbidden("must be logged in")

    try:
        account = Account.objects.get(pk=sr.account)
    except Exception:
        return HttpResponseServerError("cannot find user record")

    return HttpResponse(account.metadataJson())
