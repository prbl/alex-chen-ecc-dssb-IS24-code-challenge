from django.core.management.base import BaseCommand
from products.models import Product

class Command(BaseCommand):
    help = 'Delete all product data'

    def handle(self, *args, **kwargs):
        # Delete all records
        Product.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('Successfully deleted all product data'))
