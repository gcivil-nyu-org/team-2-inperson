"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from api.handlers import account_create
from api.handlers import account_login
from api.handlers import account_metadata
from api.handlers import account_update
from api.handlers import school_create
from api.handlers import school_metadata
from api.handlers import school_dim
from api.handlers import school_dim_upsert
from api.handlers import school_dim_value
from api.handlers import school_dim_value_upsert
from api.handlers import recommendation
from api.handlers import recommendation_update

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
import os


schema_view = get_schema_view(
    openapi.Info(
        title="Shortlist Auth APIs",
        default_version="v1",
        description="All the apis are gonna be here",
        terms_of_service="https://www.shortlists.nyc/",
        contact=openapi.Contact(email="jain.v@nyu.edu"),
        license=openapi.License(name="Test License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
    url=os.environ.get("SHORTLIST_API_URL"),
)

urlpatterns = [
    path("", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
    path("admin/", admin.site.urls),
    path("auth/", include("authentication.urls")),
    path("shortlists/", include("api.urls")),
    path("account/create", account_create),
    path("account/login", account_login),
    path("account/metadata", account_metadata),
    path("account/update", account_update),
    path("school/create", school_create),
    path("school/metadata", school_metadata),
    path("school/dimension", school_dim),
    path("school/dimension/upsert", school_dim_upsert),
    path("school/dimension/value", school_dim_value),
    path("school/dimension/value/upsert", school_dim_value_upsert),
    path("recommendation", recommendation),
    path("recommendation/update", recommendation_update),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
