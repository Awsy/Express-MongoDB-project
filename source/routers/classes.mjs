import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json([]);
});

router.post('/', (req, res) => {
    res.json([]);
});

router.put('/', (req, res) => {
    res.json([]);
});

router.delete('/', (req, res) => {
    res.json([]);
});

//-----------> classId singleton

router.get('/:classId', (req, res) => {
    res.json({});
});

router.post('/:classId', (req, res) => {
    res.json({});
});

router.put('/:classId', (req, res) => {
    res.json({});
});

router.delete('/:classId', (req, res) => {
    res.json({});
});

//-----------> gradebooks collection

router.get('/:classId/gradebook', (req, res) => {
    res.json([]);
});

router.post('/:classId/gradebook', (req, res) => {
    res.json([]);
});

router.put('/:classId/gradebook', (req, res) => {
    res.json([]);
});

router.delete('/:classId/gradebook', (req, res) => {
    res.json([]);
});


export { router as classes };
