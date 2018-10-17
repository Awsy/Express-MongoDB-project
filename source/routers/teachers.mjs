// Core
import express from 'express';
import rateLimit from 'express-rate-limit';
import dg from 'debug';
import uuid from 'uuid/v4';

// Instruments
import {
    authentication
} from '../helpers';
import {
    Teachers
} from '../controllers';
import {
    validator
} from '../helpers';

const debug = dg('router:teachers');
const router = express.Router();
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20, // limit each IP to 20 requests per windowMs
    headers: false, // do not send custom rate limit header with limit and remaining
});

router.get('/', [limiter, validator.validate('get', '/teachers')], async (req, res) => {
    try {
        const collection = await teachers.find();

        res.json(collection);
    } catch (error) {
        debug(error.message);
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post(
    '/',
    [limiter, authentication, validator.validate('post', '/teachers')],
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

router.put('/', [limiter, authentication], async (req, res) => {
    try {
        const collection = await teachers.update();

        res.json(collection);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

router.delete('/', [limiter, authentication], async (req, res) => {
    try {
        const collection = await teachers.deleteMany();

        res.json(collection);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

//--------> id routing
router.get('/:teacherId', [limiter, validator.validate('get', '/teachers/{teacherId}')], async (req, res) => {
    const {
        teacherId
    } = req.params;
    try {
        const teachers = new Teachers(teacherId);
        const document = await teachers.readTeacherById();

        res.json(document);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post('/:teacherId', [limiter, authentication], (req, res) => {
    res.json({});
});

router.put('/:teacherId', [limiter, authentication], (req, res) => {
    res.json({});
});

router.delete('/:teacherId', [limiter, authentication], (req, res) => {
    res.json({});
});

export {
    router as teachers
};