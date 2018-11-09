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
        const hash = await bcrypt.hash(this.data.password, 11);
        this.data.password = hash;
        const { _id: id } = await staff.create(this.data);

        return { id };
    }

    async login() {
        const { email, password } = this.data;
        const source = await staff.findOne({ email }, { password: true }).lean();

        if (!source) {
            throw new Error('can not find right staff');
        }

        const check = await bcrypt.compare(password, source.password);

        if (!check) {
            throw new Error('password is not valid');
        }

        const token = jwt.sign({ role: 'user', permissions: 'read,write' }, this.password);

        return { token };
    }
}
