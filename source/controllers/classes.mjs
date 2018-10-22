import { Classes as ClassesModel } from '../models';

export class Classes {
    constructor(data) {
        this.model = {
            classes: new ClassesModel(data),
        };
    }

    async readClassById() {
        const document = await this.model.classes.readClassById();

        return document;
    }

    async createClass() {
        const document = await this.model.classes.createClass();

        return document;
    }

    async updateClass() {
        const document = await this.model.classes.updateClass();

        return document;
    }

    async removeClass() {
        const document = await this.model.classes.removeClass();

        return document;
    }
}
