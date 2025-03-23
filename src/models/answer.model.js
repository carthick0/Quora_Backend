import { text } from "body-parser";
import mongoose from "mongoose";

const ansSchema=mongoose.Schema({
    question_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question",
        required:[true]
    },
    text:{
        type:String,
        required:[true]
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },


},
{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}});


const Answer=mongoose.model("Answer",ansSchema);
export default Answer;