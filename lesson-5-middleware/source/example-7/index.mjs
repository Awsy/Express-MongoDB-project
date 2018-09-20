import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
});

app.listen(port);