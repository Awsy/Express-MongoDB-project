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

//-------------> subjectID singleton
router.get('/:subjectId', limiter, (req, res) => {
    res.json({});
});

router.post('/:subjectId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.put('/:subjectId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.delete('/:subjectId', [ limiter, authentication ], (req, res) => {
    res.json({});
});


//---------> seasons collection
router.get('/:subjectId/seasons', limiter, (req, res) => {
    res.json([]);
});

router.post('/:subjectId/seasons', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.put('/:subjectId/seasons', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.delete('/:subjectId/seasons', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

//------------> seasonsId singleton

router.get('/:subjectId/seasons/:seasonId', limiter, (req, res) => {
    res.json({});
});

router.post('/:subjectId/seasons/:seasonId', (req, res) => {
    res.json({});
});

router.put('/:subjectId/seasons/:seasonId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.delete('/:subjectId/seasons/:seasonId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

//-----------> lessons collection

router.get('/:subjectId/seasons/:seasonId/lessons', limiter, (req, res) => {
    res.json([]);
});

router.post('/:subjectId/seasons/:seasonId/lessons', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.put('/:subjectId/seasons/:seasonId/lessons', [ limiter, authentication ], (req, res) => {
    res.json([]);
});

router.delete('/:subjectId/seasons/:seasonId/lessons', [ limiter, authentication ], (req, res) => {
    res.json([]);
});


//-----------> lessonsId singleton

router.get(':subjectId/seasons/:seasonId/lessons/:lessonId', limiter, (req, res) => {
    res.json({});
});

router.post(':subjectId/seasons/:seasonId/lessons/:lessonId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.put(':subjectId/seasons/:seasonId/lessons/:lessonId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

router.delete(':subjectId/seasons/:seasonId/lessons/:lessonId', [ limiter, authentication ], (req, res) => {
    res.json({});
});

export { router as subjects };
