const { Schema, model } = require("mongoose");

const purchaseSchema = new Schema({
    products: {
        type: Array,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        enum: ['usd', 'eur', 'cop'],
        required: true
    },
    stripeSessionId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'rejected'],
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Purchase', purchaseSchema);
