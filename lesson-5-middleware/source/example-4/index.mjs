import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next();
});

app.listen(port);