// Core
import helmet from 'helmet';
import express from 'express';
import winston from 'winston';
import swaggerUi from 'swagger-ui-express';
import './db';

// Instruments
import { teachers, subjects, pupils, parents, classes } from './routers';
import { openApiDocument } from './helpers';

const port = process.env.PORT || 3000;
export const app = express();

const logger = winston.createLogger({
    level:      'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

// Middleware
app.use(express.json());
app.use(helmet()); // using Helmet middleware for app security
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        logger.info(`${new Date()} method: ${req.method} - path: ${req.path}`);
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

// Serve documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

// eslint-disable-next-line
app.use((error, req, res, next) => {
    res.status(500).send(`something wrong ${error.name}`);
});

app.listen(port, () => {
    console.log(`server API is up on port ${port}`); // eslint-disable-line
});
