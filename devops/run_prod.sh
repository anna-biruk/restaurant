#!/bin/bash
npm i && cd ./server && npm i
cd ../
npm run build
cd ./server
node ./index.js
