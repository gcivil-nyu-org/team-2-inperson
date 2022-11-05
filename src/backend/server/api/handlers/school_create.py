"""Creates a school"""
from api.handlers.shortlist_request import ShortlistRequest
from api.models.school import School

from django.http import HttpRequest
from django.http import HttpResponse
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def school_create(request: HttpRequest):
    sr = ShortlistRequest(request)
    if sr.method != "POST":
        return HttpResponseBadRequest("bad call")

    request_schoolId = sr.body.get("schoolId", None)
    request_nycId = sr.body.get("nycId", None)
    request_name = sr.body.get("name", None)
    request_desc = sr.body.get("desc", None)
    request_schoolType = sr.body.get("schoolType", None)
    request_url = sr.body.get("url", None)
    request_email = sr.body.get("email", None)
    request_phone = sr.body.get("phone", None)
    request_boroughCode = sr.body.get("boroughCode", None)
    request_address = sr.body.get("address", None)
    request_district = sr.body.get("district", None)
    request_lat = sr.body.get("lat", None)
    request_lon = sr.body.get("lon", None)

    required_fields = (
        request_schoolId,
        request_nycId,
        request_name,
        request_desc,
        request_schoolType,
        request_url,
        request_email,
        request_phone,
        request_boroughCode,
        request_address,
        request_district,
        request_lat,
        request_lon,
    )

    if any(field is None for field in required_fields):
        return HttpResponseBadRequest("missing required details")

    if School.objects.filter(nyc_id=request_nycId).count() > 0:
        return HttpResponseBadRequest("school exists")

    school = School(
        nyc_id=request_nycId,
        name=request_name,
        desc=request_desc,
        school_type=request_schoolType,
        url=request_url,
        email=request_email,
        phone=request_phone,
        borough_code=request_boroughCode,
        address=request_address,
        district=request_district,
        lat=request_lat,
        lon=request_lon,
    )

    school.save()
    return HttpResponse(school.id)
