FROM python:3.9-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /code/

# Make sure your script is executable
RUN chmod +x /code/entrypoint.sh

# Use the script as the entrypoint
ENTRYPOINT ["/code/entrypoint.sh"]

# By default run gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:3000", "ecc_api.wsgi:application"]
