from django.db import models
import uuid

# Create your models here.
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)

from rest_framework_simplejwt.tokens import RefreshToken


def default_preferences():
    return {"preferredName": None}

class UserManager(BaseUserManager):
    def create_user(self, username, email, user_type, password=None):
        if username is None:
            raise TypeError("Users should have a username")
        if email is None:
            raise TypeError("Users should have a Email")
        if user_type is None:
            raise TypeError("Users should have a User Type")
        user = self.model(username=username, email=self.normalize_email(email), user_type=user_type)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password=None):
        if password is None:
            raise TypeError("Password should not be none")

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


AUTH_PROVIDERS = {
    "facebook": "facebook",
    "google": "google",
    "twitter": "twitter",
    "email": "email",
}


class User(AbstractBaseUser, PermissionsMixin):
	username = models.CharField(max_length=255, unique=True, db_index=True)
	email = models.EmailField(max_length=255, unique=True, db_index=True)
	is_verified = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)
	is_staff = models.BooleanField(default=False)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	auth_provider = models.CharField(
	    max_length=255, blank=False, null=False, default=AUTH_PROVIDERS.get("email")
	)
	user_type = models.CharField(
		max_length=20, choices=(("PARENT", "P"), ("STUDENT", "S"), ("OTHER", "O"))
	)

	# account is associated with... forms parent-child or child-parent relationship
	# relational table is not a good way to store hierarchical inheritance, so if
	# anyone has ideas on how to enforce these cascading constraints better, have at it
	associates = models.ManyToManyField("User", blank=True)

	# account preferences can be any json object
	preferences = models.JSONField(default=default_preferences)

	USERNAME_FIELD = "email"
	REQUIRED_FIELDS = ["username", "user_type"]

	objects = UserManager()

	def __str__(self):
	    return self.email

	def tokens(self):
	    refresh = RefreshToken.for_user(self)
	    return {"refresh": str(refresh), "access": str(refresh.access_token)}
