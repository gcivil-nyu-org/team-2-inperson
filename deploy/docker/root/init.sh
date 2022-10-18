#!/bin/bash
set -a
source /.env
set +a

cat /.env

json-server /data.json --port 3000 &

# TODO(waltage): verify that nginx is actually running after this
systemctl start nginx

# xray-dameon for aws xray
xray-daemon -f /var/log/xray-daemon.log &

cd /app/server
python3 manage.py migrate
python3 manage.py collectstatic

gunicorn $1.wsgi -b localhost:8080

# BLOCKING.... fails/exits if gunicorn goes down