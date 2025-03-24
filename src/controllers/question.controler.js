import { StatusCodes } from "http-status-codes";
import questionRepository from "../repositories/question.repository.js";
import questionService from "../services/question.service.js";

const QuestionService = new questionService(new questionRepository);

export async function addQuestion(req, res) {
    try {
        const newQues = await QuestionService.addQuestion(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created Question",
            data: newQues
        });
    } catch (error) {
        console.error("Error in addQuestion controller:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to create question",
            error: error.message
        });
    }
}

export async function getQuestion(req, res) {
    const { text, tag } = req.query;

    try {
        const filterQues = await QuestionService.getQuestion(text, tag);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched questions",
            data: filterQues
        });
    } catch (error) {
        console.error("Error in getQuestion controller:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to fetch questions",
            error: error.message
        });
    }
}

export async function ansQuestion(req, res) {
    try {
        const { questionId } = req.params;
        const { answer, user_id } = req.body;

        const newAnswer = await QuestionService.ansQuestion(questionId, { answer, user_id });

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Answer posted successfully",
            data: newAnswer
        });
    } catch (error) {
        console.error("Error in ansQuestion controller:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to post answer",
            error: error.message
        });
    }
}

export async function updateAnswer(req, res) {
    try {
        const { answerId } = req.params;
        const { text } = req.body;

        const updatedAns = await QuestionService.updateAnswer(answerId, { text });

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Answer updated successfully",
            data: updatedAns
        });
    } catch (error) {
        console.error("Error in updateAnswer controller:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to update answer",
            error: error.message
        });
    }
}

export async function commentAnswer(req, res) {
    try {
        const { answerId } = req.params;
        const { userId, text } = req.body;

        const newComment = await QuestionService.commentAnswer(answerId, { userId, text });

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Comment added successfully",
            data: newComment
        });
    } catch (error) {
        console.error("Error in commentAnswer controller:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to add comment",
            error: error.message
        });
    }
}

export async function commentComment(req, res) {
    try {
        const { commentId } = req.params;
        const { userId, text } = req.body;

        const comment = await QuestionService.commentComment(commentId, { userId, text });

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Comment on comment added successfully",
            data: comment
        });
    } catch (error) {
        console.error("Error in commentComment controller:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Failed to add comment on comment",
            error: error.message
        });
    }
}

export function followUser(req, res) {
    // Placeholder function (if needed)
}

export function createTopic(req, res) {
    // Placeholder function (if needed)
}

export function getTopics(req, res) {
    // Placeholder function (if needed)
}
