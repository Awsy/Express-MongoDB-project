//Core
import express from 'express';
import rateLimit from 'express-rate-limit';
import dg from 'debug';

//Instruments
import { authentication } from '../helpers';
import { Parents } from '../controllers';
import { Persons } from '../controllers';
import { validator } from '../helpers';

const debug = dg('router:parents');
const router = express.Router();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      20, // limit each IP to 2 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get('/', [ limiter, validator.validate('get', '/parents') ], async (req, res) => {
    try {
        const parents = new Parents();
        const parentsColl = await parents.readSubjects();
        debug(`subjects: ${JSON.stringify(parentsColl)}`);
        res.json(parentsColl);
    } catch (error) {
        debug(error.message);
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post(
    '/',
    [ limiter, authentication, validator.validate('post', '/parents') ],
    async (req, res) => {
        try {
            const parents = new Parents();
            const collection = await parents.createParent();
            res.json(collection);
        } catch (error) {
            debug(error.message);
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/',
    [ limiter, authentication, validator.validate('put', '/parents') ],
    async (req, res) => {
        try {
            const parents = new Parents();
            const collection = await parents.updateParent();
            res.json(collection);
        } catch (error) {
            debug(error.message);
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/',
    [ limiter, authentication, validator.validate('delete', '/parents') ],
    async (req, res) => {
        try {
            const parents = new Parents();
            const collection = await parents.removeParent();
            res.json(collection);
        } catch (error) {
            debug(error.message);
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//-----------> parentId singleton
router.get(
    '/:parentId',
    [ limiter, validator.validate('get', '/parents/{parentId}') ],
    async (req, res) => {
        const { parentId } = req.params;
        try {
            const parents = new Parents(parentId);
            const document = await parents.readParentById();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:parentId',
    [ limiter, authentication, validator.validate('post', '/parents/{parentId}') ],
    async (req, res) => {
        const { parentId } = req.params;
        try {
            const parents = new Parents(parentId);
            const document = await parents.createParent();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:parentId',
    [ limiter, authentication, validator.validate('put', '/parents/{parentId}') ],
    async (req, res) => {
        const { parentId } = req.params;
        try {
            const parents = new Parents(parentId);
            const document = await parents.updateParent();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:parentId',
    [ limiter, authentication, validator.validate('delete', '/parents/{parentId}') ],
    async (req, res) => {
        const { parentId } = req.params;
        try {
            const parents = new Parents(parentId);
            const document = await parents.removeParent();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//----------> pupils collection
router.get(
    '/:parentId/pupils',
    [ limiter, validator.validate('get', '/parents/{parentId}/pupils') ],
    async (req, res) => {
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
    },
);

router.post(
    '/:parentId/pupils',
    [ limiter, authentication, validator.validate('post', '/parents/{parentId}/pupils') ],
    async (req, res) => {
        try {
            const persons = new Persons();
            const collection = await persons.createPerson();
            res.json(collection);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:parentId/pupils',
    [ limiter, authentication, validator.validate('put', '/parents/{parentId}/pupils') ],
    async (req, res) => {
        try {
            const persons = new Persons();
            const collection = await persons.updatePerson();
            res.json(collection);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:parentId/pupils',
    [ limiter, authentication, validator.validate('delete', '/parents/{parentId}/pupils') ],
    async (req, res) => {
        try {
            const persons = new Persons();
            const collection = await persons.removePerson();
            res.json(collection);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//----------> pupilsId singleton
router.get(
    '/:parentId/pupils/:personId',
    [ limiter, validator.validate('get', '/parents/{parentId}/pupils/{personId}') ],
    async (req, res) => {
        const { personId } = req.params;
        try {
            const persons = new Persons(personId);
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
    '/:parentId/pupils/:personId',
    [ limiter, authentication, validator.validate('post', '/parents/{parentId}/pupils/{personId}') ],
    async (req, res) => {
        const { personId } = req.params;
        try {
            const persons = new Persons(personId);
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
    '/:parentId/pupils/:personId',
    [ limiter, authentication, validator.validate('put', '/parents/{parentId}/pupils/{personId}') ],
    async (req, res) => {
        const { personId } = req.params;
        try {
            const persons = new Persons(personId);
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
    '/:parentId/pupils/:personId',
    [
        limiter,
        authentication,
        validator.validate('delete', '/parents/{parentId}/pupils/{personId}'),
    ],
    async (req, res) => {
        const { personId } = req.params;
        try {
            const persons = new Persons(personId);
            const document = await persons.removePerson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

export { router as parents };
