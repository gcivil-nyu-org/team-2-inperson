#/bin/bash
set -a
source ~/.shortlist/.env
set +a

source clone_and_build.sh

if [ $# -eq 0 ]
then
  SHORTLIST_REPO_TAG=latest
else
  SHORTLIST_REPO_TAG=$1
fi

docker build . -t ${SHORTLIST_ECR_REPO}:${SHORTLIST_REPO_TAG}
rm -rf .env
rm -rf ./root/app/
docker run --rm -p 9000:80 -p 3000:3000 ${SHORTLIST_ECR_REPO}:${SHORTLIST_REPO_TAG} 
# docker run --rm -it -p 9001:3000 -p 9000:80 --entrypoint=/bin/bash shortlist-repo:latest