const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        unique: true
    },
    genre: {
        type: String,
        enum : ['M','F'],
        required: false
    },
    born_date: {
        type: Schema.Types.Date,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    profile_pic_url: {
        type: String,
        required: true
    },
    favorites: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        required: false
    },
    account_id: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

const User = model('User', userSchema)

module.exports = User