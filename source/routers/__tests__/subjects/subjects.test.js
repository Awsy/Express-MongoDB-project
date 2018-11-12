// Core
import supertest from 'supertest';
import faker from 'faker';

import { app } from '../../../server';
import { mockgoose } from '../../../../mocks';
import { Staff, Subjects } from '../../../models';

const server = supertest(app);
const key = Buffer.from('test@email.com:123456').toString('base64');

const generateSubject = () => ({
    hash:  faker.random.alphaNumeric(10),
    title: faker.name.title(),
    image: faker.image.imageUrl(),
});
let cookie = '';
let token = '';

describe('subjects:', () => {
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

    test('should create a new subject', async () => {
        const data = await server
            .post('/subjects')
            .set('x-token', token)
            .send(generateSubject())
            .expect(201);

        expect(typeof data.body.hash).toBe('string');
    });

    test('should get all subjects', async () => {
        const data = await server
            .get('/subjects')
            .set('cookie', cookie)
            .expect(200);

        expect(Array.isArray(data.body)).toBeTruthy();
    });

    test('should return array with one subject', async () => {
        const subjects = new Subjects(generateSubject());
        await subjects.createSubject();

        const data = await server
            .get('/subjects')
            .set('cookie', cookie)
            .expect(200);

        expect(data.body).toHaveLength(1);
    });

    test('should return string as a type of subject title', async () => {
        const subjects = new Subjects(generateSubject());
        await subjects.createSubject();

        const data = await server
            .get('/subjects')
            .set('cookie', cookie)
            .expect(200);

        expect(typeof data.body[ 0 ].title).toBe('string');
    });

    test('should return a defined title', async () => {
        const subjects = new Subjects(generateSubject());
        await subjects.createSubject();

        const data = await server
            .get('/subjects')
            .set('cookie', cookie)
            .expect(200);

        expect(data.body[ 0 ].title).toBeDefined();
    });
});
