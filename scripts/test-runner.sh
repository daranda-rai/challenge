#!/bin/bash

set -xu

# If no env is passed, assumes it's local, this is used for reporting purposes with allure
TEST_ENV=${1-local}

# If no browser is passed, assumes it's chrome, this is for docker runs
export TEST_BROWSER=${2-chrome}

function exiting {
  docker-compose --project-name "challenge-test" down --rmi local --volumes
  exit $EXIT
}

#Only docker runs come through this file, so we define this here specifically for running docker tests
export TEST_LEVEL="all"

echo "Starting tests for $TEST_ENV environment"
echo "Building Docker image"
docker-compose --project-name "challenge-test" build --no-cache tests
docker-compose --project-name "challenge-test" run tests

EXIT=$?

exiting
