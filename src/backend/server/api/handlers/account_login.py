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
def account_login(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    request_email = sr.body.get("email", None)
    request_passwordHash = sr.body.get("passwordHash", None)
    if not request_email or not request_passwordHash:
        return HttpResponseBadRequest("missing parameters")

    accounts = Account.objects.filter(email=request_email)
    if accounts.count() != 1:
        return HttpResponseBadRequest("account not found")

    account = accounts[0]
    if account.password_hash != request_passwordHash:
        return HttpResponseForbidden("bad login")

    return HttpResponse(account.metadataJson())
