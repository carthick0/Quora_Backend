import User from "../models/user.model.js";


class userRepository{
    async createUser(userData){
        try{
            const user= await User.create({
               userName:userData.userName,
               email:userData.email,
               bio:(userData.bio)?userData.bio:"Hello"
            });
            return user;
        }
        catch(error){
            throw error;
        } 
    }

    async getUser(id){
        try {
            const user=await User.findById(id);
            return user;
        } catch (error) {
            
        }
    }

    async updateUser(userId,updateData){
        try {
            const user = await User.findByIdAndUpdate(userId,
                {$set:updateData},
                {new:true, runValidators:true}
            )
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

export default userRepository