// Core
import express from 'express';
import rateLimit from 'express-rate-limit';
import dg from 'debug';

// Instruments
import { authentication, authenticationCookie, validator } from '../helpers';
import { Teachers } from '../controllers';

const debug = dg('awsy:router:teachers');
const router = express.Router();
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      20, // limit each IP to 20 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get('/', [ limiter, authenticationCookie, validator.validate('get', '/teachers') ], async (req, res) => {
    try {
        const teachers = new Teachers();
        const teachersColl = await teachers.readTeachers();
        debug(`teachers: ${JSON.stringify(teachersColl)}`);

        //req.session.info = '123456'; //JSON.stringify(teachersColl);
        res.json(teachersColl);
    } catch (error) {
        debug(error.message);
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post(
    '/',
    [ limiter, authentication, validator.validate('post', '/teachers') ],
    async (req, res) => {
        try {
            const teachers = new Teachers(req.body);
            const document = await teachers.createTeacher();
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
    [ limiter, authentication, validator.validate('put', '/teachers') ],
    async (req, res) => {
        try {
            const teachers = new Teachers(req.body);
            const collection = await teachers.updateTeacher();
            res.json(collection);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/',
    [ limiter, authentication, validator.validate('delete', '/teachers') ],
    async (req, res) => {
        try {
            const teachers = new Teachers(req.body);
            const collection = await teachers.removeTeacher();
            res.json(collection);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

//--------> id routing
router.get(
    '/:teacherId',
    [ limiter, validator.validate('get', '/teachers/{teacherId}') ],
    async (req, res) => {
        const { teacherId } = req.params;
        try {
            const teachers = new Teachers(teacherId);
            const document = await teachers.readTeacherById();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.post(
    '/:teacherId',
    [ limiter, authentication, validator.validate('post', '/teachers/{teacherId}') ],
    async (req, res) => {
        const { teacherId } = req.params;
        try {
            const teachers = new Teachers(teacherId);
            const document = await teachers.createTeacher();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put(
    '/:teacherId',
    [ limiter, authentication, validator.validate('put', '/teachers/{teacherId}') ],
    async (req, res) => {
        const { teacherId } = req.params;
        try {
            const teachers = new Teachers(teacherId);
            const document = await teachers.updateTeacher();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.delete(
    '/:teacherId',
    [ limiter, authentication, validator.validate('delete', '/teachers/{teacherId}') ],
    async (req, res) => {
        const { teacherId } = req.params;
        try {
            const teachers = new Teachers(teacherId);
            const document = await teachers.removeTeacher();
            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

export { router as teachers };
