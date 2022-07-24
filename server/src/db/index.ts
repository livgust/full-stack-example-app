import {MikroORM} from '@mikro-orm/core';
import {PostgreSqlDriver, EntityManager} from '@mikro-orm/postgresql';
import config from '../../mikro-orm.config';

const db = {} as {
  init: (connectToDb: boolean) => Promise<void>;
  orm: MikroORM<PostgreSqlDriver>;
  em: EntityManager;
};
db.init = async (connectToDb = true) => {
  db.orm = await MikroORM.init<PostgreSqlDriver>({
    ...config,
    connect: connectToDb,
  });
  db.em = db.orm.em;

  if (connectToDb) {
    const migrator = db.orm.getMigrator();
    await migrator.up();
  }
};

export default db;
