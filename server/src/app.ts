import express, {json, urlencoded} from 'express';
import cors from 'cors';
import db from './db';
import {ToDo} from './entities/ToDo';
import {RequestContext} from '@mikro-orm/core';
import {expressLogger, expressErrorLogger, logger} from './logger';

// removing this from coverage since we can't test connectToDb branch.
/* istanbul ignore next */
export async function init(connectToDb = true) {
  const app = express();
  app.use(expressLogger);
  await db.init(connectToDb);
  logger.info('database initialization complete.');

  app.use(cors());
  app.use(json());
  app.use(urlencoded({extended: true}));

  app.get('/health', (req, res) => {
    return res.sendStatus(200);
  });

  app.use((req, res, next) => {
    RequestContext.create(db.em!, next);
  });

  app.get('/', (req, res) => {
    return res.send('Express + TypeScript Server');
  });

  app.get('/todos', async (req, res) => {
    const todoRepository = db.em!.getRepository(ToDo);
    const todos = await todoRepository.findAll();
    res.status(200).send(todos);
  });

  app.use(expressErrorLogger);
  return app;
}
