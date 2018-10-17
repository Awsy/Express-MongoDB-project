// Node imports
import fs from 'fs';
import path from 'path';

// Instruments
import eApi from 'express-openapi-validate';
import jsYaml from 'js-yaml';

const openApiDocument = jsYaml.safeLoad(
    fs.readFileSync(path.resolve('swagger/openapi.yaml'), 'utf-8'), // eslint-disable-line no-sync
);

const validator = new eApi.OpenApiValidator(openApiDocument);

export { openApiDocument, validator };
