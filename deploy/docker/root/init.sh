#!/bin/bash
set -a
source /.env
set +a

cat /.env

# TODO(waltage): verify that nginx is actually running after this
systemctl start nginx

# xray-dameon for aws xray
xray-daemon -f /var/log/xray-daemon.log &

# TODO(waltage): start the app
cd /app/$1

gunicorn $1.wsgi -b localhost:8080

# BLOCKING.... fails/exits if gunicorn goes down