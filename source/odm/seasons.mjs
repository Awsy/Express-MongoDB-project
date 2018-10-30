import mongoose from 'mongoose';
import dg from 'debug';

const debug = dg('schema:seasons');

const schema = new mongoose.Schema(
    {
        hash: {
            type:    String,
            require: true,
            unique:  true,
            index:   true,
        },
        order:   Number,
        title:   String,
        image:   String,
        subject: String,
        lessons: [
            {
                lesson: {
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
    debug('findOne for seasons is triggered');
});

export default mongoose.model('seasons', schema);
