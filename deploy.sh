#!/bin/bash

cd app/
npm run build
cd ..
git add * 
read msg
git commit -m "$msg"
git push -u origin master