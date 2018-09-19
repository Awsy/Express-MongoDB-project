import limiter from 'express-limiter';
import { app } from '../';

export const limiterObj = limiter(app);

// console.log(limiterObj);