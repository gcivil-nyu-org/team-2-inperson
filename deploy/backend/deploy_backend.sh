#!/bin/bash


# FYI, if you want to use an aws profile, do: 
# export AWS_DEFAULT_PROFILE=shortlist; ./deploy_backend.sh ../../src/backend/server/
if [[ -z "${AWS_ACCESS_KEY_ID}" ]]; then
  AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id)
fi

if [[ -z "${AWS_SECRET_ACCESS_KEY}" ]]; then
  AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key)
fi

if [[ -z "${AWS_DEFAULT_REGION}" ]]; then
  AWS_DEFAULT_REGION=us-east-1
fi

S3_BUCKET=nyu-shortlist-backend-artifacts
BRANCH=$(git branch --show-current)
ARTIFACT_PATH="s3://${S3_BUCKET}/${BRANCH}"


# Login AWS
aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set region $AWS_DEFAULT_REGION
echo "ARTIFACTS: ${ARTIFACT_PATH}"
aws s3 rm $ARTIFACT_PATH --recursive
aws s3 sync --exclude "*__pycache__*" $1/ $ARTIFACT_PATH

rm -rf artifacts