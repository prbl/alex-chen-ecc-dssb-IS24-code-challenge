# ecc_api/views.py

from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HealthCheck(APIView):
    """
    A simple API endpoint to check the health of the app
    """
    def get(self, request, format=None):
        """
        Return a JSON response with status 200 to indicate a healthy app
        """
        return Response({"status": "healthy"}, status=status.HTTP_200_OK)
