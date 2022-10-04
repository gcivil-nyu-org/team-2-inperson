#!/bin/bash

# TODO(waltage): verify that nginx is actually running after this
systemctl start nginx

cd /app/$1

gunicorn $1.wsgi -b localhost:8080

# fails if gunicorn is down
