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
    target_audience_comment: {
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
    image_bar_code: {
        type: String,
        required: true
    },
    store_in_charge: {
        type: Schema.Types.ObjectId,
        ref: 'shops',
        required: true
    },
    trending: {
        type: Boolean,
        required: false
    },
    trending_image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Workshop = model('Workshop', workshopSchema)

module.exports = Workshop