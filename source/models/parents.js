import { parents } from '../odm';

export class Parents {
    constructor(data) {
        this.data = data;
    }

    async readParents() {
        const parentsColl = await parents.find();

        return parentsColl;
    }

    async readParentById() {
        const id = this.data;
        const document = await parents.findById(id).lean();

        return document;
    }

    async createParent() {
        const data = this.data;
        const document = await parents.create(data);

        return document;
    }

    async updateParent() {
        const { id, data } = this.data;
        const document = await parents.findByIdAndUpdate(id, data);

        return document;
    }

    async removeParent() {
        const id = this.data;
        const document = await parents.deleteOne(id);

        return document;
    }
}
