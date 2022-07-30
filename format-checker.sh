#!/bin/bash

INPUT_FILE=$1
START_LINE=`head -n1 $INPUT_FILE`
PATTERN="^(?<type>build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test|¯\\_\(ツ\)_\/¯)(?<scope>\(\w+\)?((?=:\s)|(?=!:\s)))?(?<breaking>!)?(?<subject>:\s.*)?|^(?<merge>Merge \w+)"
if ! [[ "$START_LINE" =~ $PATTERN ]]; then
  echo "Unsupported format, see example: Conventional commit messages"
  exit 1
fi