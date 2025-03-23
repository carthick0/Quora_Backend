// src/controllers/userController.js

import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository.js";
import userService from "../services/user.service.js";
import { message } from "telegraf/filters";


const UserService =new userService(new userRepository());


export function pingCheck(req, res) {
    return res.json({ message: 'Ping is alive' });
}

export async function createUser(req, res) {
    try {
        const newUser=await UserService.createUser(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully created new User",
            error:{},
            data:newUser
        });
    } catch (error) {
        console.log(error);
    }
}

export async function getUser(req, res) {
    try {
        const getUser=await UserService.getUser(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully fetched user",
            data:getUser
        })
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(req, res) {
    try{
        const userId=req.params.id;
        const updatedData=req.body;
        const updateUser=await UserService.updateUser(userId,updatedData);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully updated",
            data:updateUser
        })
    }
    catch(error){
        console.log(error);
    }
}
