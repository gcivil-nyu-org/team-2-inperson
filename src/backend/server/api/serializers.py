from rest_framework import serializers
from api.models import Shortlist
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import (
    force_str,
)
from django.utils.http import urlsafe_base64_decode


from rest_framework import serializers
from api.models import School, Shortlist


class ShortlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortlist
        fields = ["user_id"]


class GetAShortlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortlist
        fields = ["shortlist_id"]


class UpdateShortlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortlist
        fields = ["shortlist_id", "user_id", "school_ids", "shortlist_name", "settings"]
