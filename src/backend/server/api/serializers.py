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
        fields = [
            "shortlist_id",
            "user_id",
            "school_ids",
            "shortlist_name",
            "color",
            "icon_color",
            "icon_value",
        ]


class ShortlistSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)

    default_error_messages = {
        "username": "The username should only contain alphanumeric characters"
    }

    class Meta:
        model = User
        fields = ["email", "username", "password"]

    def validate(self, attrs):
        username = attrs.get("username", "")

        if not username.isalnum():
            raise serializers.ValidationError(self.default_error_messages)
        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
