from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid


def default_settings():
    obj = {
        "settings": {
            "name": "My List",
            "color": "red",
            "icon": {"value": "unknown", "color": "green"},
        },
    }
    return obj


class Shortlist(models.Model):
    shortlist_id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    user_id = models.ForeignKey("authentication.User", on_delete=models.CASCADE)
    school_ids = ArrayField(
        models.UUIDField(null=True), size=3, blank=True, default=list
    )
    shortlist_name = models.CharField(max_length=50)
    settings = models.JSONField(default=default_settings)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["created_at"]
