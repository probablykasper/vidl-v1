FROM ubuntu:18.04

RUN apt-get update && apt-get -y install sudo

RUN apt-get -y install curl
RUN sudo apt-get install -y ffmpeg

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# RUN sudo add-apt-repository ppa:mc3man/trusty-media

COPY src/package.json .
RUN npm install && echo "woah x.x"


RUN cd /node_modules/youtube-dl \
    && npm run update \
    && bin/youtube-dl --version \
    && echo "woah"

WORKDIR /usr/src/app

COPY src .

CMD npm run ${VIDL_ENV}
