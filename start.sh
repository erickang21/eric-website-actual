#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "Error: No environment value provided." >&2
  echo "Usage: $0 [dev|qa|prod-blue]" >&2
  exit 1
fi

ENV=$1

get_node_env() {
  local env="$1"
  case "$env" in
  "dev")
    echo "development"
    ;;
  "prod")
    echo "production"
    ;;
  *)
    exit 1
    ;;
  esac
}

NODE_ENV_VALUE=$(get_node_env "$ENV")

case $NODE_ENV_VALUE in
"development")
  NODE_ENV="$NODE_ENV_VALUE" npm run start-dev
  ;;
*)
  NODE_ENV="$NODE_ENV_VALUE" npm run start
  ;;
esac