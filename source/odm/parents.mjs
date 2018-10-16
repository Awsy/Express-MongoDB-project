import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    hash: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    name: {
        first: String,
        last: String,
    },
    image: String,
    dob: {
        type: Date,
        alias: 'dateOfBirth',
    },
    emails: [{
        email: String,
        primary: Boolean,
    }],
    phones: [{
        phone: String,
        primary: Boolean,
    }],
    sex: {
        type: String,
        enum: ['male', 'female'],
        example: 'male',
    },
    social: {
        facebook: String,
        linkedIn: String,
        skype: String,
        telegram: String,
    },
    pupils: [{
        person: mongoose.Schema.Types.ObjectId,
    }],
    description: String,
    started: Date,
    created: Date,
}, {
    id: false,

});

export default mongoose.model('parents', schema);