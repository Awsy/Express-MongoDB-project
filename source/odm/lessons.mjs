import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    hash: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    order: Number,
    title: String,
    image: String,
    subject: mongoose.Schema.Types.ObjectId,
    season: mongoose.Schema.Types.ObjectId,
    description: String,
    created: String,
}, {
    id: false,

});

export default mongoose.model('lessons', schema);