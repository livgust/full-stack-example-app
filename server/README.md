# Setup

## Running Locally

1. To run locally, first start a Docker container with Postgres:

   `docker run --rm -e POSTGRES_HOST_AUTH_METHOD=trust -p 5432:5432 -it postgres:14.1-alpine`

1. Then start the node server:

   `npm run start:local -w server`

## Running locally, with a Docker container

1. From the TOP-LEVEL DIRECTORY for this repository, build the Docker container for the server:

   `docker build -t full-stack-example-app:latest -f server/Dockerfile .`

1. If you haven't yet, create a docker network for the containers to talk to each other:

   `docker network create full-stack-example-app`

1. Start the Docker container for Postgres:

   `docker run --network full-stack-example-app --network-alias postgres --rm -e POSTGRES_HOST_AUTH_METHOD=trust -it postgres:14.1-alpine`

1. Run the Docker container for the server:

   `docker run --network full-stack-example-app --network-alias app -e PORT=3001 -e MIKRO_ORM_HOST=postgres --rm -p 3001:3001 full-stack-example-app:latest`