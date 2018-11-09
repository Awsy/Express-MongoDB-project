//Core
import express from 'express';
import rateLimit from 'express-rate-limit';
import dg from 'debug';

//Instruments
import { authentication, authenticationCookie, validator } from '../helpers';
import { Classes } from '../controllers';
import { Gradebook } from '../controllers';

const debug = dg('router:teachers');
const router = express.Router();
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      20, // limit each IP to 2 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get(
    '/',
    [ limiter, authenticationCookie, validator.validate('get', '/classes') ],
    async (req, res) => {
        try {
            const classes = new Classes();
            const classesColl = await classes.readClasses();
            debug(`subjects: ${JSON.stringify(classesColl)}`);
            res.status(200).json(classesColl);
        } catch ({ message }) {
            debug(message);
            res.status(400).json({
                message,
            });
        }
    },
);

router.post(
    '/',
    [ limiter, authentication, validator.validate('post', '/classes') ],
    async (req, res) => {
        try {
            const classes = new Classes(req.body);
            const document = await classes.createClass();
            res.status(201).json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/',
    [ limiter, authentication, validator.validate('put', '/classes') ],
    async (req, res) => {
        try {
            const classes = new Classes(req.body);
            await classes.updateClass();
            res.sendStatus(204);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/',
    [ limiter, authentication, validator.validate('delete', '/classes') ],
    async (req, res) => {
        try {
            const classes = new Classes(req.body);
            const collection = await classes.removeClass();
            res.json(collection);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//-----------> classId singleton

router.get(
    '/:classId',
    [ limiter, validator.validate('get', '/classes/{classId}') ],
    async (req, res) => {
        const { classId } = req.params;
        try {
            const classes = new Classes(classId);
            const document = await classes.readClassById();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:classId',
    [ limiter, authentication, validator.validate('post', '/classes/{classId}') ],
    async (req, res) => {
        const { classId } = req.params;
        try {
            const classes = new Classes(classId);
            const document = await classes.createClass();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:classId',
    [ limiter, authentication, validator.validate('put', '/classes/{classId}') ],
    async (req, res) => {
        const { classId } = req.params;
        try {
            const classes = new Classes(classId);
            const document = await classes.updateClass();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:classId',
    [ limiter, authentication, validator.validate('delete', '/classes/{classId}') ],
    async (req, res) => {
        const { classId } = req.params;
        try {
            const classes = new Classes(classId);
            const document = await classes.removeClass();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//-----------> gradebook collection

router.get(
    '/:classId/gradebook',
    [ limiter, authenticationCookie, validator.validate('get', '/classes/{classId}/gradebook') ],
    async (req, res) => {
        try {
            const gradebook = new Gradebook();
            const gradebookColl = await gradebook.readTeachers();
            debug(`teachers: ${JSON.stringify(gradebookColl)}`);
            res.json(gradebookColl);
        } catch (error) {
            debug(error.message);
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:classId/gradebook',
    [ limiter, authentication, validator.validate('post', '/classes/{classId}/gradebook') ],
    async (req, res) => {
        try {
            const gradebook = new Gradebook(req.body);
            const document = await gradebook.createGradebook();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:classId/gradebook',
    [ limiter, authentication, validator.validate('put', '/classes/{classId}/gradebook') ],
    async (req, res) => {
        try {
            const gradebook = new Gradebook(req.body);
            const collection = await gradebook.updateGradebook();
            res.json(collection);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:classId/gradebook',
    [ limiter, authentication, validator.validate('delete', '/classes/{classId}/gradebook') ],
    async (req, res) => {
        try {
            const gradebook = new Gradebook(req.body);
            const collection = await gradebook.removeGradebook();
            res.json(collection);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

export { router as classes };
