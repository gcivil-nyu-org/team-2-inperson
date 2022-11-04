from __future__ import annotations
import json

from api.util.generators import gen_uuid

from django.db import models


def verification_code():
    return gen_uuid(8)


def default_preferences():
    return {"preferredName": None}


class Account(models.Model):
    id = models.CharField(max_length=32, default=gen_uuid, primary_key=True)
    # login ability
    email = models.CharField(max_length=128)
    password_hash = models.CharField(max_length=128, null=True, blank=True)

    # email verification
    email_verificiation = models.CharField(
        max_length=8, default=verification_code, null=False, blank=False
    )
    email_is_verified = models.BooleanField(default=False)
    email_sent_ts = models.BigIntegerField(default=0)

    account_type = models.CharField(
        max_length=20, choices=(("PARENT", "P"), ("STUDENT", "S"), ("OTHER", "O"))
    )

    # account is associated with... forms parent-child or child-parent relationship
    # relational table is not a good way to store hierarchical inheritance, so if
    # anyone has ideas on how to enforce these cascading constraints better, have at it
    associates = models.ManyToManyField("Account", blank=True)

    # account preferences can be any json object
    preferences = models.JSONField(default=default_preferences)

    class Meta:
        indexes = [models.Index(fields=["email"])]

    def __str__(self):
        return "ACCNT<{}, {}>".format(self.id[:10], self.account_type)

    def metadataJson(self):
        obj_repr = dict(
            accountId=self.id,
            email=self.email,
            emailVerified=self.email_is_verified,
            emailSentTS=self.email_sent_ts,
            accountType=self.account_type,
            associates=[_.id for _ in self.associates.all()],
            preferences=self.preferences,
        )
        return json.dumps(obj_repr)
