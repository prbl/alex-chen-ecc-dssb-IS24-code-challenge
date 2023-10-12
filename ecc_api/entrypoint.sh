#!/bin/sh

set -e

# Perform database migrations
python manage.py makemigrations
python manage.py migrate

# Run your custom management command
python manage.py delete_all_products
python manage.py create_sample_data

# Collect static files
# python manage.py collectstatic

# Start gunicorn
exec "$@"
