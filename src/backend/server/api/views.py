from rest_framework import generics, status, views, permissions
from django.http import HttpResponse, JsonResponse
import os
from .serializers import (
    ShortlistSerializer,
)
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Shortlist
from api.models.recommendation import Recommendation
from api.models.school import School
from authentication.models import User
import jwt
from django.conf import settings
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .renderers import ShortlistRenderer
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import (
    smart_str,
    smart_bytes,
    DjangoUnicodeDecodeError,
)
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.http import HttpResponsePermanentRedirect


class CustomRedirect(HttpResponsePermanentRedirect):

    allowed_schemes = [os.environ.get("APP_SCHEME"), "http", "https"]


class GetShortlistView(generics.GenericAPIView):
    serializer_class = ShortlistSerializer
    renderer_classes = (ShortlistRenderer,)

    def post(self, request):
        user_id = request.data["user_id"]
        if User.objects.filter(id=user_id).exists():
            shortlists = list(Shortlist.objects.filter(user_id=user_id).values())
            return JsonResponse(shortlists, safe=False)
        return Response(
            {"error": "User does not exists"},
            status=status.HTTP_400_BAD_REQUEST,
        )
