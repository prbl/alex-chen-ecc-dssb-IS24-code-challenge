from django.db import models

class Product(models.Model):
    productName = models.CharField(max_length=255)
    productOwnerName = models.CharField(max_length=255)
    developers = models.CharField(max_length=255)
    scrumMasterName = models.CharField(max_length=255)
    startDate = models.DateField()
    methodology = models.CharField(max_length=255)
    location = models.URLField(blank=True, null=True) # Allow blank and null values for Lisa

    def __str__(self):
        return self.productName
