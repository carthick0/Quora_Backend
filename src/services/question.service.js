class questionService {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }

    // ✅ Add Question (with default values)
    async addQuestion(userData) {
        try {
            

            const question = await this.questionRepository.addQuestion(userData);
            return question;
        } catch (error) {
            console.error("Error in addQuestion service:", error.message);
            throw error;
        }
    }

    // ✅ Get Question with Filters
    async getQuestion(user_text, user_tags) {
        try {
            const filter = {};

            if (user_text) {
                filter.$or = [
                    { title: { $regex: user_text, $options: "i" } },
                    { body: { $regex: user_text, $options: "i" } }
                ];
            }

            if (user_tags) {
                filter.topics = { $in: user_tags.split(',') };  
            }

            const questions = await this.questionRepository.getQuestion(filter);
            return questions;
        } catch (error) {
            console.error("Error in getQuestion service:", error.message);
            throw error;
        }
    } 
    async ansQuestion(questionId, answerData) {
        try {
            const answer = {
                user_id: answerData.user_id,
                body: answerData.answer,
                createdAt: new Date()
            };

            const postedAnswer = await this.questionRepository.ansQuestion(questionId, answer);
            return postedAnswer;
        } catch (error) {
            console.error("Error in ansQuestion service:", error.message);
            throw error;
        }
    }

    async updateAnswer(answerId,newAnswer){
        try {
            const ans=await this.questionRepository.updateAnswer(answerId,newAnswer);
            return ans;
        } catch (error) {
            throw error;
        }
    }
    async commentAnswer(answerId, commentData) {
        try {
            const res = await this.questionRepository.commentAnswer(answerId, commentData);
            return res;
        } catch (error) {
            console.error("Error in commentAnswer service:", error.message);
            throw error;
        }
    }
    async commentComment(commentId,commentData){
        try {
            const comment=await this.questionRepository.commentComment(commentId,commentData);
            return comment;
        } catch (error) {
            throw error;
        }
    }
    async like(type,id,userId){
        try {
            const result=await this.questionRepository.like(type,id,userId);
            return result
        } catch (error) {
            throw error
        }
    }
}

export default questionService;
