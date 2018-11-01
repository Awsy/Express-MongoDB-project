import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        email: {
            type:     String,
            unique:   true,
            required: true,
        },
        password: {
            type:     String,
            required: true,
            select:   false,
        },
        created: Date,
    },
    {
        id: false,
    },
);

export default mongoose.model('staff', schema);
