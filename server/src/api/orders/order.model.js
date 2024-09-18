import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
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
        require: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        require: true
    },
    price: {
        type: Number,
        require: true
    }
},{
    timestamps: true
})

export default model('Order', orderSchema)