import { lessons } from '../odm';

export class Lessons {
    constructor(data) {
        this.data = data;
    }

    async readLessonById() {
        const id = this.data;
        const document = await lessons.findById(id).lean();

        return document;
    }

    async createLesson() {
        const data = this.data;
        const document = await lessons.create(data);

        return document;
    }

    async updateLesson() {
        const { id, data } = this.data;
        const document = await lessons.findByIdAndUpdate(id, data);

        return document;
    }

    async removeLesson() {
        const id = this.data;
        const document = await lessons.deleteOne(id);

        return document;
    }
}
