#! /bin/bash

set -ex

BRIDGE_HOST="0.0.0.0"
BRIDGE_PORT=8000

./shutdown.sh

./bridge_mock/build.sh $BRIDGE_PORT

./backend/build.sh $BRIDGE_HOST $BRIDGE_PORT
