import express from 'express';
 
const router = express.Router();

router.get('/', (req, res)=>{
    res.json([]);
});

router.post('/', (req, res)=>{
    res.json([]);
});

router.put('/', (req, res)=>{
    res.json([]);
});

router.delete('/', (req, res)=>{
    res.json([]);
});

//-----------> personId singleton
router.get('/:personId', (req, res)=>{
    res.json({});
});

router.post('/:personId', (req, res)=>{
    res.json({});
});

router.put('/:personId', (req, res)=>{
    res.json({});
});

router.delete('/:personId', (req, res)=>{
    res.json({});
});




export { router as pupils };