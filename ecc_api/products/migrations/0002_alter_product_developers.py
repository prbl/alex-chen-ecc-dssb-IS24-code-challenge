# Generated by Django 4.2.6 on 2023-10-10 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='developers',
            field=models.CharField(max_length=255),
        ),
    ]
