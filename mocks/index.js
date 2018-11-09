/* eslint-disable */
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000; //eslint-disable-line

// Fix for parallel test run for version 7.3.3
Mockgoose.prototype.prepareStorage = function() {
    const _this = this;

    return new Promise((resolve) => {
        Promise.all([_this.getTempDBPath(), _this.getOpenPort()]).then((promiseValues) => {
            const dbPath = promiseValues[0];
            const openPort = promiseValues[1].toString();
            const storageEngine = _this.getMemoryStorageName();
            const mongodArgs = [
                '--port',
                openPort,
                '--storageEngine',
                storageEngine,
                '--dbpath',
                dbPath,
            ];
            _this.mongodHelper.mongoBin.commandArguments = mongodArgs;
            const mockConnection = () => {
                _this.mockConnectCalls(_this.getMockConnectionString(openPort));
                resolve();
            };
            _this.mongodHelper
                .run()
                .then(mockConnection)
                .catch(mockConnection);
        });
    });
};

mongoose.Promise = global.Promise;
export const mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage().then(() => {
    mongoose.connect('mongodb:awsy.test/school');
});
