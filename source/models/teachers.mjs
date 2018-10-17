import {
    teachers
} from '../odm';

export class Teachers {
    constructor(data) {
        this.data = data;
    }

    async readTeacherById() {
        const document = await teachers.findById(this.data);

        return document;
    }

    async createTeacher() {
        const document = await teachers.create(this.data);

        return document;
    }
};