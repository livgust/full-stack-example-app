# Full-stack example app

## About

This app can be deployed to AWS via Github Actions. Fork or clone it and modify the source code to make it your own!

### Technologies used

- React
- Typescript
- node
  - winston (logging)
- Terraform
- AWS
  - ECS
  - Cloudwatch
  - RDS
- MikroORM with Postgres

## Setup

1. Create an S3 bucket in your account with the name matching what is in `01-main.tf`.

1. You need to have the following secrets set up in the Github repository:

   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

1. In addition, you'll need to have created ECR repositories to store the built Docker images for deployment. Create one for prod and one for dev (optional), and then update `.github/workflows/deploy-(dev|prod).yml` with the names of the repositories.

1. Finally, to hook up to a domain, you need to have both a hosted zone associated with the passed-in `domain_name` as well as a managed certificate. These both need to be through Route 53 and the AWS Certificate Manager, respectively.

## Running the app

### Running locally

Start Postgres in a Docker container as described in `./server/README.md`, and then run `npm run start:local`.

### Running in AWS

Pushing to `main` will fire off a production deployment. Optionally, a push to any other branch can fire off a dev deployment.
