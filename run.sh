#! /bin/bash

set -ex

USE_MOCK=$1

# Config
REAL_BRIDGE_HOST="192.168.1.10"
REAL_BRIDGE_PORT=80
MOCK_BRIDGE_HOST="0.0.0.0"
MOCK_BRIDGE_PORT=8000

# Stop any previously-ran instance
./shutdown.sh

echo $USE_MOCK

if [[ "$USE_MOCK" == "--mock" ]]; then
    BRIDGE_HOST=$MOCK_BRIDGE_HOST
    BRIDGE_PORT=$MOCK_BRIDGE_PORT

    # let's start up the mock now too
    ./bridge_mock/build.sh $BRIDGE_PORT
else
    BRIDGE_HOST=$REAL_BRIDGE_HOST
    BRIDGE_PORT=$REAL_BRIDGE_PORT
fi

./backend/build.sh $BRIDGE_HOST $BRIDGE_PORT
