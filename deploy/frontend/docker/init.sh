#!/bin/bash

service nginx start &

echo " "
echo "STARTING WATCHER:"
while true
do
  echo "... itr"
  aws s3 sync s3://nyu-shortlist-frontend-artifacts/ /app/
  sleep 15
done