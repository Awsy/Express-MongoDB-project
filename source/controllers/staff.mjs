import { Staff as StaffModel } from '../models';

export class Staff {
    constructor(data) {
        this.model = {
            staff: new StaffModel(data),
        };
    }

    async create() {
        const staff = await this.model.staff.create();

        return staff;
    }

    async login() {
        const staff = await this.model.staff.login();

        return staff;
    }
}
