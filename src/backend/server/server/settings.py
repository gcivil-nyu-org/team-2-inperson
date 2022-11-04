"""
Django settings for server project.

Generated by 'django-admin startproject' using Django 2.2.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("SHORTLIST_DJANGO_SECRET")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:80",
    "http://localhost:9000",
    "http://127.0.01:80",
    "http://127.0.0.1:9000",
    "http://*.elb.amazonaws.com",
    "http://*.compute-1.amazonaws.com",
    "https://*.shortlist.nyu",
    "http://*.shortlist.nyu",
]


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django_extensions",
    "api",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "server.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "server.wsgi.application"


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": os.environ.get("SHORTLIST_RDS_DB"),
        "USER": os.environ.get("SHORTLIST_RDS_USER"),
        "PASSWORD": os.environ.get("SHORTLIST_RDS_PASSWORD"),
        "HOST": os.environ.get("SHORTLIST_RDS_ENDPOINT"),
        "PORT": os.environ.get("SHORTLIST_RDS_PORT"),
    }
}

XRAY_RECORDER = {
    "AWS_XRAY_DAEMON_ADDRESS": "127.0.0.1:2000",
    # If turned on built-in database queries and template
    #   rendering will be recorded as subsegments
    "AUTO_INSTRUMENT": True,
    "AWS_XRAY_CONTEXT_MISSING": "LOG_ERROR",
    "PLUGINS": (),
    "SAMPLING": True,
    "SAMPLING_RULES": None,
    # the segment name for segments generated from incoming requests
    "AWS_XRAY_TRACING_NAME": "Shortlist",
    "DYNAMIC_NAMING": None,  # defines a pattern that host names should match
    # defines when a segment starts to stream out its children subsegments
    "STREAMING_THRESHOLD": None,
}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",  # noqa:E501
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",  # noqa:E501
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",  # noqa:E501
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",  # noqa:E501
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_ROOT = "static"
STATIC_URL = "static/"
