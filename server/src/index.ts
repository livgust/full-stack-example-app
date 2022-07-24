import dotenv from 'dotenv';
import {logger} from './logger';
import * as app from './app';
dotenv.config();

async function main() {
  const port = process.env.PORT || 3000;

  const server = await app.init();

  server.listen(port, () => {
    logger.info(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
}

main();
