#! /bin/bash

docker rm -f -v $(docker ps -a -q)