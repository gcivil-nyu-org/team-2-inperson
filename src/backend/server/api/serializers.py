from rest_framework import serializers
from api.models.shortlist import Shortlist


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
