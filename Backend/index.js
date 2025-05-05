import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
import Travelroute from "./routes/Travelroute.js"
import dbconnection from "./db/db.js";
dotenv.config();
const app=express();
app.use(cors());
const __dirname=path.resolve();
const frontPath=path.join(__dirname,"../Frontend/dist");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT=process.env.PORT;
app.use("/api",Travelroute);

app.use(express.static(frontPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(frontPath, "index.html"));
});
app.listen(PORT,()=>{
    dbconnection();
    console.log("server Listening in 5000")
})