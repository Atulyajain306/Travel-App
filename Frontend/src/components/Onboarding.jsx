import React from 'react'
import { useState } from 'react';
import { GrLocation } from "react-icons/gr";
import { FaPerson } from "react-icons/fa6";
import toast from 'react-hot-toast';
import { GiThreeFriends } from "react-icons/gi";
import { BiMaleFemale } from "react-icons/bi";
import { MdFamilyRestroom } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import HandleTravel from '../hooks/HandleTravel.js';
const Onboarding = () => {
      const [people, setpeople] = useState("");
      const [color, setcolor] = useState("");
      const [duration, setduration] = useState("");
      const [destination, setdestination] = useState("");
       const {travelled}=HandleTravel();
      const Handlecolor=(type)=>{
          setpeople(type);
          setcolor(type);
      }
   const Submit=()=>{
        if(!people || !duration || !destination ){
            toast.error("Enter all Journey Details");
            return ;
        }
          travelled({people,duration,destination});
         console.log(people,duration,destination);
         toast.success("Travel Details Added"); 
   }
  return (
     <div>
    <div className='w-[353px] h-[449.6666564941406px] relative top-[79px] left-[25px] gap-[36px] '>
    <div className='w-[353px] h-[54px] gap-[2px] font-bold flex flex-col relative text-2xl text-white'>Plan Your Journey, Your Way! <div className='font-thin text-base relative '>Let's create your personalised travel experience </div> </div>

<div className='w-[353px] h-[359.6666564941406px] relative gap-[28px] top-[30px] text-white '>
       <div className='w-[353x] h-[76.66666412353516px] relative  gap-10'> 
        <div className='text-xl font-normal my-2'> Where would you like to go? </div>
        <div className="relative w-80">
  <GrLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
       <input
    type="text"
    placeholder="Enter Destination"
    className="w-full text-white placeholder:text-white font-normal px-10 py-3 bg-[#333333] rounded-md" value={destination} onChange={(e)=>{setdestination(e.target.value)}}
  />
             </div> 
         </div> 
         <div className='w-[353x] h-[76.66666412353516px] relative top-10  gap-10'> 
        <div className='text-xl font-normal my-2'> How long will you stay? </div>
        <div className="relative w-80">
  <IoCalendarClearOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
  <select className="w-full text-white font-normal px-10 pr-16 py-3 bg-[#333333] rounded-md appearance-none" value={duration} onChange={(e)=>{setduration(e.target.value)}}>
    <option value="" className="text-white">Select Duration</option>
    <option value="2 Days">2 Days</option>
    <option value="4 Days">4 Days</option>
    <option value="7 Days">7 Days</option>
    <option value="15 Days">15 Days</option>
    <option value="1 Month">1 Month</option> 
  </select>
  <IoChevronDownOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
</div>
   
   <div className='w-[353x] h-[76.66666412353516px] relative top-5  gap-10'> 
        <div className='text-xl font-normal my-2'> Who are you traveling with? </div>
       <div className='flex gap-x-2 my-2'>  
  <button className={` ${color ==="Solo" ? "bg-blue-600" :"bg-[#333333]"} w-40 cursor-pointer text-center px-5 justify-center items-center gap-x-1 py-4 flex rounded-md`}  onClick={()=>{Handlecolor("Solo")}}> 
    <FaPerson  size={30} /> Solo </button>
    <button className={` ${color ==="Couple" ? "bg-blue-600" :"bg-[#333333]"} w-40 cursor-pointer text-center px-5 justify-center items-center gap-x-1 py-4 flex rounded-md`}  onClick={()=>{Handlecolor("Couple")}}> 
    <BiMaleFemale  size={30} /> Couple </button> </div>
      <div className='flex gap-2 '>
      <button className={` ${color ==="Family" ? "bg-blue-600" :"bg-[#333333]"} w-40 cursor-pointer text-center px-5 justify-center items-center gap-x-1 py-4 flex rounded-md`}  onClick={()=>{Handlecolor("Family")}}> 
      <MdFamilyRestroom size={30} /> Family </button>  
    <button className={` ${color ==="Friends" ? "bg-blue-600" :"bg-[#333333]"} w-40 cursor-pointer text-center px-5 justify-center items-center gap-x-1 py-4 flex rounded-md`}  onClick={()=>{Handlecolor("Friends")}}> 
    <GiThreeFriends size={30} /> Friends </button> 
        </div>
  <button onClick={Submit} className='bg-[#3643FB] py-2 hover:cursor-pointer px-10 relative overflow-hidden top-[150px] hover:bg-blue-600 w-full rounded-md text-center' id='next'>Continue</button>        
         </div>
   
      </div>
              
    </div>
    </div></div>
  )
}

export default Onboarding