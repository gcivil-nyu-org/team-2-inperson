FROM debian:bullseye

# Set the name of the wsgi app (the django directory)
ENV SHORTLIST_APP_NAME=hello

RUN apt-get update

# python3 first
RUN apt-get -y install python3 python3-pip

# python3 django dependencies
RUN pip3 install django psycopg gunicorn

# systemctl and nginx for sidecar
RUN apt-get -y install systemctl nginx

# copy app to root
COPY ./root/ /
ENTRYPOINT /bin/bash init.sh $SHORTLIST_APP_NAME