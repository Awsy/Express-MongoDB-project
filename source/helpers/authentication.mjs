export const authentication = (req, res, next) => {
    const token = req.headers[ 'x-token' ];

    if (token === 'awsy') {
        return next();
    }

    res.status(401).json({message: 'authentication is not recognized'});
};
