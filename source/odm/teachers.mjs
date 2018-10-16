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
    }, ],
    phones: [{
        phone: String,
        primary: Boolean,
    }, ],
    sex: String,
    social: {
        facebook: String,
        linkedIn: String,
        skype: String,
        telegram: String,
    },
    subjects: [{
        subject: mongoose.Schema.Types.ObjectId,
    }],
    description: String,
    started: Date,
    created: Date,
}, {
    id: false,

});

// schema.virtual('fullName').get(function () {
//     return `${this.name.first} ${this.name.last}`;
// });

export default mongoose.model('teachers', schema);