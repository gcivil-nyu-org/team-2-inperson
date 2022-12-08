from rest_framework import generics, status
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
import os
from .serializers import (
    ShortlistSerializer,
    #     GetAShortlistSerializer,
    UpdateShortlistSerializer,
)
from rest_framework.response import Response
from .models import Shortlist
from authentication.models import User

from .renderers import ShortlistRenderer
from django.http import HttpResponsePermanentRedirect
from api.handlers.recommendation import school_formatter


class CustomRedirect(HttpResponsePermanentRedirect):

    allowed_schemes = [os.environ.get("APP_SCHEME"), "http", "https"]


class GetShortlistView(generics.GenericAPIView):
    serializer_class = ShortlistSerializer
    renderer_classes = (ShortlistRenderer,)

    def post(self, request):
        user_id = request.data["user_id"]
        if User.objects.filter(id=user_id).exists():
            shortlists = list(Shortlist.objects.filter(user_id=user_id).values())
            for shortlist in shortlists:
                out = []
                for school_id in shortlist.get("school_ids"):
                    out.append(school_formatter(school_id, None))
                shortlist["schools"] = out
            return JsonResponse(shortlists, safe=False)
        return Response(
            {"error": "User does not exists"},
            status=status.HTTP_400_BAD_REQUEST,
        )


class SingleShortlistView(generics.GenericAPIView):
    serializers_class = UpdateShortlistSerializer

    def get(self, request, shortlist_id):
        if Shortlist.objects.filter(shortlist_id=shortlist_id).exists():
            shortlists = list(
                Shortlist.objects.filter(shortlist_id=shortlist_id).values()
            )
            for shortlist in shortlists:
                out = []
                for school_id in shortlist.get("school_ids"):
                    out.append(school_formatter(school_id, None))
                shortlist["schools"] = out
            return JsonResponse(shortlists, safe=False)
        return Response(
            {"error": "Invalid Shortlist ID"},
            status=status.HTTP_404_NOT_FOUND,
        )

    def post(self, request, shortlist_id):
        data = JSONParser().parse(request)
        if Shortlist.objects.filter(shortlist_id=shortlist_id).exists():
            shortlist = Shortlist.objects.get(shortlist_id=shortlist_id)
            serializer = UpdateShortlistSerializer(shortlist, data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            else:
                return Response(
                    {"error": "Serializer not valid"},
                    status=status.HTTP_404_NOT_FOUND,
                )
        return Response(
            {"error": "Shortlist Not Found"},
            status=status.HTTP_404_NOT_FOUND,
        )
