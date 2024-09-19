const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true,
        validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    },
    phone: {
       type: string,
       required: true
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
        required: false
    },
    type: {
        type: string,
        enum : ['client','artisan','support'],
        required: true
    }
}, {
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User