import express from 'express';
 
const router = express.Router();

router.get('/', (req, res) => {
    res.json([]);
});

router.post('/d', (req, res) => {
    res.json([]);
});


router.put('/', (req, res) => {
    res.json([]);
});

router.delete('/', (req, res) => {
    res.json([]);
});


//-------------> subjectID singleton
router.get('/:subjectId', (req, res)=>{
    res.json({});
});

router.post('/:subjectId', (req, res)=>{
    res.json({});
});

router.put('/:subjectId', (req, res)=>{
    res.json({});
});

router.delete('/:subjectId', ()=>{
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

router.delete('/:subjectId/seasons', (req, res)=>{
    res.json([]);
});

//------------> seasonsId singleton

router.get('/:subjectId/seasons/:seasonId', (req, res)=>{
   res.json({});
});

router.post('/:subjectId/seasons/:seasonId', (req, res)=>{
    res.json({});
});

router.put('/:subjectId/seasons/:seasonId', (req, res)=>{
    res.json({});
});

router.delete('/:subjectId/seasons/:seasonId', (req, res)=>{
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

router.delete('/:subjectId/seasons/:seasonId/lessons', (req, res)=> {
    res.json([]);
});


//-----------> lessonsId singleton

router.get(':subjectId/seasons/:seasonId/lessons/:lessonId', (req, res)=>{
    res.json({});
});

router.post(':subjectId/seasons/:seasonId/lessons/:lessonId', (req, res)=>{
    res.json({});
});

router.put(':subjectId/seasons/:seasonId/lessons/:lessonId', (req, res)=>{
    res.json({});
});

router.delete(':subjectId/seasons/:seasonId/lessons/:lessonId', (req, res)=>{
    res.json({});
});




export { router as subjects };
