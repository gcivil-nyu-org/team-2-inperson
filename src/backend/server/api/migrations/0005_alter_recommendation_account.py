# Generated by Django 4.1.2 on 2022-11-13 03:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("api", "0004_recommendation_api_recomme_seen_co_15cdd7_idx_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="recommendation",
            name="account",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL
            ),
        ),
    ]
