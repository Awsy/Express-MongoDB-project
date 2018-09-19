import express from 'express';
import rateLimit from 'express-rate-limit';
import { authentication } from '../helpers';
const router = express.Router();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      2, // limit each IP to 2 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get('/', (req, res) => {
    res.json([]);
});

router.post('/', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.put('/', (req, res) => {
    res.json([]);
});

router.delete('/', (req, res) => {
    res.json([]);
});

//--------> id routing
router.get('/:teacherId', (req, res) => {
    res.json({});
});

router.post('/:teacherId', (req, res) => {
    res.json({});
});

router.put('/:teacherId', (req, res) => {
    res.json({});
});

router.delete('/:teacherId', (req, res) => {
    res.json({});
});

export { router as teachers };
