# Generated by Django 4.1.2 on 2022-11-05 23:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='school',
            options={'verbose_name': 'School', 'verbose_name_plural': 'Schools'},
        ),
        migrations.AlterModelOptions(
            name='schooldim',
            options={'verbose_name': 'School Dimension', 'verbose_name_plural': 'School Dimensions'},
        ),
        migrations.AlterModelOptions(
            name='schooldimvalue',
            options={'verbose_name': 'School Dimension Value', 'verbose_name_plural': 'School Dimension Values'},
        ),
    ]
