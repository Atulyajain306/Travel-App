import { useAuthContext } from "../context/UseAuthcontext.jsx";

const HandleTravel = () => {
     const {setchange,change}=useAuthContext();
   const travelled=async({people,duration,destination})=>{
          try{
           let res=await fetch("https://travel-app-4pbq.onrender.com/api/traveller",{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify({people,duration,destination})
           });
           let data=await res.json();
           if(data.error){
              throw new Error(data.error)
           }
           console.log("data",data);
           localStorage.setItem("Travel",JSON.stringify(data));
              setchange(data._id);
           console.log("change",change);

          }
          catch(error)
          {
            console.log(error);
          }
   }
  return {travelled}
}

export default HandleTravel