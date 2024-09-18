import { Schema, model } from "mongoose";

const voucherSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    },
    type: {
        type: String,
        enum: ['discount_product', 'discount_all', 'discount_shop', 'discount_workshop', "discount_all_workshops"],
        require: true
    },
    discount: {
        type: Number,
        require: true
    },
    discount_product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        require: false
    },
    discount_shop: {
        type: Schema.Types.ObjectId,
        ref: "Shop",
        require: false
    },
    discount_workshop: {
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        require: false
    },
    expiry_date: {
        type: Date,
        require: true
    },
    user_id: {
        type: String,
        ref: "User",
        require: false
    }
}, {
    timestamps: true
})

export default model('Voucher', voucherSchema)