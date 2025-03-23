import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Username cannot be empty"]
    },
    email:{
        type:String,
        required:[true,"Email cannot be empty"]
    },
    bio:{
        type:String,
    }
})
const User=mongoose.model('User',userSchema)
export default User;