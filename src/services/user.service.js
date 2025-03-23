class userService{
    constructor(userRepository){
        this.userRepository=userRepository
    }

    async createUser(userData){
        try {
            const user=await this.userRepository.createUser(userData);
            return user
        } catch (error) {
            throw error
        }
    }
    async getUser(userId){
        try {
            const user=await this.userRepository.getUser(userId);
            return user;
        } catch (error) {
            throw error
        }
    }
    async updateUser(userId,updatedData){
        try {
            const updatedUser=await this.userRepository.updateUser(userId,updatedData);
            return updatedUser;
        } catch (error) {
            throw error
        }
    }
}

export default userService;
