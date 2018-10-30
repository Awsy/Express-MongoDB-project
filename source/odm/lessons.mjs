import mongoose from 'mongoose';
import dg from 'debug';

const debug = dg('schema:lessons');

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
        subject: {
            type:     mongoose.Schema.Types.ObjectId,
            required: true,
        },
        season: {
            type:     mongoose.Schema.Types.ObjectId,
            required: true,
        },
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

schema.pre('findOne', function() {
    debug('findOne for lessons is triggered');
});

export default mongoose.model('lessons', schema);
