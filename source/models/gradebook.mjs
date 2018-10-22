import { gradebook } from '../odm';

export class Gradebook {
    constructor(data) {
        this.data = data;
    }

    async readGradebookById() {
        const id = this.data;
        const document = await gradebook.findById(id).lean();

        return document;
    }

    async createGradeBook() {
        const data = this.data;
        const document = await gradebook.create(data);

        return document;
    }

    async updateGradeBook() {
        const { id, data } = this.data;
        const document = await gradebook.findByIdAndUpdate(id, data);

        return document;
    }

    async removeGradeBook() {
        const id = this.data;
        const document = await gradebook.findByIdAndDelete(id);

        return document;
    }
}
