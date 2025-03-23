import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is must"]
    },
    body: {
        type: String,
        required: [true, "Body is must"]
    },
    topics: {
        type: [mongoose.Schema.Types.ObjectId],  // Array of Topic IDs
        ref: "Topic",  // Reference to Topic collection
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,   // User ID
        ref: "User",
        required: true
    }
}, 
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });  // Timestamps

const Question = mongoose.model("Question", questionSchema);
export default Question;
