
ACCESS_KEY=$(aws configure get aws_access_key_id --profile=shortlist)
SECRET_KEY=$(aws configure get aws_secret_access_key --profile=shortlist)

cp ~/.shortlist/.env_merge .

aws ecr get-login-password --profile=shortlist | docker login --username AWS --password-stdin 147551946776.dkr.ecr.us-east-1.amazonaws.com/shortlist-backend

docker build . \
  --build-arg AWS_ACCESS_KEY_ID=$ACCESS_KEY \
  --build-arg AWS_SECRET_ACCESS_KEY=$SECRET_KEY \
  -t 147551946776.dkr.ecr.us-east-1.amazonaws.com/shortlist-backend:latest \

rm -rf .env*

docker push 147551946776.dkr.ecr.us-east-1.amazonaws.com/shortlist-backend:latest