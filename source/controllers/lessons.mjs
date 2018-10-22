import { Lessons as LessonsModel } from '../models';

export class Lessons {
    constructor(data) {
        this.model = {
            lessons: new LessonsModel(data),
        };
    }

    async readLessonById() {
        const document = await this.model.lessons.readLessonById();

        return document;
    }

    async createLesson() {
        const document = await this.model.lessons.createLesson();

        return document;
    }

    async updateLesson() {
        const document = await this.model.lessons.updateLesson();

        return document;
    }

    async removeLesson() {
        const document = await this.model.lessons.removeLesson();

        return document;
    }
}
