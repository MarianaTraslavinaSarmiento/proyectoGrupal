import { Schema, model } from 'mongoose';

const chatSchema = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active' 
    },
}, {
    timestamps: true 
});

export default model('Chat', chatSchema);