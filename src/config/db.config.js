import mongoose from "mongoose";

import { ATLAS_DB_URL,NODE_ENV } from "./server.config.js";

async function connectDB() {
    try {
        if (NODE_ENV=="dev"){
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;