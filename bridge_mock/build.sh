#!/bin/bash

PORT=$1

pushd bridge_mock

docker build . --tag luminfo/bridge_mock
docker run --rm -e "PORT=$PORT" --net=host luminfo/bridge_mock &
sleep 3

popd