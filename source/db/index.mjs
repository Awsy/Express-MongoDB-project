import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const mongooseOptions = {
    promiseLibrary: global.Promise,
    poolSize: 10,
    keepAlive: 30000,
    connectTimeoutMS: 5000,
    reconnectTries: Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser: true,
};

let firstConnectTimeout = null;
const mongoConnect = () => {
    const mongoDB = mongoose.connect('mongodb://127.0.0.1:27017/school', mongooseOptions);

    mongoDB
        .then(() => {
            console.log(`school has been connected`); // eslint-disable-line
            clearTimeout(firstConnectTimeout);
        })
        .catch((error) => {
            console.log(error); // eslint-disable-line
            clearTimeout(firstConnectTimeout);
            firstConnectTimeout = setTimeout(mongoConnect, mongooseOptions.reconnectInterval);
        });
};

mongoConnect();