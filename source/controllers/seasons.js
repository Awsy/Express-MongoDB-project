import { Seasons as SeasonsModel } from '../models';

export class Seasons {
    constructor(data) {
        this.model = {
            seasons: new SeasonsModel(data),
        };
    }

    async readSeasons() {
        const collection = await this.model.seasons.readSeasons();

        return collection;
    }

    async readSeasonById() {
        const document = await this.model.seasons.readSeasonById();

        return document;
    }

    async createSeason() {
        const document = await this.model.seasons.createSeason();

        return document;
    }

    async updateSeason() {
        const document = await this.model.seasons.updateSeason();

        return document;
    }

    async removeSeason() {
        const document = await this.model.seasons.removeSeason();

        return document;
    }
}
