const mongoose = require("mongoose")

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
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
    video_url: {
        type: String,
        required: false
    },
    artisan_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop