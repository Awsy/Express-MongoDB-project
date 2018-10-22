import { Persons as PersonsModel } from '../models';

export class Persons {
    constructor(data) {
        this.model = {
            persons: new PersonsModel(data),
        };
    }

    async readPersonById() {
        const document = await this.model.persons.readPersonById();

        return document;
    }

    async createPerson() {
        const document = await this.model.persons.createPerson();

        return document;
    }

    async updatePerson() {
        const document = await this.model.persons.updatePerson();

        return document;
    }

    async removePerson() {
        const document = await this.model.persons.removePerson();

        return document;
    }
}
