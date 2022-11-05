from api.models.account import Account
from api.models.school import School
from api.models.school import SchoolDim
from api.models.school import SchoolDimValue
from api.models.recommendation import Recommendation

from django.contrib import admin


admin.site.register(Account)
admin.site.register(School)
admin.site.register(SchoolDim)
admin.site.register(SchoolDimValue)
admin.site.register(Recommendation)
