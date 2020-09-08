#! /bin/bash

docker rm -f -v $(docker ps -a -q) 2>/dev/null
# whether or not succeeded, still want to exit gracefully
exit 0