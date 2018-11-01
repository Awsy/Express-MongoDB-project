//Core
import express from 'express';
import rateLimit from 'express-rate-limit';
import dg from 'debug';

//Instruments
import { Staff } from '../controllers';
import { validator } from '../helpers';

const debug = dg('router:staff');
const router = express.Router();
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max:      20, // limit each IP to 2 requests per windowMs
    headers:  false, // do not send custom rate limit header with limit and remaining
});

router.get('/login', [ limiter ], async (req, res) => {
    try {
        const auth = req.headers.authorization.split(' ')[ 1 ];
        const [ email, password ] = Buffer.from(auth, 'base64')
            .toString('ascii')
            .split(':');
        const staff = new Staff({ email, password });
        const customer = await staff.login();
        debug(`subjects: ${JSON.stringify(customer)}`);
        res.status(200).json(customer);
    } catch ({ message }) {
        debug(message);
        res.status(400).json({
            message,
        });
    }
});

router.post('/', [ limiter ], async (req, res) => {
    try {
        const staff = new Staff(req.body);
        const customer = await staff.create();
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

export { router as staff };
