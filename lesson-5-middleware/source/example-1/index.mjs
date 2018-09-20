import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/stories', (req, res) => {
    res.send('Hello World!');
});

app.listen(port);