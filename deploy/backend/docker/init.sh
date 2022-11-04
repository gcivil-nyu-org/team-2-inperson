#!/bin/bash
set -a
source /.env
set +a

service nginx start &

BRANCH=backend-api-routes/
aws s3 sync --exclude "*__pycache__*" s3://nyu-shortlist-backend-artifacts/$BRANCH /app/
cd /app/
python3 manage.py migrate --noinput
python3 manage.py collectstatic --noinput

gunicorn server.wsgi -b localhost:8080 &

SERVER_PID=$!

  while true
  do
    SYNC_OUTPUT="$(aws s3 sync --exclude \"*__pycache__*\" s3://nyu-shortlist-backend-artifacts/${BRANCH} /app/)"
    if [[ -n $SYNC_OUTPUT ]]
    then
      echo "GOT CHANGES:"
      echo "$SYNC_OUTPUT"
      echo "=========="
      python3 manage.py migrate --noinput
      python3 manage.py collectstatic --noinput
      kill -HUP $SERVER_PID
      # gunicorn server.wsgi -b localhost:8080 &

      # SERVER_PID=$!
    fi
    sleep 15
  done
done