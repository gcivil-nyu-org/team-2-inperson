#!/bin/bash

if ./travis/scripts/build-condition.sh $TRAVIS_COMMIT_RANGE $TARGET
then
  echo "$TARGET is being built..."

  # install AWS CLI
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
  unzip awscliv2.zip > /dev/null
  sudo ./aws/install

  ./deploy/frontend/deploy_frontend.sh ./src/frontend/shortlist/
else 
  echo "no changes; $TARGET is NOT being built"
fi
