from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from .views import HealthCheck

schema_view = get_schema_view(
   openapi.Info(
      title="ECC API",
      default_version='v1',
      description="API documentation for ECC Product Management",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('products.urls')),
 path('api/health', HealthCheck.as_view(), name='health-check'),
    
    # Swagger URLs
    path('api/api-docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
