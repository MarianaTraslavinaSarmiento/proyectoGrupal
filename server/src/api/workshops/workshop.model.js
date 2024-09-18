import { Schema, model } from "mongoose";

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
    artisan_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export default model('Workshop', workshopSchema)