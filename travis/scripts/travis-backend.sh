#!/bin/bash

if ./travis/scripts/build-condition.sh $TRAVIS_COMMIT_RANGE $TARGET
then
  echo "$TARGET is being built..."

  # install
  pip install importlib-metadata --upgrade
  pip install -r requirements.txt

  # script
  black ./src/backend
  flake8 ./src/backend
  # coverage run src/backend/server/manage.py test api

  # coveralls

  # deploy

else 
  echo "no changes; $TARGET is NOT being built"
fi
