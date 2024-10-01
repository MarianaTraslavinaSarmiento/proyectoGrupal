const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum : ['M','F', 'Other'],
        required: false
    },
    birth_date: {
        type: Schema.Types.Date,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    profile_pic: {
        type: Object,
        required: false,
        url: String,
        hash: String,
        public_id: String
    },
    favorites: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        required: false
    },
    account_id: {
        type: String
    },
    workshops_subscribed: [{
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: false
    }]
}, {
    timestamps: true,
    versionKey: false
})

const User = model('User', userSchema)

module.exports = User