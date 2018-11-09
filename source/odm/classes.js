import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            index:    true,
        },
        order: Number,
        title: String,
        image: {
            type:     String,
            required: true,
        },
        room:       Number,
        floor:      Number,
        gradebooks: [
            {
                gradebook: {
                    type:     mongoose.Schema.Types.ObjectId,
                    required: true,
                },
            },
        ],
        description: {
            type:      String,
            minLength: 10,
        },
        created: Date,
    },
    {
        id: false,
    },
);

export default mongoose.model('classes', schema);
