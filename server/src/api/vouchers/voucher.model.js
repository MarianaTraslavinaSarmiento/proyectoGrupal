const mongoose = require("mongoose")

const voucherSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['discount_product', 'discount_all', 'discount_shop', 'discount_workshop', "discount_all_workshops"],
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    discount_product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: false
    },
    discount_shop: {
        type: Schema.Types.ObjectId,
        ref: "Shop",
        required: false
    },
    discount_workshop: {
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        required: false
    },
    expiry_date: {
        type: Date,
        required: true
    },
    user_id: {
        type: String,
        ref: "User",
        required: false
    }
}, {
    timestamps: true
})

const Voucher = mongoose.model('Voucher', voucherSchema)

module.exports = Voucher