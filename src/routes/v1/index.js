import express from "express"

import userRouter from "./user.router.js"

const v1Router=express.Router()

v1Router.use('/question',userRouter)

export default v1Router