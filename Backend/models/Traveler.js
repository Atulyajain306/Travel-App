import mongoose from "mongoose";
const userschema=mongoose.Schema({
    destination:{
        type:String,
        required:true
    },
    duration:{
       type:String,
       required:true 
    },
   persons:{
    type:String,
    required:true
   }  
},{
    timestamps:true
});

const Traveler=mongoose.model("Traveler",userschema);
export default Traveler