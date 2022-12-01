from .test_setup import TestSetUp
from ..models import User

from unittest.mock import patch


class TestViews(TestSetUp):
    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.register_url)
        self.assertEqual(res.status_code, 400)

    def test_user_can_register_correctly(self):
        with patch("authentication.utils.Util.send_email") as mocked_email:
            res = self.client.post(self.register_url, self.user_data, format="json")
            self.assertEqual(res.data["email"], self.user_data["email"])
            self.assertEqual(res.data["username"], self.user_data["username"])
            self.assertEqual(res.status_code, 201)

            # Email Testing
            self.assertTrue(mocked_email.call_count == 2, "django call to send email")

            # first call, first positional
            email_call = mocked_email.mock_calls[0].args[0]

            self.assertTrue(isinstance(email_call, dict), "send email called with dict")

            self.assertEqual(
                email_call["email_subject"],
                "Verify your email",
                "email subject matches",
            )
            self.assertEqual(
                email_call["to_email"],
                self.user_data["email"],
                "email to address matches",
            )
            self.assertTrue("email_body" in email_call, "email body present")

    def test_user_cannot_login_with_unverified_email(self):
        self.client.post(self.register_url, self.user_data, format="json")
        res = self.client.post(self.login_url, self.user_data, format="json")
        self.assertEqual(res.status_code, 401)

    def test_user_can_login_after_verification(self):
        response = self.client.post(self.register_url, self.user_data, format="json")
        email = response.data["email"]
        user = User.objects.get(email=email)
        user.is_verified = True
        user.save()
        res = self.client.post(self.login_url, self.user_data, format="json")
        self.assertEqual(res.status_code, 200)
