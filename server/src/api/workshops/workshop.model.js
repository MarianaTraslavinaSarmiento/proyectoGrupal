const { Schema, model } = require("mongoose")

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    target_audience: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    date_start: {
        type: Date,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    modality: {
        type: String,
        required: true
    },
    materials: {
        type: String,
        required: true
    },
    video_url: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    trending: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Workshop = model('Workshop', workshopSchema)

module.exports = Workshop