"""Get Recommendations."""
import json
import random

from api.handlers.shortlist_request import ShortlistRequest
from api.models.account import Account
from api.models.school import School
from api.models.recommendation import Recommendation

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


def strategy_ranking_only(account_id: str, count: int):
    recos = (
        Recommendation.objects.filter(account_id=account_id, seen_count=0)
        .only("school_id", "rank_asc", "seen_count", "associate_recommended")
        .order_by("rank_asc")[:count]
    )
    result = [
        dict(
            recommendationId=_.id,
            schoolId=_.school.id,
            rankAsc=_.rank_asc,
            seenCount=_.seen_count,
            associateRecommended=_.associate_recommended,
        )
        for _ in recos
    ]
    random.shuffle(result)
    return result


def strategy_explore_exploit(account_id: str, explore_prob: float, count: int):
    pass


@csrf_exempt
def recommendation(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "GET":
        return HttpResponseBadRequest("bad call")

    req_account_id = request.GET.get("accountId", None)
    if not req_account_id:
        return HttpResponseBadRequest("missing parameters")

    req_count = int(request.GET.get("count", "5"))

    # RANKING, EXPLORE, ...
    req_strategy = request.GET.get("strategy", "RANKING")
    if req_strategy == "RANKING":
        results = strategy_ranking_only(req_account_id, req_count)
    elif req_strategy == "EXPLORE":
        req_prob = float(request.GET.get("xProb", "0.40"))
        results = strategy_explore_exploit(req_account_id, req_prob, req_count)
    print(results)
    return HttpResponse(json.dumps(results, indent=" "))
