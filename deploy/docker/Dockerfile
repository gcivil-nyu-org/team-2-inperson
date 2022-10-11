FROM debian:bullseye

# Set the name of the wsgi app (the django directory)
ENV SHORTLIST_APP_NAME=server

RUN apt-get update

# python3 first
RUN apt-get -y install python3 python3-pip

# python3 django dependencies
RUN pip3 install django psycopg gunicorn

# systemctl and nginx for sidecar
RUN apt-get -y install systemctl nginx

# dameon for aws-xray monitor
RUN pip3 install aws-xray-sdk
RUN apt-get -y install curl unzip
RUN mkdir /xray/
RUN curl https://s3.dualstack.us-east-1.amazonaws.com/aws-xray-assets.us-east-1/xray-daemon/aws-xray-daemon-linux-3.x.zip \
  -o /xray/aws-xray-daemon-linux-3.x.zip
RUN unzip -o /xray/aws-xray-daemon-linux-3.x.zip -d /xray/
RUN cp /xray/xray /usr/bin/xray-daemon

# copy app to root
COPY ./root/ /
# todo... clone the repository into /root/app/...

COPY .env /.env

ENTRYPOINT /bin/bash init.sh $SHORTLIST_APP_NAME