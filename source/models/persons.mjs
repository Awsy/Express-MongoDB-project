import { persons } from '../odm';

export class Persons {
    constructor(data) {
        this.data = data;
    }

    async readPersons() {
        const readPersons = await persons.find();

        return readPersons;
    }

    async readPersonById() {
        const id = this.data;
        const document = await persons.findById(id).lean();

        return document;
    }

    async createPerson() {
        const data = this.data;
        const document = await persons.create(data);

        return document;
    }

    async updatePerson() {
        const { id, data } = this.data;
        const document = await persons.findByIdAndUpdate(id, data);

        return document;
    }

    async removePerson() {
        const id = this.data;
        const document = await persons.findByIdAndDelete(id);

        return document;
    }
}
