#!/bin/bash


# FYI, if you want to use an aws profile, do: 
# export AWS_DEFAULT_PROFILE=shortlist; ./deploy_frontend.sh ../../src/frontend/shortlist/
if [[ -z "${AWS_ACCESS_KEY_ID}" ]]; then
  AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id)
fi

if [[ -z "${AWS_SECRET_ACCESS_KEY}" ]]; then
  AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key)
fi

if [[ -z "${AWS_DEFAULT_REGION}" ]]; then
  AWS_DEFAULT_REGION=us-east-1
fi

S3_BUCKET=nyu-shortlist-frontend-artifacts
BRANCH=$(git branch --show-current)
ARTIFACT_PATH="s3://${S3_BUCKET}/${BRANCH}"

ORIGINAL=$(pwd)
mkdir -p artifacts
cd $1

export VITE_PROD=true
export VITE_DEV=false
export VITE_BASE_URL="/"

npm install
npm run build

cp -R dist/* $ORIGINAL/artifacts/.
rm -rf dist/
cd $ORIGINAL


# Login AWS
aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set region $AWS_DEFAULT_REGION
echo "ARTIFACTS: ${ARTIFACT_PATH}"
aws s3 rm $ARTIFACT_PATH --recursive
aws s3 sync artifacts/ $ARTIFACT_PATH

rm -rf artifacts