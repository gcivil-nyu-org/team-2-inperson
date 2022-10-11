from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('schools', views.get_schools, name='schools'),

]
