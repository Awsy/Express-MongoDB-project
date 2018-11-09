import { classes } from '../odm';

export class Classes {
    constructor(data) {
        this.data = data;
    }

    async readClasses() {
        const classesColl = await classes.find();

        return classesColl;
    }

    async readClassById() {
        const id = this.data;
        const document = await classes.findById(id).lean();

        return document;
    }

    async createClass() {
        const data = this.data;
        const document = await classes.create(data);

        return document;
    }

    async updateClass() {
        const { id, data } = this.data;
        const document = await classes.findByIdAndUpdate(id, data);

        return document;
    }

    async removeClass() {
        const id = this.data;
        const document = await classes.findByIdAndDelete(id);

        return document;
    }
}
