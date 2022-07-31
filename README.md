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

1. In addition, you'll need to update `.github/workflows/deploy-(dev|prod).yml` to change values from their defaults, specifically:

   - `AWS_REGION`
   - `ECR_REPOSITORY`
   - `DOMAIN_NAME`
   - `SUBDOMAIN`

1. To hook up to a domain, you need to have both a hosted zone associated with the passed-in `DOMAIN_NAME` as well as a managed certificate. These both need to be through Route 53 and the AWS Certificate Manager, respectively.

1. Finally, you need to set up the front-end portion of this app with AWS Amplify. In Amplify, you can select hosting a web app and connect to your repository in GitHub. Do NOT select that this is a monorepo. `amplify.yml` should be ingested and allow for an appropriate build process.

1. In the Amplify UI, click on "Build settings." Under "Build image settings," click "Edit" and then add a package version override for Node.js. Set the Version to 16 or higher; the default is 14 which doesn't support NPM Workspaces (monorepos).

1. In the Amplify UI again, update the "Environment Variables." Add `REACT_APP_API_BASE_URL` and set it to the location of the deployed server (`https://SUBDOMAIN.DOMAINNAME`).

1. Once setup is complete, Amplify will walk you through all the steps needed to hook your app up with your DOMAIN_NAME.

## Running the app

### Running locally

Start Postgres in a Docker container as described in `./server/README.md`, and then run `npm run start:local`.

### Running in AWS

Pushing to `main` will fire off a production deployment. Optionally, a push to any other branch can fire off a dev deployment.
