from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid
from api.util.generators import gen_uuid


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
        models.CharField(max_length=32, null=True),
        size=4,
        blank=True,
        default=list,
    )
    shortlist_name = models.CharField(max_length=50)
    settings = models.JSONField(default=default_settings)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["created_at"]
