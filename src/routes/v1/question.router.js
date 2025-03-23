import express from "express"

import { questionControler } from "../../controllers"

const questionRouter=express.Router();

questionRouter.post('/',questionControler.addQuestion);

questionRouter.get('/search',questionControler.getQuestion)

questionRouter.post('/questionId',questionControler.ansQuestion);

questionRouter.put('/questionId',questionControler.updateAnswer);

questionRouter.post('/answerId',questionControler.commentAnswer);

questionRouter.post('/commentId',questionControler.commentComment);

questionRouter.post('/id',questionControler.likeQuestion);

questionRouter.post('/:id/:targetUserId',questionControler.followUser);


questionRouter.post('/',questionControler.createTopic);

questionRouter.get('/',questionControler.getTopics);


