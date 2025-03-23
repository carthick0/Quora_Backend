import express from "express";
// ✅ Correct Import
// ✅ Correct Import
import apiRouter from "./routes/index.js";


const app=express();


app.use('/api',apiRouter)


app.listen(3000,()=>{
    console.log("Server Started at Port ",3000);
})

