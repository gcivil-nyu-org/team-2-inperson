#!/bin/bash

if ./travis/scripts/build-condition.sh $TRAVIS_COMMIT_RANGE $TARGET
then
  echo "$TARGET is being built..."

  # script
  coverage run src/backend/server/manage.py test api

  # deploy

else 
  echo "no changes; $TARGET is NOT being built"
fi
