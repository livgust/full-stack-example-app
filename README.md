# Full-stack example app

## About

This app can be deployed to AWS via Github Actions. Fork or clone it and modify the source code to make it your own!

### Technologies used

* React
* Typescript
* node
    * winston (logging)
* Terraform
* AWS
    * ECS
    * Cloudwatch
    * RDS
* MikroORM with Postgres

## Setup

### Running locally

Start Postgres in a Docker container as described in `./server/README.md`, and then run `npm run start:local`.

### Running in AWS

Pushing to `main` will cause a deployment to AWS. You need to have the following ENV variables set in the Github repository:

* TBD