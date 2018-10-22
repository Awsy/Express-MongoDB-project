import { subjects } from '../odm';

export class Subjects {
    constructor(data) {
        this.data = data;
    }

    async readSubjectById() {
        const id = this.data;
        const subject = await subjects.findById(id).lean();

        return subject;
    }

    async createSubject() {
        const data = this.data;
        const subject = await subjects.create(data);

        return subject;
    }

    async updateSubject() {
        const { id, data } = this.data;
        const document = await subjects.findByIdAndUpdate(id, data);

        return document;
    }

    async removeSubject() {
        const id = this.data;
        const document = await subjects.findByIdAndDelete(id);

        return document;
    }
}
