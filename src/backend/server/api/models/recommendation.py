from __future__ import annotations
import json

from api.util.generators import gen_uuid
from django.db import models


class Recommendation(models.Model):
    id = models.CharField(max_length=32, default=gen_uuid, primary_key=True)
    # Account and School
    account = models.ForeignKey("authentication.User", on_delete=models.CASCADE)
    school = models.ForeignKey("School", on_delete=models.CASCADE)

    # Score field, ascending (lower is higher priority)
    rank_asc = models.FloatField(default=100_000)

    # Count of # of times this has been seen
    seen_count = models.IntegerField(default=0)

    # Flags for acceptance, trashed, and whether an associate recommends
    current_accepted = models.BooleanField(default=False)
    current_trashed = models.BooleanField(default=False)
    ever_accepted = models.BooleanField(default=False)
    ever_trashed = models.BooleanField(default=False)
    associate_recommended = models.BooleanField(default=False)

    # Time of last score;  Not sure if we'll use this ever
    scored_ts = models.BigIntegerField(default=0)

    class Meta:
        verbose_name = "Recommendation"
        verbose_name_plural = "Recommendations"
        indexes = [
            models.Index(fields=["rank_asc"]),
            models.Index(fields=["seen_count"]),
            models.Index(fields=["associate_recommended"]),
        ]

    def __str__(self):
        return "RECO<ACC:{}, SCH:{}>".format(self.account.id[:8], self.school.id[:8])

    def serializeJson(self):
        obj = dict(
            id=self.id,
            accountId=self.account.id,
            schoolId=self.school.id,
            rankAsc=self.rank_asc,
            seenCount=self.seen_count,
            currentAccepted=self.current_accepted,
            currentTrashed=self.current_trashed,
            everAccepted=self.ever_accepted,
            everTrashed=self.ever_trashed,
            associateRecommended=self.associate_recommended,
        )
        return json.dumps(obj, indent=" ")
