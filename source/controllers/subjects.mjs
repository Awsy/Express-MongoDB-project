import { Subjects as SubjectModel } from '../models';

export class Subjects {
    constructor(data) {
        this.model = {
            subjects: new SubjectModel(data),
        };
    }

    async readSubjectById() {
        const document = await this.model.subjects.readSubjectById();

        return document;
    }

    async createSubject() {
        const document = await this.model.subjects.createSubject();

        return document;
    }

    async updateSubject() {
        const document = await this.model.subjects.updateSubject();

        return document;
    }

    async removeSubject() {
        const document = await this.model.subjects.removeSubject();

        return document;
    }
}
