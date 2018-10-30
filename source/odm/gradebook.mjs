import mongoose from 'mongoose';
import dg from 'debug';

const debug = dg('schema:gradebook');

const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            index:    true,
        },
        image: String,
        year:  Number,
        class: {
            type:     mongoose.Schema.Types.ObjectId,
            required: true,
        },
        records: [
            {
                personHash: {
                    type:    String,
                    example: 'user123',
                },
                teacherHash: {
                    type:    String,
                    example: 'teacher123',
                },
                subjectHash: {
                    type:    String,
                    example: 'subject3',
                },
                seasonHash: {
                    type:    String,
                    example: 'season2',
                },
                lessonHash: {
                    type:    String,
                    example: 'lesson1',
                },
                mark: {
                    type: Number,
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
    debug('findOne for gradebook is triggered');
});

export default mongoose.model('gradebook', schema);
