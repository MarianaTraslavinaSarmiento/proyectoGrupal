import { Schema, model } from "mongoose";

const shopSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image_url: {
        type: String,
        require: true
    },
    video_url: {
        type: String,
        require: false
    }
}, {
    timestamps: true
})

export default model('Shop', shopSchema)