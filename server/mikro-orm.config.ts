import dotenv from 'dotenv';
import {Options} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';
dotenv.config();

const options: Options<PostgreSqlDriver> = {
  entities: ['./server/build/src/entities'],
  entitiesTs: ['./src/entities'],
  dbName: process.env.DB_NAME || 'full-stack-example-app',
  migrations: {
    path: './server/build/src/migrations',
    pathTs: './src/migrations',
  },
  type: 'postgresql',
  host: process.env.DB_ENDPOINT,
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export default options;
