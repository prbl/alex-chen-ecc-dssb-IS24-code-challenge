from django.core.management.base import BaseCommand
from products.models import Product
import json

class Command(BaseCommand):
    help = 'Load a list of products into the database'

    def handle(self, *args, **kwargs):
        products_json = '''
        {
          "products": [
            {
              "productName": "Product A",
              "productOwnerName": "Owner1",
              "developers": "Dev1,Dev2,Dev3",
              "scrumMasterName": "ScrumMaster1",
              "startDate": "2023-01-01",
              "methodology": "Agile",
              "location": "https://github.com/bcgov/product_a"
            },
            {
              "productName": "Product B",
              "productOwnerName": "Owner1",
              "developers": "Dev1,Dev4",
              "scrumMasterName": "ScrumMaster2",
              "startDate": "2023-02-01",
              "methodology": "Waterfall",
              "location": "https://github.com/bcgov/product_b"
            },
            {
              "productName": "Product C",
              "productOwnerName": "Owner3",
              "developers": "Dev2,Dev5,Dev6,Dev7",
              "scrumMasterName": "ScrumMaster2",
              "startDate": "2023-03-01",
              "methodology": "Agile",
              "location": "https://github.com/bcgov/product_c"
            },
            {
              "productName": "Product D",
              "productOwnerName": "Owner4",
              "developers": "Dev3,Dev8",
              "scrumMasterName": "ScrumMaster3",
              "startDate": "2023-04-01",
              "methodology": "Waterfall",
              "location": "https://github.com/bcgov/product_d"
            }
          ]
        }
        '''
        products_data = json.loads(products_json)

        for product_data in products_data['products']:
            Product.objects.create(
                productName=product_data['productName'],
                productOwnerName=product_data['productOwnerName'],
                developers=product_data['developers'],
                scrumMasterName=product_data['scrumMasterName'],
                startDate=product_data['startDate'],
                methodology=product_data['methodology'],
                location=product_data['location'],
            )
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
