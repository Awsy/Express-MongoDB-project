//Core
import express from 'express';
import rateLimit from 'express-rate-limit';
import dg from 'debug';

//Instruments
import { authentication } from '../helpers';
import { Subjects } from '../controllers';
import { Seasons } from '../controllers';
import { Lessons } from '../controllers';
import { validator } from '../helpers';

const debug = dg('router:subjects');
const router = express.Router();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      20, // limit each IP to 2 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get('/', [ limiter, validator.validate('get', '/subjects') ], async (req, res) => {
    try {
        const subjects = new Subjects();
        const subjectsColl = await subjects.readSubjects();
        debug(`subjects: ${JSON.stringify(subjectsColl)}`);
        res.json(subjectsColl);
    } catch (error) {
        debug(error.message);
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post(
    '/',
    [ limiter, authentication, validator.validate('post', '/subjects') ],
    async (req, res) => {
        try {
            const subjects = new Subjects(req.body);
            const document = await subjects.createSubject();

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
    [ limiter, authentication, validator.validate('put', '/subjects') ],
    async (req, res) => {
        try {
            const subjects = new Subjects(req.body);
            const document = await subjects.updateSubject();

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
    [ limiter, authentication, validator.validate('delete', '/subjects') ],
    async (req, res) => {
        try {
            const subjects = new Subjects(req.body);
            const document = await subjects.removeSubject();

            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//-------------> subjectID singleton
router.get(
    '/:subjectId',
    [ limiter, validator.validate('get', '/subjects/{subjectId}') ],
    async (req, res) => {
        const { subjectId } = req.params;
        try {
            const subjects = new Subjects(subjectId);
            const document = await subjects.readSubjectById();

            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:subjectId',
    [ limiter, authentication, validator.validate('post', '/subjects/{subjectId}') ],
    async (req, res) => {
        const { subjectId } = req.params;
        try {
            const subjects = new Subjects(subjectId);
            const document = await subjects.createSubject();

            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:subjectId',
    [ limiter, authentication, validator.validate('put', '/subjects/{subjectId}') ],
    async (req, res) => {
        const { subjectId } = req.params;
        try {
            const subjects = new Subjects(subjectId);
            const document = await subjects.updateSubject();

            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:subjectId',
    [ limiter, authentication, validator.validate('delete', '/subjects/{subjectId}') ],
    async (req, res) => {
        const { subjectId } = req.params;
        try {
            const subjects = new Subjects(subjectId);
            const document = await subjects.removeSubject();

            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//---------> seasons collection
router.get(
    '/:subjectId/seasons',
    [ limiter, validator.validate('get', '/subjects/{subjectId}/seasons') ], //i need to add the route name in the beginning of the route validation route
    async (req, res) => {
        try {
            const seasons = new Seasons();
            const seasonsColl = await seasons.readSubjects();
            debug(`subjects: ${JSON.stringify(seasonsColl)}`);
            res.json(seasonsColl);
        } catch (error) {
            debug(error.message);
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:subjectId/seasons',
    [ limiter, authentication, validator.validate('post', '/subjects/{subjectId}/seasons') ],
    async (req, res) => {
        try {
            const seasons = new Seasons(req.body);
            const document = await seasons.createSeason();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:subjectId/seasons',
    [ limiter, authentication, validator.validate('put', '/subjects/{subjectId}/seasons') ],
    async (req, res) => {
        try {
            const seasons = new Seasons(req.body);
            const document = await seasons.updateSeason();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:subjectId/seasons',
    [ limiter, authentication, validator.validate('delete', '/subjects/{subjectId}/seasons') ],
    async (req, res) => {
        try {
            const seasons = new Seasons(req.body);
            const document = await seasons.removeSeason();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//------------> seasonsId singleton

router.get(
    '/:subjectId/seasons/:seasonId',
    [ limiter, validator.validate('get', '/subjects/{subjectId}/seasons/{seasonId}') ],
    async (req, res) => {
        const { seasonId } = req.params;
        try {
            const seasons = new Seasons(seasonId);
            const document = await seasons.readSeasonById();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:subjectId/seasons/:seasonId',
    [
        limiter,
        authentication,
        validator.validate('post', '/subjects/{subjectId}/seasons/{seasonId}'),
    ],
    async (req, res) => {
        const { seasonId } = req.params;
        try {
            const seasons = new Seasons(seasonId);
            const document = await seasons.createSeason();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:subjectId/seasons/:seasonId',
    [
        limiter,
        authentication,
        validator.validate('put', '/subjects/{subjectId}/seasons/{seasonId}'),
    ],
    async (req, res) => {
        const { seasonId } = req.params;
        try {
            const seasons = new Seasons(seasonId);
            const document = await seasons.updateSeason();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:subjectId/seasons/:seasonId',
    [
        limiter,
        authentication,
        validator.validate('delete', '/subjects/{subjectId}/seasons/{seasonId}'),
    ],
    async (req, res) => {
        const { seasonId } = req.params;
        try {
            const seasons = new Seasons(seasonId);
            const document = await seasons.removeSeason();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//-----------> lessons collection

router.get(
    '/:subjectId/seasons/:seasonId/lessons',
    [ limiter, validator.validate('get', '/subjects/{subjectId}/seasons/{seasonId}/lessons') ],
    async (req, res) => {
        try {
            const lessons = new Lessons();
            const lessonsColl = await lessons.readSubjects();
            debug(`subjects: ${JSON.stringify(lessonsColl)}`);
            res.json(lessonsColl);
        } catch (error) {
            debug(error.message);
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:subjectId/seasons/:seasonId/lessons',
    [
        limiter,
        authentication,
        validator.validate('post', '/subjects/{subjectId}/seasons/{seasonId}/lessons'),
    ],
    async (req, res) => {
        try {
            const lessons = new Lessons();
            const collection = await lessons.createLesson();
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
    '/:subjectId/seasons/:seasonId/lessons',
    [
        limiter,
        authentication,
        validator.validate('put', '/subjects/{subjectId}/seasons/{seasonId}/lessons'),
    ],
    async (req, res) => {
        try {
            const lessons = new Lessons();
            const collection = await lessons.updateLesson();
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
    '/:subjectId/seasons/:seasonId/lessons',
    [
        limiter,
        authentication,
        validator.validate('delete', '/subjects/{subjectId}/seasons/{seasonId}/lessons'),
    ],
    async (req, res) => {
        try {
            const lessons = new Lessons();
            const collection = await lessons.removeLesson();
            res.json(collection);
        } catch (error) {
            debug(error.message);
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//-----------> lessonsId singleton

router.get(
    ':subjectId/seasons/:seasonId/lessons/:lessonId',
    [
        limiter,
        validator.validate('get', '/subjects/{subjectId}/seasons/{seasonId}/lessons/{lessonId}'),
    ],
    async (req, res) => {
        const { lessonId } = req.params;
        try {
            const lessons = new Lessons(lessonId);
            const document = await lessons.readLessonById();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    ':subjectId/seasons/:seasonId/lessons/:lessonId',
    [
        limiter,
        authentication,
        validator.validate('post', '/subjects/{subjectId}/seasons/{seasonId}/lessons/{lessonId}'),
    ],
    async (req, res) => {
        const { lessonId } = req.params;
        try {
            const lessons = new Lessons(lessonId);
            const document = await lessons.createLesson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    ':subjectId/seasons/:seasonId/lessons/:lessonId',
    [
        limiter,
        authentication,
        validator.validate('put', '/subjects/{subjectId}/seasons/{seasonId}/lessons/{lessonId}'),
    ],
    async (req, res) => {
        const { lessonId } = req.params;
        try {
            const lessons = new Lessons(lessonId);
            const document = await lessons.updateLesson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    ':subjectId/seasons/:seasonId/lessons/:lessonId',
    [
        limiter,
        authentication,
        validator.validate('delete', '/subjects/{subjectId}/seasons/{seasonId}/lessons/{lessonId}'),
    ],
    async (req, res) => {
        const { lessonId } = req.params;
        try {
            const lessons = new Lessons(lessonId);
            const document = await lessons.deleteLesson();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

export { router as subjects };
