const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },
    phone: {
        prefix: {
            type: string,
            required: true,
        },
        number: {
            type: string,
            required: true
        }
    },
    genre: {
        type: string,
        enum : ['M','F'],
        required: true
    },
    born_date: {
        type: date,
        required: true
    },
    password: {
        type: string,
        required: true
    },
    profile_pic_url: {
        type: string,
        required: true
    },
    type: {
        type: string,
        enum : ['client','artisan','support'],
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User