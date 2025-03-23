import express from "express";
import { userControler } from '../../controllers/index.js';  // Ensure .js extension for ES module

const userRouter = express.Router();

// Route for pingCheck
userRouter.get('/ping',userControler.pingCheck);

userRouter.get('/:id',userControler.getUser);

userRouter.post('/',userControler.createUser);

userRouter.put('/:id',userControler.updateUser);



export default userRouter;
