#/bin/bash
set -a
source ~/.shortlist/.env
set +a

cp ~/.shortlist/.env .
git clone github:gcivil-nyu-org/team-2-inperson _repository
cd _repository
# until this gets pushed... JFC
git checkout issue-78
cd ..
cp -R _repository/src/backend/server ./root/server
rm -rf _repository

if [ $# -eq 0 ]
then
  SHORTLIST_REPO_TAG=latest
else
  SHORTLIST_REPO_TAG=$1
fi

# docker build . -t ${SHORTLIST_ECR_REPO}:${SHORTLIST_REPO_TAG}
# rm -rf .env
# rm -rf ./root/server/

# docker run --rm -p 9000:80 ${SHORTLIST_ECR_REPO}:${SHORTLIST_REPO_TAG} 
