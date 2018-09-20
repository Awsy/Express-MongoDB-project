import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port);