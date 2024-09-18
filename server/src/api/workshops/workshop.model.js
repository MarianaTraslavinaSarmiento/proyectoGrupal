import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
    name: {
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
    target_audience: {
        value: {
            type: String,
            require: true
        },
        comment: {
            type: String,
            require: false
        },
    },
    duration: {
        type: String,
        require: true
    },
    date_start: {
        type: Date,
        require: true
    },
    schedule: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    modality: {
        type: String,
        require: true
    },
    materials: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export default model('Workshop', workshopSchema)