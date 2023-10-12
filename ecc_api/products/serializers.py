from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    productId = serializers.IntegerField(source='id', read_only=True)
    
    class Meta:
        model = Product
        fields = [
            'productId',
            'productName',
            'productOwnerName',
            'developers',
            'scrumMasterName',
            'startDate',
            'methodology',
            'location'
        ]
