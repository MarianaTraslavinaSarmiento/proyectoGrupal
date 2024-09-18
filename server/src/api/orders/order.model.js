import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: {
        type: [{
            product_id: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    stripe_charge_id: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true,
        enum: ['usd', 'eur', 'cop']
    },
    payment_status: {
        type: String,
        enum: ['succeeded', 'pending', 'failed'],
        required: true
    },
    stripe_customer_id: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

export default model('Order', orderSchema);