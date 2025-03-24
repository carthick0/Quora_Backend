import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,   // User ID
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    body: {
        type: String,
        required: [true, "Body is required"]
    },
    topics: {
        type: [mongoose.Schema.Types.ObjectId],  
        ref: "Topic"
    },
    likes: [{                                  // Array of user IDs who liked the question
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, 
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Question = mongoose.model("Question", questionSchema);
export default Question;
