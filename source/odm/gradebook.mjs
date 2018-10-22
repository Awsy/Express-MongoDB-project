import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            index:    true,
        },
        image:   String,
        year:    Number,
        class:   mongoose.Schema.Types.ObjectId,
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
        description: String,
        created:     Date,
    },
    {
        id: false,
    },
);
export default mongoose.model('gradebook', schema);
