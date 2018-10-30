import express from 'express';
import rateLimit from 'express-rate-limit';
import dg from 'debug';

import { authentication } from '../helpers';
import { Persons } from '../controllers';
import { validator } from '../helpers';

const debug = dg('router:persons');
const router = express.Router();
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      20, // limit each IP to 2 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get('/', [ limiter, validator.validate('get', '/pupils') ], async (req, res) => {
    try {
        const persons = new Persons();
        const personsColl = await persons.readSubjects();
        debug(`subjects: ${JSON.stringify(personsColl)}`);
        res.json(personsColl);
    } catch (error) {
        debug(error.message);
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post(
    '/',
    [ limiter, authentication, validator.validate('post', '/pupils') ],
    async (req, res) => {
        try {
            const persons = new Persons(req.body);
            const document = await persons.createPerson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/',
    [ limiter, authentication, validator.validate('put', '/pupils') ],
    async (req, res) => {
        try {
            const persons = new Persons(req.body);
            const document = await persons.updatePerson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/',
    [ limiter, authentication, validator.validate('delete', '/pupils') ],
    async (req, res) => {
        try {
            const persons = new Persons(req.body);
            const document = await persons.removePerson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//-----------> personId singleton
router.get(
    '/:personId',
    [ limiter, validator.validate('get', '/pupils/{personId}') ],
    async (req, res) => {
        const { PersonId } = req.params;
        try {
            const persons = new Persons(PersonId);
            const document = await persons.readPersonById();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:personId',
    [ limiter, authentication, validator.validate('post', '/pupils/{personId}') ],
    async (req, res) => {
        const { PersonId } = req.params;
        try {
            const persons = new Persons(PersonId);
            const document = await persons.createPerson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:personId',
    [ limiter, authentication, validator.validate('put', '/pupils/{personId}') ],
    async (req, res) => {
        const { PersonId } = req.params;
        try {
            const persons = new Persons(PersonId);
            const document = await persons.updatePerson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:personId',
    [ limiter, authentication, validator.validate('delete', '/pupils/{personId}') ],
    async (req, res) => {
        const { PersonId } = req.params;
        try {
            const persons = new Persons(PersonId);
            const document = await persons.removePerson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

export { router as pupils };
