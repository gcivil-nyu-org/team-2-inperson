"""Provides logged-in users metadata about their account (or the ID of an email)."""

import json

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
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    if not sr.is_logged_in:
        return HttpResponseForbidden("must be logged in")

    # check if post body has email
    email_search = sr.body.get("email", None)

    try:
        if email_search:
            # just send user id
            accounts = Account.objects.filter(email=email_search)
            if accounts.count() != 1:
                return HttpResponseBadRequest("account not found")
            return_obj = dict(accountId=accounts[0].id)
            return HttpResponse(json.dumps(return_obj))
        else:
            # self, send all data
            account = Account.objects.get(pk=sr.account)
            return HttpResponse(account.metadataJson())
    except Exception:
        return HttpResponseServerError("cannot find user record")

    return HttpResponse(account.metadataJson())
