import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import Travelroute from "./routes/Travelroute.js"
import dbconnection from "./db/db.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
const PORT=process.env.PORT;
app.use("/api",Travelroute);
app.listen(PORT,()=>{
    dbconnection();
    console.log("server Listening in 5000")
})