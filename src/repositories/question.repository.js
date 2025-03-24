import Answer from "../models/answer.model.js";
import Comment from "../models/comment.model.js";
import Question from "../models/question.model.js";

class questionRepository {

    // ✅ Add Question
    async addQuestion(quesData) {
        try {
            const question = await Question.create({
                user_id: quesData.user_id,
                title: quesData.title || "Untitled",   
                body: quesData.body || "No description provided",
                topics: quesData.topics || []           
            });
            return question;
        } catch (error) {
            console.error("Error in addQuestion:", error.message);
            throw error;
        }
    }

    // ✅ Get Question with Filter
    async getQuestion(filter) {
        try {
            const search = await Question.find(filter);
            return search;
        } catch (error) {
            console.error("Error in getQuestion:", error.message);
            throw error;
        }
    }

    async ansQuestion(questionId, answerData) {
        try {
            // 1. Create the new answer document
            const newAnswer = new Answer({
                question_id: questionId,          
                user_id: answerData.user_id,      
                text: answerData.body              
            });

            await newAnswer.save();

            // 2. Push the answer ID into the question's answers array
            const updatedQuestion = await Question.findByIdAndUpdate(
                questionId,
                { $push: { answers: newAnswer._id } },  
                { new: true }
            );

            return updatedQuestion;
        } catch (error) {
            console.error("Error in ansQuestion repository:", error.message);
            throw error;
        }
    }

    async updateAnswer(answerId, newAns) {
        try {
            const ans = await Answer.findByIdAndUpdate(
                answerId,
                { text: newAns.text, updatedAt: new Date() },
                { new: true }
            );
            return ans;
        } catch (error) {
            throw error;
        }
    }

    async commentAnswer(answerId, commentData) {
        try {
            const newComment = new Comment({
                parentModel: "Answer",    
                parent_id: answerId,      
                user_id: commentData.user_id,
                text: commentData.text
            });

            const savedComment = await newComment.save();

            await Answer.findByIdAndUpdate(
                answerId,
                { $push: { comments: savedComment._id } },
                { new: true }
            );

            return savedComment;
        } catch (error) {
            console.error("Error in commentAnswer repository:", error.message);
            throw error;
        }
    }

    async commentComment(commentId, commentData) {
        try {
            const newComment = new Comment({
                parentModel: "Comment",
                parent_id: commentId,
                user_id: commentData.user_id,
                text: commentData.text
            });

            const savedComment = await newComment.save();

            await Comment.findByIdAndUpdate(
                commentId,
                { $push: { comments: savedComment._id } },
                { new: true }
            );
        } catch (error) {
            throw error;
        }
    }
}

export default questionRepository;
