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
    res.json({});
});

router.post('/:parentId', (req, res)=>{
    res.json({});
});

router.put('/:parentId', (req, res)=>{
    res.json({});
});

// router.delete('/:parentId', (req, res)=>{
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
    res.json({});
});

router.post('/:parentId/pupils/:personId', (req, res)=>{
    res.json({});
});

router.put('/:parentId/pupils/:personId', (req, res)=>{
    res.json({});
});

// router.delete('/:personId', (req, res)=>{
//     res.json({});
// });


export { router as parents}