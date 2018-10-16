import express from 'express';
import rateLimit from 'express-rate-limit';
import {
    authentication
} from '../helpers';
import {
    teachers,
} from '../odm';
const router = express.Router();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10, // limit each IP to 2 requests per windowMs
    headers: false, // do not send custom rate limit header with limit and remaining
});

router.get('/', limiter, async (req, res) => {
    // teachers.find({}, (err, documents) => {
    //     if (err) {
    //         console.log(err);
    //     }

    //     console.log(documents);
    // });
    try {
        const collection = await teachers.find();

        res.json(collection);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

});

router.post('/', [limiter, authentication], async (req, res) => {
    try {
        const document = await teachers.create(req.body);

        res.json(document);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.put('/', [limiter, authentication], (req, res) => {
    res.json([]);
});

router.delete('/', [limiter, authentication], (req, res) => {
    res.json([]);
});

//--------> id routing
router.get('/:teacherId', limiter, async (req, res) => {
    const { teacherId } = req.params;
    try {
        const document = await teachers.findOne({_id: teacherId}, {name: 1});
        res.json(document);
    } catch (error) {
        res.status(400).json({
            message: error.message
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