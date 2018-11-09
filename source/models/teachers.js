import { teachers } from '../odm';

export class Teachers {
    constructor(data) {
        this.data = data;
    }

    async readTeachers() {
        const teachersColl = await teachers.find();

        return teachersColl;
    }

    async readTeacherById() {
        const id = this.data;
        const document = await teachers.findById(id).lean();

        return document;
    }

    async createTeacher() {
        const data = this.data;
        const document = await teachers.create(data);

        return document;
    }

    async updateTeacher() {
        const { id, data } = this.data;
        const document = await teachers.findByIdAndUpdate(id, data);

        return document;
    }

    async removeTeacher() {
        const id = this.data;
        const document = await teachers.findByIdAndDelete(id);

        return document;
    }
}
