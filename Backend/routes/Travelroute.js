import express from "express"
import Handletravell from "../controller/Handletravell.js";

const router=express.Router();
router.post("/traveller",Handletravell);
export default router