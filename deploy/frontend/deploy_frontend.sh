#!/bin/bash
S3_BUCKET=nyu-shortlist-frontend-artifacts
S3_WEB="http://${S3_BUCKET}.s3-website-us-east-1.amazonaws.com"
ARTIFACT_PATH="s3://${S3_BUCKET}"
BRANCH=$(git branch --show-current)

ORIGINAL=$(pwd)
mkdir -p artifacts
cd $1
if [ $BRANCH == "develop" ]
then
  export VITE_PROD=true
  export VITE_DEV=false
  export VITE_BASE_URL="/"
else
  export VITE_PROD=false
  export VITE_DEV=true
  export VITE_BASE_URL="/"
fi

npm run build

cp -R dist/* $ORIGINAL/artifacts/.
rm -rf dist/
cd $ORIGINAL

# Login AWS
aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set region $AWS_DEFAULT_REGION

aws s3 sync artifacts/ $ARTIFACT_PATH/$TRAVIS_BRANCH

echo "Pushing artifacts to s3:"
echo $ARTIFACT_PATH/$TRAVIS_BRANCH

rm -rf artifacts