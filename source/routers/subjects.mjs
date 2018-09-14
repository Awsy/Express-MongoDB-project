import express from 'express';
 
const router = express.Router();

router.get('/', (req, res)=>{
    res.json([]);
});

router.post('/d', (req, res)=>{
    res.json([]);
});


router.put('/', (req, res)=>{
    res.json([]);
});

router.delete('/', (req, res)=>{
    res.json([]);
});


//-------------> subjectID singleton
router.get('/:subjectId', (req, res)=>{
    const subjectId = req.params.subjectId;
    res.send(`subjectId is: ${ subjectId }`);
    res.json({});
});

router.post('/:subjectId', (req, res)=>{
    const subjectId = req.params.subjectId;
    res.send(`subjectId is: ${ subjectId }`);
    res.json({});
});

router.put('/:subjectId', (req, res)=>{
    const subjectId = req.params.subjectId;
    res.send(`subjectId is: ${ subjectId }`);
    res.json({});
});

router.delete('/:subjectId', ()=>{
    const subjectId = req.params.subjectId;
    res.send(`subjectId is: ${ subjectId }`);
    res.json({});
});


//---------> seasons collection
router.get('/:subjectId/seasons', (req, res)=>{
    res.json([]);
});

router.post('/:subjectId/seasons', (req, res)=>{
    res.json([]);
});

router.put('/:subjectId/seasons', (req, res)=>{
    res.json([]);
});

// router.delete('/:subjectId/seasons', (req, res)=>{
//     res.json([]);
// });

//------------> seasonsId singleton

router.get('/:subjectId/seasons/:seasonId', (req, res)=>{
    const subjectId = req.params.subjectId;
    const seasonId = req.params.seasonId;
    res.send(`subjectId is: ${ subjectId }, seasonId is: ${ seasonId }`);
    res.json({});
});

router.post('/:subjectId/seasons/:seasonId', (req, res)=>{
    const subjectId = req.params.subjectId;
    const seasonId = req.params.seasonId;
    res.send(`subjectId is: ${ subjectId }, seasonId is: ${ seasonId }`);
    res.json({});
});

router.put('/:subjectId/seasons/:seasonId', (req, res)=>{
    const subjectId = req.params.subjectId;
    const seasonId = req.params.seasonId;
    res.send(`subjectId is: ${ subjectId }, seasonId is: ${ seasonId }`);
    res.json({});
});

router.delete('/:subjectId/seasons/:seasonId', (req, res)=>{
    const subjectId = req.params.subjectId;
    const seasonId = req.params.seasonId;
    res.send(`subjectId is: ${ subjectId }, seasonId is: ${ seasonId }`);
    res.json({});
});

//-----------> lessons collection

router.get('/:subjectId/seasons/:seasonId/lessons', (req, res)=> {
    res.json([]);
});

router.post('/:subjectId/seasons/:seasonId/lessons', (req, res)=> {
    res.json([]);
});

router.put('/:subjectId/seasons/:seasonId/lessons', (req, res)=> {
    res.json([]);
});

// router.delete('/:subjectId/seasons/:seasonId/lessons', (req, res)=> {
//     res.json([]);
// });


//-----------> lessonsId singleton

router.get(':subjectId/seasons/:seasonId/lessons/:lessonId', (req, res)=>{
    const subjectId = req.params.subjectId;
    const seasonId = req.params.seasonId;
    const lessonId = req.params.lessonId;
    res.send(`subjectId is: ${ subjectId }, seasonId is: ${ seasonId }, lessonId is: ${ lessonId }`);
    res.json({});
});

router.post(':subjectId/seasons/:seasonId/lessons/:lessonId', (req, res)=>{
    const subjectId = req.params.subjectId;
    const seasonId = req.params.seasonId;
    const lessonId = req.params.lessonId;
    res.send(`subjectId is: ${ subjectId }, seasonId is: ${ seasonId }, lessonId is: ${ lessonId }`);
    res.json({});
});

router.put(':subjectId/seasons/:seasonId/lessons/:lessonId', (req, res)=>{
    const subjectId = req.params.subjectId;
    const seasonId = req.params.seasonId;
    const lessonId = req.params.lessonId;
    res.send(`subjectId is: ${ subjectId }, seasonId is: ${ seasonId }, lessonId is: ${ lessonId }`);
    res.json({});
});

router.delete(':subjectId/seasons/:seasonId/lessons/:lessonId', (req, res)=>{
    const subjectId = req.params.subjectId;
    const seasonId = req.params.seasonId;
    const lessonId = req.params.lessonId;
    res.send(`subjectId is: ${ subjectId }, seasonId is: ${ seasonId }, lessonId is: ${ lessonId }`);
    res.json({});
});




export { router as subjects };
