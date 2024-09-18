import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    problem_message: {
        type: String,
        require: true
    },
    image_url: {
        type: String,
        require: false
    }
}, {
    timestamps: true
})

export default model('Comment', commentSchema)