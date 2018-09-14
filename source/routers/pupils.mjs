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

// router.delete('/', (req, res)=>{
//     res.json([]);
// });

//-----------> personId singleton
router.get('/:personId', (req, res)=>{
    const personId = req.params.personId;
    res.send(`personId is: ${ personId }`);
    res.json({});
});

router.post('/:personId', (req, res)=>{
    const personId = req.params.personId;
    res.send(`personId is: ${ personId }`);
    res.json({});
});

router.put('/:personId', (req, res)=>{
    const personId = req.params.personId;
    res.send(`personId is: ${ personId }`);
    res.json({});
});

router.delete('/:personId', (req, res)=>{
    const personId = req.params.personId;
    res.send(`personId is: ${ personId }`);
    res.json({});
});




export { router as pupils };