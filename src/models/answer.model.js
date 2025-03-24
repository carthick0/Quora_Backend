import mongoose from "mongoose";

const ansSchema = mongoose.Schema({
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: [true, "Question ID is required"]
    },
    text: {
        type: String,
        required: [true, "Answer text is required"]
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: [{                                   // Array of user IDs who liked the answer
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Answer = mongoose.model("Answer", ansSchema);
export default Answer;
