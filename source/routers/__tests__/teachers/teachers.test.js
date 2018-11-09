// Core
import supertest from 'supertest';
import faker from 'faker';

import { app } from '../../../server';
import { mockgoose } from '../../../../mocks';
import { Staff, Teachers } from '../../../models';

const server = supertest(app);
const key = Buffer.from('test@email.com:123456').toString('base64');

const generateTeacher = () => ({
    hash: faker.random.alphaNumeric(10),
    name: {
        first: faker.name.firstName(),
        last:  faker.name.lastName(),
    },
    image: faker.image.imageUrl(),
});
let cookie = '';
let token = '';

describe('teachers:', () => {
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

    test('should create a new teacher', async () => {
        const data = await server
            .post('/teachers')
            .set('x-token', token)
            .send(generateTeacher())
            .expect(201);

        expect(typeof data.body.hash).toBe('string');
        expect(data.body.name.first).toBeDefined();
        expect(data.body.name.last).toBeDefined();
    });

    test('should get all teachers', async () => {
        const data = await server
            .get('/teachers')
            .set('cookie', cookie)
            .expect(200);

        expect(Array.isArray(data.body)).toBeTruthy();
    });

    test('should return array with one teacher', async () => {
        const teachers = new Teachers(generateTeacher());
        await teachers.createTeacher();

        const data = await server
            .get('/teachers')
            .set('cookie', cookie)
            .expect(200);

        expect(data.body).toHaveLength(1);
    });
});
