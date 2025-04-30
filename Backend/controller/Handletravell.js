import Traveler from "../models/Traveler.js";

const Handletravell = async(req,res) => {
      try{
           let {people,duration,destination}=req.body;        
          const newmessage= new Traveler({
             duration,
             destination,
             persons:people
          });
         await newmessage.save(); 
        res.status(200).json(newmessage); 
      }catch(error)
      {
        console.log(error);
      }
}

export default Handletravell