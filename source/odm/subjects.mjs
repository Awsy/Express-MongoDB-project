import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    hash: {
        type: String,
        require: true,
        unique: true,
        index: true,
    },
    title: String,
    image: String,
    seasons: [{
        season: mongoose.Schema.Types.ObjectId,
    }, ],
    description: String,
    created: String,
}, {
    id: false,
});

export default mongoose.model('subjects', schema);