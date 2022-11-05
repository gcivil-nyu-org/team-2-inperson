"""Get Recommendations."""
from api.handlers.shortlist_request import ShortlistRequest
from api.models.account import Account

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def recommendation(request: HttpRequest):
  pass
