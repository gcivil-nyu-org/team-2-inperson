"""Get Recommendations."""
import json
import random

from api.handlers.shortlist_request import ShortlistRequest

from django.db import connection
from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

"""
TODO TODO TODO
THIS WHOLE THING NEEDS ADDITIONAL OPTIMIZATIONS FOR SPEED/JOIN-TIME

- Refactor the parts into a separate algorithm folder possibly
- Actually Implement the Explore-Exploit mix algorithm
- Implement a preferences' merge that flags fields as 'simple' or not
- Refactor the "simple" school view into a completely different
    "detail" view to reflect the huge size of data we'll have avial
TODO TODO TODO
"""


def camel_caser(input):
    vals = input.split("_")
    if len(vals) > 1:
        for i in range(1, len(vals)):
            vals[i] = vals[i].capitalize()
    return "".join(vals)


def dictfetchall(cursor):
    columns = [camel_caser(col[0]) for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]


DIM_QUERY = """
SELECT
  -- schoolz.*,
  dimz.id as dim_id,
  -- dimz.source as dim_source,
  -- dimz.field as dim_field,
  dimz.display_short as dim_short,
  -- dimz.display_long as dim_long,
  dimz_valz.value,
  false as is_simple

FROM
  api_school as schoolz
  inner join api_schooldimvalue as dimz_valz ON
    dimz_valz.school_id = schoolz.id
  inner join api_schooldim as dimz ON
    dimz.id = dimz_valz.dim_id

WHERE schoolz.id='{}'
"""
BASE_UPDATE = """
UPDATE api_recommendation recz
    SET rank_asc = rank_asc - ROUND(dimz_valz.value::numeric * {})
FROM
    api_school as schoolz
INNER JOIN api_schooldimvalue as dimz_valz ON
    dimz_valz.school_id = schoolz.id
INNER JOIN api_schooldim as dimz ON
    dimz.id = dimz_valz.dim_id
WHERE recz.school_id = schoolz.id
AND dimz.field = '{}'
AND recz.account_id = {}
"""


def school_formatter(school_id: str, account_id: str):
    """Used to format the school output with preference integration."""
    with connection.cursor() as cursor:
        cursor.execute("SELECT * from api_school where id = '{}'".format(school_id))
        school_records = dictfetchall(cursor)

        cursor.execute(DIM_QUERY.format(school_id))
        tmp = dictfetchall(cursor)
        school_dims = []
        for _ in tmp:
            _["value"] = json.loads(_["value"])
            school_dims.append(_)

    return dict(schoolMetadata=school_records[0], schoolDimensions=school_dims)


def strategy_ranking_only(account_id: str, count: int):
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT id, school_id, rank_asc, seen_count, associate_recommended "
            "FROM api_recommendation WHERE account_id = '{}' and seen_count = 0 "
            "ORDER BY rank_asc LIMIT {}".format(account_id, count)
        )
        recos = dictfetchall(cursor)
    result = []
    for _ in recos:
        _["school"] = school_formatter(_["schoolId"], account_id)
        result.append(_)

    random.shuffle(result)
    return result


def strategy_explore_exploit(account_id: str, explore_prob: float, count: int):
    return "Not Implemented"


# Update rankings based on preference data
def rank_update(account_id: str, prefData: dict):
    # print(type(data))
    boroughs = [
        "",
        "Bronx",
        "Brooklyn",
        "Manhattan",
        "Queens",
        "Staten Island",
    ]
    for question in prefData:
        response = prefData[question]["Response"]
        if not response:
            continue
        # rigorous instruction
        elif question == "q1":
            QUERY = BASE_UPDATE.format(int(response) * 100, "survey_pp_ri", account_id)
        # supportive environment
        elif question == "q2":
            QUERY = BASE_UPDATE.format(int(response) * 100, "survey_pp_se", account_id)
        # borough
        elif question == "q3":
            QUERY = """
            UPDATE api_recommendation R
                SET rank_asc = rank_asc - 1000
            FROM api_school S
            WHERE R.school_id = S.id
            AND S.borough_code = {}
            AND R.account_id = {}
            """.format(
                boroughs.index(response), account_id
            )
        # academic achievement
        elif question == "q4":
            QUERY = BASE_UPDATE.format(
                int(response) * 0.1, "mean_sat_readwrite", account_id
            )

        with connection.cursor() as cursor:
            cursor.execute(QUERY)
    return "Updated rankings: ", account_id


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
    return HttpResponse(json.dumps(results))
