// Core
import moment from 'moment';
import helmet from 'helmet';
import express from 'express';
import winston from 'winston';
import swaggerUi from 'swagger-ui-express';
import dg from 'debug';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import v4 from 'uuid/v4';


// Instruments
import './db';
import { teachers, subjects, pupils, parents, classes, staff } from './routers';
import { openApiDocument } from './helpers';

const port = process.env.PORT || 3000;
export const app = express();

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

const sessionOptions = {
    key:               'info',
    secret:            v4(),
    resave:            false,
    rolling:           true,
    saveUninitialized: false,
    cookie:            {
        httpOnly: true,
        maxAge:   15 * 60 * 1000,
    },
};

// Middleware
app.use(session(sessionOptions));
app.use(cookieParser());
app.use(express.json());
app.use(helmet()); // using Helmet middleware for app security
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

// Routes
app.use('/teachers', teachers);
app.use('/subjects', subjects);
app.use('/pupils', pupils);
app.use('/parents', parents);
app.use('/classes', classes);
app.use('/staff', staff);

// Serve documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

// eslint-disable-next-line
app.use((error, req, res, next) => {
    res.status(400).send(`Something wrong. Error: ${error.name}. Reason: ${error.message}`);
});

app.listen(port, () => {
    debugSrv(`server API is up on port ${port}`);
    if (process.env.NODE_ENV) {
        logger.info(`Server started in: ${process.env.NODE_ENV} mode.`);
    }
});
