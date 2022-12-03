from api.models.account import Account
from api.models.school import School
from api.models.school import SchoolDim
from api.models.school import SchoolDimValue
from api.models.recommendation import Recommendation
from api.models.shortlist import Shortlist

from django.contrib import admin


admin.site.register(Account)
admin.site.register(School)
admin.site.register(SchoolDim)
admin.site.register(SchoolDimValue)
admin.site.register(Shortlist)


class RecommendationAdmin(admin.ModelAdmin):
    readonly_fields = (
        "account",
        "school",
        "id",
    )
    list_filter = ("account",)
    list_display = ("account", "school", "rank_asc")
    list_display_links = ("rank_asc",)


admin.site.register(Recommendation, RecommendationAdmin)
