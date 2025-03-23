import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,    // Reference to Answer or Comment
        refPath: "parentModel",                  // Dynamic reference
        required: true
    },
    parentModel: {                               // Specify the model type dynamically
        type: String,
        enum: ["Answer", "Comment"],
        required: true
    },
    text: {
        type: String,
        required: [true, "Comment text is required"]
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,    // Reference to User
        ref: "User",
        required: true
    }
}, 
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });  // Timestamps

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
