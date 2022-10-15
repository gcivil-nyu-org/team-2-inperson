from django.shortcuts import render

# Create your views here.

from django.core.serializers import serialize
from django.http import HttpResponse
from .models import School

def get_schools(request):
    qs = School.objects.all()
    data = serialize("json", qs, fields=('dbn', 'school_name', 'school_type', 'num_enrollment', 'borough_name', 'borough_code', 'phone_number', 'primary_address', 'city', 'state', 'zip_code', 'district_code', 'neighborhood'))
    return HttpResponse(data, content_type="application/json")


#get schools by borough_choices
def get_schools_by_filters(request):
    qs = School.objects.all()
    data = serialize("json", qs, fields=('dbn', 'school_name', 'school_type', 'num_enrollment', 'borough_name', 'borough_code', 'phone_number', 'primary_address', 'city', 'state', 'zip_code', 'district_code', 'neighborhood'))
    return HttpResponse(data, content_type="application/json")





def index(request):
    return HttpResponse("Hello, world. You're at the api index.")

