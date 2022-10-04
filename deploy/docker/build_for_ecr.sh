#!/bin/bash
source .env
if [ $# -eq 0 ]
then
  SHORTLIST_REPO_TAG=latest
else
  SHORTLIST_REPO_TAG=$1
fi
docker buildx build \
  --tag ${SHORTLIST_ECR_REGISTRY}/${SHORTLIST_ECR_REPO}:${SHORTLIST_REPO_TAG} \
  --platform linux/amd64,linux/arm64 \
  -- push .

aws ecr describe-images --repository-name=${SHORTLIST_ECR_REPO}