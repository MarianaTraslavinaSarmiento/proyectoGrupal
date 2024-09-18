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
    redeemed: {
        value: {
            type: Boolean,
            require: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true
        }
    },
    expired: {
        value: {
            type: Boolean,
            require: true
        },
        date: {
            type: Date,
            require: true
        }
    }
}, {
    timestamps: true
})

export default model('Voucher', voucherSchema)