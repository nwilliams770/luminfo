#!/bin/bash

BRIDGE_HOST=$1
BRIDGE_PORT=$2

pushd backend

docker build . --tag luminfo/backend
docker run --rm -e "BRIDGE_HOST=$BRIDGE_HOST" -e "BRIDGE_PORT=$BRIDGE_PORT" --net=host luminfo/backend &

popd