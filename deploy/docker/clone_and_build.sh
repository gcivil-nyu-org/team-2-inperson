#!/bin/bash

MYROOT=$(pwd)
echo $MYROOT
cp ~/.shortlist/.env .
mkdir -p ./root/app/frontend

git clone git@github.com:gcivil-nyu-org/team-2-inperson.git _repository
cd _repository
git checkout 82-dragging-elements

# pure copy of server
cp -R src/backend/server $MYROOT/root/app

# build frontend
cd src/frontend/shortlist
npm install
npm run build
cp -R dist/* $MYROOT/root/app/frontend

cd $MYROOT
rm -rf _repository