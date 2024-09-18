import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    sender_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now 
    },
    chat_id: {
        type: Schema.Types.ObjectId,
        ref: 'Chat', 
        required: true
    },
    status: {
        type: String,
        enum: ['sent', 'delivered', 'read'],
        default: 'sent' 
    }
}, {
    timestamps: true 
});

export default model('Message', messageSchema);