#!/bin/bash
#echo "test"

filename="$(date "+%d-%m-%-Y").mjs"
echo $filename


mode=$1

if [ $mode = "make" ]; then
  echo "make"
  touch $filename
  ls ./
fi

if [ $mode = "mv" ]; then
  echo "mv"

  mv $2 $filename
fi
