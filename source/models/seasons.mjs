import { seasons } from '../odm';

export class Seasons {
    constructor(data) {
        this.data = data;
    }

    async readSeasonById() {
        const id = this.data;
        const document = await seasons.findById(id).lean();

        return document;
    }

    async createSeason() {
        const data = this.data;
        const document = await seasons.create(data);

        return document;
    }

    async updateSeason() {
        const { id, data } = this.data;
        const document = await seasons.findByIdAndUpdate(id, data);

        return document;
    }

    async removeSeason() {
        const id = this.data;
        const document = await seasons.findByIdAndDelete(id);

        return document;
    }
}
