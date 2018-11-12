import mongoose from 'mongoose';
import dg from 'debug';
import winston from 'winston';

//Plugin
import { lastModif } from '../helpers';
mongoose.plugin(lastModif, { index: true });

// Winston config
const logger = winston.createLogger({
    level:      'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

const debugDb = dg('awsy:db:connect');
mongoose.Promise = global.Promise;

const { DB_USER = 'user', DB_PWD = '123456', DB_URI = '127.0.0.1' } = process.env;

const mongooseOptions = {
    promiseLibrary:    global.Promise,
    poolSize:          10,
    keepAlive:         30000,
    connectTimeoutMS:  5000,
    reconnectTries:    Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser:   true,
    useCreateIndex:    true,
};
let firstConnectTimeout = null;
const mongoConnect = () => {
    const mongoDB = mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_URI}/school?retryWrites=true`,
        mongooseOptions,
    );

    mongoDB
        .then(() => {
            if (process.env.NODE_ENV === 'production') {
                logger.info('school has been connected');
            }
            debugDb('school has been connected');
            clearTimeout(firstConnectTimeout);
        })
        .catch((error) => {
            if (process.env.NODE_ENV === 'production') {
                logger.info(error.message || error.error);
            }
            debugDb(error);
            clearTimeout(firstConnectTimeout);
            firstConnectTimeout = setTimeout(mongoConnect, mongooseOptions.reconnectInterval);
        });
};

mongoConnect();
