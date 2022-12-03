from django.urls import path
from .views import (
    GetShortlistView,
)
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path("all", GetShortlistView.as_view(), name="shortlists"),
]
