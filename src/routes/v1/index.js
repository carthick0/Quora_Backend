import express from "express"


import questionRouter from "./question.router.js"
import userRouter from "./user.router.js";


const v1Router=express.Router()

v1Router.use('/user',userRouter)
v1Router.use('/question',questionRouter);


export default v1Router