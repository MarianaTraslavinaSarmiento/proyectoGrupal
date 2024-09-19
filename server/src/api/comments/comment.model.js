const { Schema, model } = require("mongoose")

const commentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    screenshot_url: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment