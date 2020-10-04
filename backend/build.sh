#!/bin/bash
set -x
BRIDGE_HOST=$1
BRIDGE_PORT=$2

BACKEND_PORT=$3

pushd backend

docker build . --tag luminfo/backend
# docker run --rm -e "BRIDGE_HOST=$BRIDGE_HOST" -e "BRIDGE_PORT=$BRIDGE_PORT" --net=host luminfo/backend &
docker run --rm -e "PORT=$BACKEND_PORT" -p $BACKEND_PORT:$BACKEND_PORT -p $BRIDGE_PORT:$BRIDGE_PORT luminfo/backend &
sleep 3

popd