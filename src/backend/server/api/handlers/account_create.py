"""Creates an account."""
from api.handlers.shortlist_request import ShortlistRequest
from api.models.account import Account
from api.models.recommendation import Recommendation
from api.models.school import School

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def account_create(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    request_email = sr.body.get("email", None)
    request_preferences = sr.body.get("preferences", None)
    request_passwordHash = sr.body.get("passwordHash", None)
    request_accountType = sr.body.get("accountType", None)
    if (
        not request_email
        or not request_preferences
        or not request_accountType
        or not request_passwordHash
    ):
        return HttpResponseBadRequest("missing required details")

    if Account.objects.filter(email=request_email).count() > 0:
        return HttpResponseBadRequest("email exists")

    account = Account(
        email=request_email,
        password_hash=request_passwordHash,
        account_type=request_accountType,
        preferences=request_preferences,
    )

    # account.preferences["preferredName"] = request_preferredName
    account.save()

    # setup blank recommendations
    schools = School.objects.all()
    for school in schools:
        reco = Recommendation(account=account, school=school)
        reco.save()

    return HttpResponse(account.id)
