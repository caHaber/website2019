#!/bin/bash

cd app/
npm run build
cd ..
git add * 
echo Enter commit message:
read msg
git commit -m "$msg"
git push -u origin master