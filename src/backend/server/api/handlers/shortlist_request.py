import json
from django.http import HttpRequest

HEADER_ACCOUNT = "X-Shortlist-Account"
HEADER_SESSION = "X-Shortlist-Session"
HEADER_TOKEN = "X-Shortlist-Token"

"""
This is a wrapper around the django HTTP request.

We will eventually need this to perform session authentication and
probably some kind of encryption.
"""


class ShortlistRequest:
    def __init__(self, request: HttpRequest):
        self._original = request
        self.headers = {k: v for k, v in request.headers.items()}
        self.cookies = {k: v for k, v in request.headers.items()}

        body_utf = request.body.decode("utf-8")
        self.body = json.loads(body_utf) if body_utf else None

    @property
    def token(self):
        return self.headers.get(HEADER_TOKEN, None)

    @property
    def account(self):
        return self.headers.get(HEADER_ACCOUNT, None)

    @property
    def session(self):
        return self.headers.get(HEADER_SESSION, None)

    @property
    def method(self):
        return self._original.method

    @property
    def is_logged_in(self):
        """Based on session headers, is the user logged in."""
        return True
