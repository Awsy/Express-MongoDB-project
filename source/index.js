// Core
import dg from 'debug';
import winston from 'winston';
import moment from 'moment';
import { app } from './server';
import './db';

const port = process.env.PORT || 3000;
const debugSrv = dg('awsy:main:server');

// Winston config
const logger = winston.createLogger({
    level:      'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

if (process.env.NODE_ENV === 'development') {
    logger.add(new winston.transports.File({ filename: 'awsy.log' }));
}

app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        logger.info(
            `${moment().format('YYYY-MM-DD HH:mm:ss:SSS')} method: ${req.method} - path: ${
                req.path
            }`,
        );
        logger.info(JSON.stringify(req.body, null, 2));
    }
    next();
});

app.listen(port, () => {
    debugSrv(`server API is up on port ${port}`);
    if (process.env.NODE_ENV) {
        logger.info(`Server started in: ${process.env.NODE_ENV} mode.`);
    }
});
