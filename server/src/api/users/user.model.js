import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: string,
        require: true
    },
    email: {
        type: string,
        require: true
    },
    phone: {
        prefix: {
            type: string,
            require: true,
        },
        number: {
            type: string,
            require: true
        }
    },
    genre: {
        type: string,
        enum : ['M','F'],
        require: true
    },
    born_date: {
        type: date,
        require: true
    },
    password: {
        type: string,
        require: true
    },
    profile_pic_url: {
        type: string,
        require: true
    },
    role: {
        type: string,
        enum : ['client','support'],
        require: true
    }
}, {
    timestamps: true
})

export default model('User', userSchema)