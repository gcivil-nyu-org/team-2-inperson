"""Provides metadata about a loggedin account."""

from api.handlers.shortlist_request import ShortlistRequest
from api.models.account import Account
from api.util.generators import gen_uuid
from api.util.generators import gen_ts

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.http import HttpResponseForbidden
from django.http import HttpResponseServerError
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def account_update(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    if not sr.is_logged_in:
        return HttpResponseForbidden("must be logged in")

    # TODO: replace this with the header
    account_id = sr.body.get("accountId", None)

    try:
        account = Account.objects.get(pk=account_id)
    except Exception:
        return HttpResponseServerError("cannot find user record")

    try:
        for k in sr.body:
            if k == "email":
                # Redo an email flow... this is a big deal
                # TODO(?): SEND EMAIL...
                account.email = sr.body[k]
                account.email_is_verified = False
                account.email_verificiation = gen_uuid(8)
                account.email_sent_ts = gen_ts()
                continue
            if k == "associates":
                account.associates.clear()
                for _ in sr.body[k]:
                    account.associates.add(_)
                continue
            if k == "preferences":
                account.preferences = sr.body[k]
                continue
            if k == "passwordHash":
                account.password_hash = sr.body[k]
                continue
        account.save()
    except Exception:
        return HttpResponseServerError("could not update")

    return HttpResponse(account.metadataJson())
