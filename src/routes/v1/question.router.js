import express from "express"

import { questionControler } from "../../controllers/index.js"
import { keyboard } from "telegraf/markup";

const questionRouter=express.Router();

questionRouter.post('/',questionControler.addQuestion);

questionRouter.get('/search',questionControler.getQuestion)

questionRouter.post('/:questionId',questionControler.ansQuestion);


questionRouter.put('/answer/:answerId',questionControler.updateAnswer);


questionRouter.post('/answer/:answerId/comments',questionControler.commentAnswer);

questionRouter.post('/comment/:commentId',questionControler.commentComment);





questionRouter.post('/:id/:targetUserId',questionControler.followUser);


questionRouter.post('/',questionControler.createTopic);


questionRouter.get('/',questionControler.getTopics);


export default questionRouter;
