import express from "express";
import apiRouter from "./routes/index.js";
import { PORT } from "./config/server.config.js";
import bodyParser from "body-parser";
import connectDB from "./config/db.config.js";


const app=express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.use('/api',apiRouter)


app.listen(PORT,async()=>{
    console.log("Server Started at Port ",PORT);
    await connectDB();
    console.log("DB connected Successfully")
})

