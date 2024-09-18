import { Schema, model } from "mongoose";

const purchaseSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: true
    },
    order_date: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    total_amount: {
        type: Number,
        require: true
    },
    payment_method: {
        type: String,
        require: true
    },
    transaction_id: {
        type: String,
        require: true,
        unique: true
    },
    comment: {
        type: String,
        require: false
    }
},{
    timestamps: true
})

export default model('Purchase', purchaseSchema)