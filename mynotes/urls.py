from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework import routers
from api import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
