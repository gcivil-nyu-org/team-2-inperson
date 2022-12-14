from django.urls import path
from .views import GetShortlistView, SingleShortlistView

urlpatterns = [
    path("all", GetShortlistView.as_view(), name="shortlists"),
    path(
        "<uuid:shortlist_id>/", SingleShortlistView.as_view(), name="update-shortlist"
    ),
]
