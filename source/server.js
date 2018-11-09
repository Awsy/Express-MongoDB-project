// Core
import helmet from 'helmet';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import v4 from 'uuid/v4';
import dotenv from 'dotenv';

// Instruments
import { teachers, subjects, pupils, parents, classes, staff } from './routers';
import { openApiDocument } from './helpers';

export const app = express();
dotenv.config(); // load configs from .env file

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
