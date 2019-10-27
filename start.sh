#!/bin/bash

cd /code
ln -s -f -T /node_modules /code/node_modules

export NODE_PATH=./src

if [ "$NODE_ENV" = "development" ]
then
  npm run dev
else
  npm run start
fi
