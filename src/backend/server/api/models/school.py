from __future__ import annotations
import json

from api.util.generators import gen_uuid

from django.db import models
from typing import Tuple


class School(models.Model):
    """School contains static profile-like data about the school."""

    id = models.CharField(max_length=32, default=gen_uuid, primary_key=True)

    nyc_id = models.CharField(max_length=6, null=True, blank=True)
    name = models.CharField(max_length=200, default="No Name Provided")
    desc = models.TextField(default="No Description Provided")

    # TODO(?): set choices
    school_type = models.CharField(max_length=32, default="UNSET")

    url = models.URLField()
    email = models.CharField(max_length=200, default="noreply@shortlist.nyc")
    phone = models.CharField(max_length=32)

    # TODO(?): set choices
    borough_code = models.IntegerField(default=0)

    address = models.CharField(max_length=200, default="No Address Provided")
    district = models.IntegerField(default=0)

    lat = models.FloatField(default=40.7128)
    lon = models.FloatField(default=-74.0060)

    class Meta:
        indexes = [models.Index(fields=["nyc_id"])]
        verbose_name = "School"
        verbose_name_plural = "Schools"

    def __str__(self):
        return "SCHOOL<{}, {}>".format(self.id[:10], self.nyc_id)

    @property
    def lat_lon_hash(self) -> Tuple[float, float]:
        """Round lat and lon to nearest .005."""
        lat_hash = round(self.lat * 200) / 200
        lon_hash = round(self.lon * 200) / 200
        return (lat_hash, lon_hash)

    def metadataJson(self):
        obj_repr = dict(
            schoolId=self.id,
            nycId=self.nyc_id,
            name=self.name,
            desc=self.desc,
            schoolType=self.school_type,
            url=self.ur,
            email=self.email,
            phone=self.phone,
            boroughCode=self.borough_code,
            address=self.address,
            district=self.district,
            lat=self.lat,
            lon=self.lon,
            latLonHash=self.lat_lon_hash,
        )


class SchoolDim(models.Model):
    """SchoolDim stores metadata about the data fields.

    This model is used to allow us to more easily change which fields are
    to be used/available for both display and the algorithm.  This data
    currently resides in s3://nyu-shortlist-school-data/*
    """

    id = models.AutoField(primary_key=True)

    source = models.CharField(max_length=100, default="unset")
    field = models.CharField(max_length=100, default="unset")
    display_short = models.CharField(max_length=100, default="unset")
    display_long = models.CharField(max_length=200, default="No Detail Provided")

    # TODO(?): should we encode the dimension's expected type?  let's wait
    # until we need it, but that would go here.

    class Meta:
        indexes = [models.Index(fields=["field"])]
        verbose_name = "School Dimension"
        verbose_name_plural = "School Dimensions"

    def __str__(self):
        return "DIM<{}, {}>".format(str(self.id)[:5], self.field[:10])


class SchoolDimValue(models.Model):
    """SchoolDimValue models relationship between schools, dims, and the value"""

    id = models.BigAutoField(primary_key=True)

    # Link to school
    school = models.ForeignKey(
        "School", null=True, blank=True, on_delete=models.CASCADE
    )

    # Link to dimension
    dim = models.ForeignKey(
        "SchoolDim", null=True, blank=True, on_delete=models.CASCADE
    )

    value = models.JSONField(null=True, blank=True)

    class Meta:
        verbose_name = "School Dimension Value"
        verbose_name_plural = "School Dimension Values"
