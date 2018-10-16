import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    hash: {
        type: String,
        require: true,
        unique: true,
        index: true,
    },
    order: Number,
    title: String,
    image: String,
    subject: String,
    lessons: [{
        lesson: mongoose.Schema.Types.ObjectId,
    }, ],
    description: String,
    created: String,
}, {
    id: false,
});

export default mongoose.model('seasons', schema);