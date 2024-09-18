import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    problem_message: {
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

export default model('Comment', commentSchema)