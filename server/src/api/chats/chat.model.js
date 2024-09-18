const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
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

const Chat = mongoose.mongoose.model('Chat', chatSchema);

module.exports = Chat;