import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "parentModel",
        required: true
    },
    parentModel: {
        type: String,
        enum: ["Answer", "Comment"],
        required: true
    },
    text: {
        type: String,
        required: [true, "Comment text is required"]
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

// ✅ Check if the model is already compiled to avoid OverwriteModelError
const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
