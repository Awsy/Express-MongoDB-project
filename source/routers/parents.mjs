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

//-----------> parentId singleton
router.get('/:parentId', limiter, (req, res) => {
    res.json({});
});

router.post('/:parentId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.put('/:parentId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.delete('/:parentId', [ limiter, authentication ], (req, res) => {
    res.json({});
});


//----------> pupils collection
router.get('/:parentId/pupils', limiter, (req, res) => {
    res.json([]);
});

router.get('/:parentId/pupils', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.get('/:parentId/pupils', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.delete('/:parentId/pupils', [ limiter, authentication ], (req, res) => {
    res.json([]);
});


//----------> pupilsId singleton
router.get('/:parentId/pupils/:personId', limiter, (req, res) => {
    res.json({});
});

router.post('/:parentId/pupils/:personId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.put('/:parentId/pupils/:personId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.delete('/:parentId/pupils/:personId', [ limiter, authentication ], (req, res) => {
    res.json({});
});


export { router as parents };
