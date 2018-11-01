import mongoose from 'mongoose';
import dg from 'debug';

//Plugin
import { lastModif } from '../helpers';
mongoose.plugin(lastModif, { index: true });

const debugDb = dg('awsy:db:connect');
mongoose.Promise = global.Promise;

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
        'mongodb://127.0.0.1:27017/school',
        mongooseOptions,
    );

    mongoDB
        .then(() => {
            debugDb('school has been connected');
            clearTimeout(firstConnectTimeout);
        })
        .catch((error) => {
            debugDb(error);
            clearTimeout(firstConnectTimeout);
            firstConnectTimeout = setTimeout(mongoConnect, mongooseOptions.reconnectInterval);
        });
};

mongoConnect();
