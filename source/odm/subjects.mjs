import mongoose from 'mongoose';
import dg from 'debug';

const debug = dg('schema:subjects');

const schema = new mongoose.Schema(
    {
        hash: {
            type:    String,
            require: true,
            unique:  true,
            index:   true,
        },
        title: {
            type:      String,
            required:  true,
            minLength: 3,
        },
        image:   String,
        seasons: [
            {
                season: {
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
schema.pre('findOne', function() {
    debug('findOne for subjects is triggered');
});

export default mongoose.model('subjects', schema);
