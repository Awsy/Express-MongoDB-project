// Core
import fs from 'fs';
import path from 'path';
import jsYaml from 'js-yaml';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

// Instruments
import {
    teachers, 
    subjects,
    pupils,
    parents,
    classes
} from './routers';

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`method: ${req.method} - path: ${req.path}`);
    next();
});

// Routes
app.use('/teachers', teachers);
app.use('/subjects', subjects);
app.use('/pupils', pupils);
app.use('/parents', parents);
app.use('/classes', classes);

// Resolve swagger file
const openApiDocument = jsYaml.safeLoad(
    fs.readFileSync(path.resolve('swagger/openapi.yaml'), 'utf-8'),
);

// Serve documentation
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(openApiDocument),
);

app.listen(port, () => {
    console.log(`server API is up on port ${port}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  });
