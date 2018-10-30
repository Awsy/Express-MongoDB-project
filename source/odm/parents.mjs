import mongoose from 'mongoose';
import dg from 'debug';

const debug = dg('schema:parents');

const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
            index:    true,
        },
        name: {
            first: {
                type:     String,
                validate: {
                    validator: (v) => {
                        if (v.length >= 2) {
                            return true;
                        }

                        return false;
                    },
                    message: (arg) => `${arg.value} is not a value`,
                },
            },
            last: {
                type: String,

                validate: {
                    validator: (v) => {
                        if (v.length >= 3) {
                            return true;
                        }

                        return false;
                    },
                    message: (ar) => `${ar.value} is not a value`,
                },
            },
        },
        image: {
            type:     String,
            required: true,
        },
        dob: {
            type:  Date,
            alias: 'dateOfBirth',
        },
        emails: [
            {
                email: {
                    type:     String,
                    validate: {
                        validator: (mail) => /(^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/i.test(
                            mail,
                        ),
                        message: (arg) => `${arg.value} is not a value`,
                    },
                },
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone: {
                    type:     String,
                    validate: {
                        validator: (phone) => /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i.test(phone),
                        message:   (arg) => `${arg.value} is not a value`,
                    },
                },
                primary: Boolean,
            },
        ],
        sex: {
            type: String,
            enum: [ 'm', 'f' ],
        },
        social: {
            facebook: String,
            linkedIn: String,
            skype:    String,
            telegram: String,
        },
        pupils: [
            {
                person: {
                    type:     mongoose.Schema.Types.ObjectId,
                    required: true,
                },
            },
        ],
        description: {
            type:      String,
            minLength: 10,
        },
        started: Date,
        created: Date,
    },
    {
        id: false,
    },
);

schema.pre('findOne', function() {
    debug('findOne for parents is triggered');
});

export default mongoose.model('parents', schema);

//(aws)/i.test(v), this has to be in the name validation
