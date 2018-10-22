import { Parents as ParentsModel } from '../models';

export class Parents {
    constructor(data) {
        this.model = {
            parents: new ParentsModel(data),
        };
    }

    async readParentById() {
        const document = await this.model.parents.readParentById();

        return document;
    }

    async createParent() {
        const document = await this.model.parents.createParent();

        return document;
    }

    async updateParent() {
        const document = await this.model.parents.updateParent();

        return document;
    }

    async removeParent() {
        const document = await this.model.parents.removeParent();

        return document;
    }
}
