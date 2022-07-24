import winston from 'winston';
import expressWinston from 'express-winston';

const config = {
  transports: [new winston.transports.Console()],
  format: winston.format.json(),
  //msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
};

export const expressLogger = expressWinston.logger(config);

export const expressErrorLogger = expressWinston.errorLogger(config);

export const logger = winston.createLogger(config);
