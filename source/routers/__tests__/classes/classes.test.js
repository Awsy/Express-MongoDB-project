// Core
import supertest from 'supertest';

import { app } from '../../../server';
import { mockgoose } from '../../../../mocks';
import { Staff } from '../../../models';

const server = supertest(app);
const key = Buffer.from('test@email.com:123456').toString('base64');

describe('classes:', () => {
    beforeEach(async () => {
        await mockgoose.helper.reset();
        const staff = new Staff({ email: 'test@email.com', password: '123456' });
        await staff.create();
    });

    test('should get all classes', async () => {
        const res = await server // needed for authorization
            .get('/staff/login')
            .set('authorization', `Basic ${key}`)
            .expect(200);
        const cookie = res.headers[ 'set-cookie' ].pop().split(';')[ 0 ];

        const data = await server
            .get('/classes')
            .set('cookie', cookie)
            .expect(200);

        expect(Array.isArray(data.body)).toBeTruthy();
    });
});
