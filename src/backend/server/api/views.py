from rest_framework import generics, status, views, permissions
import os
from .serializers import (
    RegisterSerializer,
    SetNewPasswordSerializer,
    ResetPasswordEmailRequestSerializer,
    EmailVerificationSerializer,
    LoginSerializer,
    LogoutSerializer,
    ResendEmailSerializer,
)
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from api.models.recommendation import Recommendation
from api.models.school import School
import jwt
from django.conf import settings
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .renderers import UserRenderer
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import (
    smart_str,
    smart_bytes,
    DjangoUnicodeDecodeError,
)
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from django.http import HttpResponsePermanentRedirect


class CustomRedirect(HttpResponsePermanentRedirect):

    allowed_schemes = [os.environ.get("APP_SCHEME"), "http", "https"]


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    renderer_classes = (UserRenderer,)

    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        user = User.objects.get(email=user_data["email"])
        token = RefreshToken.for_user(user).access_token
        # urrent_site = get_current_site(request).domain
        # relativeLink = reverse("email-verify")
        base_url = os.environ.get("SHORTLIST_API_URL")
        absurl = base_url + "/auth/email-verify?token=" + str(token)
        email_body = """\
            <html>
                <head></head>
                <body>
                    <p>
                        Hi %s,
                        Click on the below below to verify and activate your account
                    </p>
                    <a href=%s target="_blank" style="background-color: green; color: black; padding: 14px 25px; text-align: center; text-decoration: none; display: inline-block; overflow:hidden;">
                        Click here to verify
                    </a>

                </body>
            </html>
            """ % (
            user.username,
            absurl,
        )
        data = {
            "email_body": email_body,
            "to_email": user.email,
            "email_subject": "Verify your email",
        }
        Util.send_email(data)
        schools = School.objects.all()
        for school in schools:
            recommendation = Recommendation(account=user, school=school)
            recommendation.save()
        return Response(user_data, status=status.HTTP_201_CREATED)
