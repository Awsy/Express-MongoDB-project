// Node imports
import fs from 'fs';
import path from 'path';

// Instruments
import eApi from 'express-openapi-validate';
import jsYaml from 'js-yaml';

const openApiDocument = jsYaml.safeLoad( //this is our documentation inthe shape of js object
    fs.readFileSync(path.resolve('swagger/openapi.yaml'), 'utf-8'), // eslint-disable-line no-sync
);

const validator = new eApi.OpenApiValidator(openApiDocument); // creating a validator based on our documentation object

export { openApiDocument, validator };