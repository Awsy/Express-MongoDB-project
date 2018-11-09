import dg from 'debug';

const debug = dg('awsy:auth:cookie');
export const authenticationCookie = (req, res, next) => {
    const token = req.session.info;
    if (token === '123456') {
        debug('auth');

        return next();
    }
    debug('not auth');
    res.status(401).json({ message: 'authentication is not recognized' });
};
