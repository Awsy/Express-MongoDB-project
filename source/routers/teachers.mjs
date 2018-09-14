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
    const teacherId = req.params.teacherId;
    res.send(`teacherId is: ${ teacherId }`);
    res.json({});
});

router.post('/:teacherId', (req, res)=>{
    const teacherId = req.params.teacherId;
    res.send(`teacherId is: ${ teacherId }`);
    res.json({});
});

router.put('/:teacherId', (req, res)=>{
    const teacherId = req.params.teacherId;
    res.send(`teacherId is: ${ teacherId }`);
    res.json({});
});

router.delete('/:teacherId', (req, res)=>{
    const teacherId = req.params.teacherId;
    res.send(`teacherId is: ${ teacherId }`);
    res.json({});
});

export { router as teachers };

