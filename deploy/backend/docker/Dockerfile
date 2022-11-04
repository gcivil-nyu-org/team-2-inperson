FROM debian:bullseye

RUN apt-get update

RUN apt-get -y install systemctl nginx
RUN apt-get -y install curl unzip groff less
RUN apt-get -y install python3 python3-pip
RUN pip3 install gunicorn

RUN mkdir /awscli
RUN mkdir /app

WORKDIR /awscli
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install
WORKDIR /
COPY ./nginx.conf /etc/nginx/.
COPY ./init.sh /init.sh
COPY ./requirements.txt /requirements.txt
COPY .env /.env
RUN pip3 install -r requirements.txt


ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

ENTRYPOINT ["/bin/bash", "init.sh"]