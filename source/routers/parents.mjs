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

//-----------> parentId singleton
router.get('/:parentId', (req, res)=>{
    const parentId = req.params.parentId;
    res.send(`parentId is: ${ parentId }`);
    res.json({});
});

router.post('/:parentId', (req, res)=>{
    const parentId = req.params.parentId;
    res.send(`parentId is: ${ parentId }`);
    res.json({});
});

router.put('/:parentId', (req, res)=>{
    const parentId = req.params.parentId;
    res.send(`parentId is: ${ parentId }`);
    res.json({});
});

// router.delete('/:parentId', (req, res)=>{
    // const parentId = req.params.parentId;
    // res.send(`parentId is: ${ parentId }`);
//     res.json({});
// });


//----------> pupils collection
router.get('/:parentId/pupils', (req, res)=>{
    res.json([]);
});

router.get('/:parentId/pupils', (req, res)=>{
    res.json([]);
});

router.get('/:parentId/pupils', (req, res)=>{
    res.json([]);
});

// router.delete('/:parentId/pupils', (req, res)=>{
//     res.json([]);
// });


//----------> pupilsId singleton
router.get('/:parentId/pupils/:personId', (req, res)=>{
    const parentId = req.params.parentId;
    const personId = req.params.personId;
    res.send(`parentId is: ${ parentId }, personId is: ${ personId}`);
    res.json({});
});

router.post('/:parentId/pupils/:personId', (req, res)=>{
    const parentId = req.params.parentId;
    const personId = req.params.personId;
    res.send(`parentId is: ${ parentId }, personId is: ${ personId}`);
    res.json({});
});

router.put('/:parentId/pupils/:personId', (req, res)=>{
    const parentId = req.params.parentId;
    const personId = req.params.personId;
    res.send(`parentId is: ${ parentId }, personId is: ${ personId}`);
    res.json({});
});

// router.delete('/:personId', (req, res)=>{
    // const parentId = req.params.parentId;
    // const personId = req.params.personId;
    // res.send(`parentId is: ${ parentId }, personId is: ${ personId}`);
//     res.json({});
// });


export { router as parents}