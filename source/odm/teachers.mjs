import mongoose from 'mongoose';

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
                type: String,

                // validate: {
                //     validator: (v) => /(aws)/i.test(v),
                //     message:   (arg) => `${arg.value} is not a value`,
                // },
            },
            last: {
                type: String,

                // validate: {
                //     validator: (v) => {
                //         if (v.length >= 5) {
                //             return true;
                //         }

                //         return false;
                //     },
                //     message: (ar) => `${ar.value} is not a value`,
                // },
            },
        },
        image: String,
        dob:   {
            type:  Date,
            alias: 'dateOfBirth',
        },
        emails: [
            {
                email:   String,
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone:   String,
                primary: Boolean,
            },
        ],
        sex:    String,
        social: {
            facebook: String,
            linkedIn: String,
            skype:    String,
            telegram: String,
        },
        subjects: [
            {
                subject: mongoose.Schema.Types.ObjectId,
            },
        ],
        description: String,
        started:     Date,
        created:     Date,
    },
    {
        id: false,
    },
);

export default mongoose.model('teachers', schema);
