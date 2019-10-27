FROM node:alpine

# install node modules
RUN apk update
RUN apk add git
RUN apk add bash
RUN apk add bash-completion
RUN rm -rf /usr/portage/distfiles/*

RUN npm install --quiet --global nodemon
RUN mkdir /node_modules
ADD package.json /
ADD package-lock.json /
WORKDIR /

RUN npm install --quiet
RUN npm install --quiet --save -g sequelize-cli

RUN mkdir /code
COPY . /code

WORKDIR /code

ADD wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

ADD start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/wait-for-it.sh", "db:5432", "--", "/start.sh"]
