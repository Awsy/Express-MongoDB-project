// Core
import supertest from 'supertest';
import faker from 'faker';

import { app } from '../../../server';
import { mockgoose } from '../../../../mocks';
import { Staff } from '../../../models';

const server = supertest(app);
const key = Buffer.from('test@email.com:123456').toString('base64');
const generateClass = () => ({
    hash:  faker.random.alphaNumeric(10),
    image: faker.image.imageUrl(),
});
let cookie = '';
let token = '';

describe('classes:', () => {
    beforeEach(async () => {
        await mockgoose.helper.reset();
        const staff = new Staff({ email: 'test@email.com', password: '123456' });
        await staff.create();
        const res = await server
            .get('/staff/login')
            .set('authorization', `Basic ${key}`)
            .expect(200);
        cookie = res.headers[ 'set-cookie' ].pop().split(';')[ 0 ];
        ({ token } = res.body);
    });

    test('should create a new class', async () => {
        const data = await server
            .post('/classes')
            .set('x-token', token)
            .send(generateClass())
            .expect(201);

        expect(typeof data.body.hash).toBe('string');
    });

    test('should get all classes', async () => {
        const data = await server
            .get('/classes')
            .set('cookie', cookie)
            .expect(200);

        expect(Array.isArray(data.body)).toBeTruthy();
    });
});
