// Core
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { staff } from '../odm';

export class Staff {
    constructor(data) {
        this.data = data;
        this.password = 'dewqdqwdqwfwq';
    }

    async create() {
        const hash = bcrypt.hashSync(this.data.password, 11);
        this.data.password = hash;
        const { _id: id } = await staff.create(this.data);

        return { id };
    }

    async login() {
        const { email, password } = this.data;
        const { password: hash } = await staff.findOne({ email }, { password: true }).lean();

        const check = await bcrypt.compare(password, hash);

        if (!check) {
            throw new Error('password is not valid');
        }

        const token = jwt.sign({ role: 'user', permissions: 'read,write' }, this.password);

        return { token };
    }
}
