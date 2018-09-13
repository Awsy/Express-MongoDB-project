import express from 'express';
import {
    teachers, 
    subjects,
    pupils,
    parents,
    classes
} from './routers';


const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/teachers', teachers);
app.use('/subjects', subjects);
app.use('/pupils', pupils);
app.use('/parents', parents);
app.use('/classes', classes);



app.listen(port, ()=>{
    console.log('server API is up');
});
