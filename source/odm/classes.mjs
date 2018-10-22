import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            index:    true,
        },
        order:     Number,
        title:     String,
        image:     String,
        room:      Number,
        floor:     Number,
        gradebook: [
            {
                gradebook: mongoose.Schema.Types.ObjectId,
            },
        ],
        description: String,
        created:     Date,
    },
    {
        id: false,
    },
);

export default mongoose.model('classes', schema);
