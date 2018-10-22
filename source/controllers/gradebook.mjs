import { Gradebook as GradebookModel } from '../models';

export class Gradebook {
    constructor(data) {
        this.model = {
            gradebook: new GradebookModel(data),
        };
    }

    async readGradebookById() {
        const document = await this.model.gradebook.readGradebookById();

        return document;
    }

    async createGradebook() {
        const document = await this.model.gradebook.createGradebook();

        return document;
    }

    async updateGradebook() {
        const document = await this.model.gradebook.updateGradebook();

        return document;
    }

    async removeGradebook() {
        const document = await this.model.gradebook.removeGradebook();

        return document;
    }
}
