const { Schema, model } = require("mongoose")

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

const Chat = model('Chat', chatSchema);

module.exports = Chat;