#!/bin/bash
#echo "test"

filename="$(date "+%Y-%m-%d").mjs"
#echo $filename


mode=$1

if [ $mode = "make" ]; then
  echo "make"
fi

if [ $mode = "mv" ]; then
  echo "mv"

  mv $2 $filename
fi
