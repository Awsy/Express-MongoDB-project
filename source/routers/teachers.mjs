// Core
import express from 'express';
import rateLimit from 'express-rate-limit';

// Instruments
import { authentication } from '../helpers';
import { teachers } from '../odm';
import { validator } from '../helpers';

const router = express.Router();
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      20, // limit each IP to 20 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get('/', [ limiter, validator.validate('get', '/teachers') ], async (req, res) => {
    try {
        const collection = await teachers.find();

        res.json(collection);
    } catch (error) {
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
            const document = await teachers.create(req.body);

            res.json(document);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },
);

router.put('/', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.delete('/', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

//--------> id routing
router.get('/:teacherId', limiter, async (req, res) => {
    const { teacherId } = req.params;
    try {
        const document = await teachers.findOne({ _id: teacherId }, { name: 1 });
        res.json(document);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post('/:teacherId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.put('/:teacherId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.delete('/:teacherId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

export { router as teachers };
