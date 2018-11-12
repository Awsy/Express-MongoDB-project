// Core
import supertest from 'supertest';
import faker from 'faker';

import { app } from '../../../server';
import { mockgoose } from '../../../../mocks';
import { Staff, Persons } from '../../../models';

const server = supertest(app);
const key = Buffer.from('test@email.com:123456').toString('base64');

const generatePerson = () => ({
    hash: faker.random.alphaNumeric(10),
    name: {
        first: faker.name.firstName(),
        last:  faker.name.lastName(),
    },
    image: faker.image.imageUrl(),
});
let cookie = '';
let token = '';

describe('persons:', () => {
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

    test('should create a new person', async () => {
        const data = await server
            .post('/persons')
            .set('x-token', token)
            .send(generatePerson())
            .expect(201);

        expect(typeof data.body.hash).toBe('string');
        expect(data.body.name.first).toBeDefined();
        expect(data.body.name.last).toBeDefined();
    });

    test('should return person name as a string', async () => {
        const data = await server
            .post('/persons')
            .set('x-token', token)
            .send(generatePerson())
            .expect(201);

        expect(data.body.name).toBe('string');
    });

    test('should get all persons', async () => {
        const data = await server
            .get('/persons')
            .set('cookie', cookie)
            .expect(200);

        expect(Array.isArray(data.body)).toBeTruthy();
    });

    test('should return array with one person', async () => {
        const persons = new Persons(generatePerson());
        await persons.createPerson();

        const data = await server
            .get('/persons')
            .set('cookie', cookie)
            .expect(200);

        expect(data.body).toHaveLength(1);
    });
});
