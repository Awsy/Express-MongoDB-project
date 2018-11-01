import jwt from 'jsonwebtoken';
import dg from 'debug';

const debug = dg('awsy:auth');
export const authentication = (req, res, next) => {
    const password = 'dewqdqwdqwfwq';
    const token = req.headers[ 'x-token' ];

    try {
        const decoded = jwt.verify(token, password);
        debug(decoded);

        return next();
    } catch ({ message }) {
        debug(message);
        res.status(401).json({ message: 'authentication is not recognized' });
    }
};
