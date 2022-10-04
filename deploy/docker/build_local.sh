#/bin/bash
source .env
if [ $# -eq 0 ]
then
  SHORTLIST_REPO_TAG=latest
else
  SHORTLIST_REPO_TAG=$1
fi

docker build . -t ${SHORTLIST_ECR_REPO}:${SHORTLIST_REPO_TAG}
docker run --rm -p 9000:80 ${SHORTLIST_ECR_REPO}:${SHORTLIST_REPO_TAG} 
