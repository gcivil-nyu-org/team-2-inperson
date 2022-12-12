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
    UpdateUserSerializer,
    SendInviteSerializer,
)
from rest_framework.parsers import JSONParser

from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from api.models.recommendation import Recommendation
from api.models.school import School
from api.models.shortlist import Shortlist
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
from django.http import JsonResponse

# from .helpers import default_shortlists
from django.http import HttpResponsePermanentRedirect
from api.handlers.recommendation import rank_update


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
        base_url = os.environ.get("SHORTLIST_API_URL")
        absurl = base_url + "auth/email-verify?token=" + str(token)
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

        names = ["Easy", "Target", "Dream"]
        colors = ["#bec7e7", "#bcd6a2", "#ecf0f3"]

        for i in range(0, 3):
            create_shortlist = Shortlist(
                user_id=user,
                school_ids=[],
                shortlist_name=names[i],
                settings={
                    "name": names[i],
                    "color": colors[i],
                    "icon": {"value": "token", "color": "black"},
                },
            )
            create_shortlist.save()
        return Response(user_data, status=status.HTTP_201_CREATED)


class VerifyEmail(views.APIView):
    serializer_class = EmailVerificationSerializer
    token_param_config = openapi.Parameter(
        "token",
        in_=openapi.IN_QUERY,
        description="Description",
        type=openapi.TYPE_STRING,
    )

    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self, request):
        token = request.GET.get("token")
        redirect_url_login = "http://www.shortlist.nyc/verification"
        redirect_url_signup = "http://www.shortlist.nyc/verification"
        try:
            payload = jwt.decode(token, settings.SECRET_KEY)
            user = User.objects.get(id=payload["user_id"])
            if not user.is_verified:
                user.is_verified = True
                user.save()
            return CustomRedirect(
                redirect_url_login + "?token_valid=True&message=Successfully Activated"
            )

        except jwt.ExpiredSignatureError:
            return CustomRedirect(
                redirect_url_signup + "?token_valid=False&message=Activation Expired"
            )

        except jwt.exceptions.DecodeError:
            return CustomRedirect(
                redirect_url_signup + "?token_valid=False&message=Invalid token"
            )


class ResendEmail(generics.GenericAPIView):
    serializer_class = ResendEmailSerializer

    def post(self, request):
        email = request.data["email"]
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            token = RefreshToken.for_user(user).access_token
            base_url = os.environ.get("SHORTLIST_API_URL")
            absurl = base_url + "auth/email-verify?token=" + str(token)
            email_body = """\
                <html>
                    <head></head>
                    <body>
                        <p>
                            Hi there,
                            Use the link below to re-verify your email
                        </p>
                        <a href=%s target="_blank" style="background-color: green; color: black; padding: 14px 25px; text-align: center; text-decoration: none; display: inline-block; overflow:hidden;">
                            Activate
                        </a>
                    </body>
                </html>
                """ % (
                absurl
            )
            token = PasswordResetTokenGenerator().make_token(user)
            data = {
                "email_body": email_body,
                "to_email": user.email,
                "email_subject": "Activate your account",
            }
            Util.send_email(data)
            return Response(
                {
                    "success": "We have resend you a link to your email to activate your account"
                },
                status=status.HTTP_200_OK,
            )
        return Response(
            {
                "error": "This email address does not exists. Please enter a valid email address"
            },
            status=status.HTTP_400_BAD_REQUEST,
        )


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        email = request.data["email"]

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(request=request).domain
            relativeLink = reverse(
                "password-reset-confirm", kwargs={"uidb64": uidb64, "token": token}
            )
            absurl = "http://" + current_site + relativeLink
            email_body = "Hello, \n Use link below to reset your password  \n" + absurl
            data = {
                "email_body": email_body,
                "to_email": user.email,
                "email_subject": "Reset your passsword",
            }
            Util.send_email(data)
        return Response(
            {"success": "We have sent you a link to reset your password"},
            status=status.HTTP_200_OK,
        )


class SendInviteView(generics.GenericAPIView):
    serializer_class = SendInviteSerializer

    def post(self, request):
        email = request.data["email"]
        absurl = "https://www.shortlist.nyc/signup"
        email_body = "Hello, \n You have been invited to sign up.  \n" + absurl
        data = {
            "email_body": email_body,
            "to_email": email,
            "email_subject": "Invitation to SignUp",
        }
        Util.send_email(data)
        return Response(
            {
                "success": "We have sent an invite link to you child to signup to shortlists."
            },
            status=status.HTTP_200_OK,
        )


class PasswordTokenCheckAPI(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def get(self, request, uidb64, token):

        try:
            id = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)
            redirect_url_reset = "http://www.shortlist.nyc/reset"
            if not PasswordResetTokenGenerator().check_token(user, token):
                url = f"{redirect_url_reset}?error=Token is not valid, please request a new one&status={status.HTTP_401_UNAUTHORIZED}"
                return CustomRedirect(url)

            url = f"{redirect_url_reset}?success=True&message=Credentials Valid&uidb64={uidb64}&token={token}&status={status.HTTP_200_OK}"
            return CustomRedirect(url)

        except DjangoUnicodeDecodeError:
            if not PasswordResetTokenGenerator().check_token(user):
                url = f"{redirect_url_reset}?error=Token is not valid, please request a new one&status={status.HTTP_401_UNAUTHORIZED}"
                return CustomRedirect(url)


class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            {"success": True, "message": "Password reset success"},
            status=status.HTTP_200_OK,
        )


class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)


class UserDetailsView(generics.GenericAPIView):
    serializers_class = UpdateUserSerializer

    def get(self, request, user_id):
        if User.objects.filter(id=user_id).exists():
            user = User.objects.get(id=user_id)
            return Response(user.metadataJson(), status=status.HTTP_200_OK)
        return Response(
            {"error": "Invalid Shortlist ID"},
            status=status.HTTP_404_NOT_FOUND,
        )

    def put(self, request, user_id):
        data = JSONParser().parse(request)
        if User.objects.filter(id=user_id).exists():
            user = User.objects.get(id=user_id)
            updatePrefs = data["preferences"]["recommendationPreferences"]["update"]
            del data["preferences"]["recommendationPreferences"]["update"]

            serializer = UpdateUserSerializer(user, data=data)
            if serializer.is_valid():
                serializer.save()
                if updatePrefs:
                    rank_update(
                        user_id, data["preferences"]["recommendationPreferences"]
                    )
                return JsonResponse(serializer.data)
            else:
                return Response(
                    {"error": "Bad Request. Check Again"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        return Response(
            {"error": "User Not Found"},
            status=status.HTTP_404_NOT_FOUND,
        )
