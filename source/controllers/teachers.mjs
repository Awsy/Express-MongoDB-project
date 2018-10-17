import {
    Teachers as TeachersModel
} from '../models';

export class Teachers {
    constructor(data) {
        this.model = {
            teachers: new TeachersModel(data),
        };
    }

    async readTeacherById() {
        const document = await this.model.teachers.readTeacherById();

        return document;
    }

    async createTeacher() {
        const document = await this.model.teachers.createTeacher();

        return document;
    }
};