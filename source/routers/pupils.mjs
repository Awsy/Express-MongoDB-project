import express from 'express';
import rateLimit from 'express-rate-limit';
import { authentication } from '../helpers';
const router = express.Router();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      2, // limit each IP to 2 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get('/', limiter, (req, res) => {
    res.json([]);
});

router.post('/', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.put('/', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.delete('/', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

//-----------> personId singleton
router.get('/:personId', limiter, (req, res) => {
    res.json({});
});

router.post('/:personId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.put('/:personId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.delete('/:personId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

export { router as pupils };
