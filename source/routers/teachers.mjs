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



//--------> id routing

router.get('/:teacherId', (req, res)=>{
    res.json({});
});

router.post('/:teacherId', (req, res)=>{
    res.json({});
});

router.put('/:teacherId', (req, res)=>{
    res.json({});
});

router.delete('/:teacherId', (req, res)=>{
    res.json({});
});

export { router as teachers };

