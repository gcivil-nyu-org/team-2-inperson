FROM debian:bullseye

RUN apt-get update

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY


RUN apt-get -y install systemctl nginx
RUN apt-get -y install curl unzip groff less

RUN mkdir /awscli
RUN mkdir /app

WORKDIR /awscli
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install
WORKDIR /
COPY ./nginx.conf /etc/nginx/.
COPY ./init.sh /init.sh

ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

ENTRYPOINT ["/bin/bash", "init.sh"]