import {Options} from '@mikro-orm/core';
import {PostgreSqlDriver} from '@mikro-orm/postgresql';

const options: Options<PostgreSqlDriver> = {
  entities: ['./server/build/src/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'family-plan-it',
  migrations: {
    path: './server/build/src/migrations',
    pathTs: './src/migrations',
  },
  type: 'postgresql',
};

export default options;
