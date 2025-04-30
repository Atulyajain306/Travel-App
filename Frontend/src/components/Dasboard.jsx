import React from 'react'
import { useEffect,useState } from 'react';
import { FiHome } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { GiBackwardTime } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { LiaHikingSolid } from "react-icons/lia";
import { SlNotebook } from "react-icons/sl";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import '../App.css'
const Dasboard = () => {
    const images=["https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1681530700755-e8079add58ef?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1673002094407-a72547fa791a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1664303562576-e3d057868fc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1664303562576-e3d057868fc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1723126906550-59dbe6464259?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1684439061252-cb6632acb8ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1738580426480-6913e44b80c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1565520195621-e1613c326d95?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
      const [picture, setpicture] = useState(0);
    const q= JSON.parse(localStorage.getItem('Travel'));
     useEffect(() => {
      const interval=setInterval(()=>{
        const randomIndex = Math.floor(Math.random() * images.length);   
           setpicture(randomIndex);
      },5000) 
           
     return ()=> clearInterval(interval);
     }, [images.length])
     
     
     
  return (
    <div className='w-[393px] h-[759px] overflow-y-scroll no-scrollbar overflow-x-hidden'>
         <div className='flex justify-between'>
      <div className='w-[162px]  h-[50px] flex flex-col top-[51px] text-white left-[18px] relative'> <div className='text-2xl font-bold'>Hello Chhavi!</div> <div className='text-base font-normal'>Ready for the trip?</div> </div>
      <div className='w-[50px] h-[50px] top-[53px] text-white right-6 bg-orange-500 rounded-full text-center relative text-3xl pt-1 pr-1 '>C</div> </div>
       <div className='text-white relative top-[110px] h-[24px] left-[18px] font-medium text-xl'>Your Upcoming Trip</div> 
      <div className='flex justify-between'>
       
 <div className='text-white font-medium text-4xl  relative top-36 left-[32px] z-10'> {q.destination.toUpperCase()}</div>

   <div className='text-white font-medium cursor-pointer text-4xl relative top-36 right-5 z-10'><GoArrowUpRight size={30}/></div></div> 
   <div className='text-white font-medium text-sm  relative top-36 left-[40px] z-10'>
      {JourneyDuration()}
   </div>
       <div className='pt-10 left-[18px] top-10 relative '><img className='w-[360px] h-[350px] rounded-3xl border border-gray-500 opacity-85 backdrop-blur-2xl' src={images[picture]} alt="" /></div>
       <div className='flex gap-x-20 relative bottom-4'>
       <div className=' z-30  bg-gray-700 font-medium flex p-[18px] left-9 top-2 cursor-pointer  rounded-full w-4 h-4 items-center relative'><div><AiOutlineClockCircle className='z-20 w-6 h-6 bottom-0 right-3 text-[#d2fb4d] rounded-full relative' size={20} /></div>  <div className='text-white text-xs w-18'>{q.duration} <div className='text-[#a2a1a1]'>Duration</div> </div></div>
       <div className=' z-30  bg-gray-700 font-medium flex p-[18px] left-9 top-2 cursor-pointer  rounded-full w-4 h-4 items-center relative'><div><MdOutlinePeopleOutline className='z-20 w-6 h-6 bottom-0 right-3 text-[#d2fb4d] rounded-full relative' size={20} /></div>  <div className='text-white text-xs w-18'>{q.persons} <div className='text-[#a2a1a1]'>Group_Size</div> </div></div>
       <div className=' z-30  bg-gray-700 font-medium flex p-[18px] left-9 top-2 cursor-pointer  rounded-full w-4 h-4 items-center relative'><div><SlNotebook className='z-20 w-7 h-5  bottom-0 right-3 text-[#d2fb4d] rounded-full relative' size={20} /></div>  <div className='text-white text-xs w-18'> 14 <div className='text-[#a2a1a1]'>Activities</div> </div></div>
       </div>   
    <div className='w-[355px] h-[124px] bg-blue-700 rounded-2xl overflow-hidden relative top-[30px] left-[18px]' > <div className='w-[335px] h-[104px] bg-blue-800 left-2  top-3 relative rounded-2xl '>
        <div className='flex justify-between'>
        <div className='text-white left-2 relative font-medium text-xl'>Flight Details</div> <div className='underline text-sm text-[#D1F462] relative right-2 cursor-pointer font-medium'>See all</div></div>
         <div className='text-white left-2 relative text-sm'>{currentDate()},10:30am</div>
         <div className='text-white font-medium flex gap-x-2 left-5 px-10 top-3 relative'>DEL <div className='relative top-1  '>
         <IoArrowForwardOutline />  </div> <div className='text-white font-medium   relative'>NRT</div> </div> 
          <div className='flex gap-x-4 w-full relative left-3'>
        <div className='text-white text-xs w-20 px-3 top-1 relative'> Delhi,India</div>
        <div className='text-white text-xs px-3 top-1 relative'>{q.destination}</div>
        <img className='relative w-96 h-50 bottom-[83px] right-16 size-50' src="/Plane (1).png" alt="" />
         </div>  
         </div> </div>
       <div className='flex justify-between'><div className='text-white relative top-[74px] font-medium text-2xl left-[18px]'>Accomodation</div> <div className='underline text-sm text-[#D1F462] relative right-2 top-20 cursor-pointer font-medium'>See all</div> </div>
     <div className='flex gap-x-4 w-[400px] h-[350px] overflow-x-scroll mb-10 no-scrollbar'>
        <div className='w-[218px] h-[239px] rounded-t-2xl left-[28px] relative top-[90px] bg-[#4D4D4D] mb-16 rounded-b-2xl'><img src="/shinagawa.png" className='w-[218px] h-[124px] rounded-t-2xl' alt="" /> <div className=' text-[#F5F5F5] relative left-[8px] top-1 font-medium '>Shinagawa Prince Hotel</div> <div className='relative left-[8px] top-2 text-sm text-[#F5F5F5] gap-x-1 font-medium flex '>Check-in: <div className='font-normal '>{ currentDate()},11:15 pm</div></div>
        <div className='relative left-[8px] top-2 text-sm text-[#F5F5F5] gap-x-1 font-medium flex'>Check-out: <div className='font-normal'>{daysLater( new Date(),"2 Days")},11:15 am</div></div> <div className='relative top-4 left-3 text-sm text-[#F5F5F5] font-medium'>2 Nights</div> <div className='text-[#8afa40] items-center flex gap-x-1 relative left-24 bottom-1 font-semibold text-sm'> <GiConfirmed /> Confirmed</div> </div>
        <div className='w-[218px] h-[239px] rounded-t-2xl left-[28px] relative top-[90px] bg-[#4D4D4D] mb-16 rounded-b-2xl'><img src="/mercure.png" className='w-[218px] h-[124px] rounded-t-2xl' alt="" /> <div className=' text-[#F5F5F5] relative left-[8px] top-1 font-medium '>Mercure Tokyo Hotel</div> <div className='relative left-[8px] top-2 text-sm text-[#F5F5F5] gap-x-1 font-medium flex '>Check-in: <div className='font-normal '>{ daysLater(new Date(),"2 Days")}, 11:15 pm</div></div>
        <div className='relative left-[8px] top-2 text-sm text-[#F5F5F5] gap-x-1 font-medium flex'>Check-out: <div className='font-normal'>{daysLater( new Date(), "4 Days")},11:15 am</div></div> <div className='relative top-4 left-3 text-sm text-[#F5F5F5] font-medium'>2 Nights</div><div className='text-[#fa5340] items-center flex gap-x-1 relative left-24 bottom-1 font-semibold text-sm'> <GiBackwardTime size={20} /> Pending</div> </div>
      </div>
  <div className='flex justify-between'><div className='text-white relative bottom-[7px] font-medium text-2xl left-[18px]'>Activities</div> <div className='underline text-sm text-[#D1F462] relative right-2  cursor-pointer font-medium'>See all</div> </div>
  <div className='w-[353px]  h-[114px] rounded-lg relative left-[18px] mb-4 bg-[#333333]' >
     <div className='flex gap-x-5'>
    <div className='text-black bg-[#D3F462] rounded-lg relative text-sm w-fit px-2 py-1 font-medium top-2 left-[10px]'>Day Plan</div>
    <div className='text-[#D3F462] top-2 relative text-sm px-1 py-1 rounded-lg left-[5px] bg-[#292929] border border-[#D3F462]'>14 Activities</div></div>
    <div className='flex gap-x-2 h-[100px] overflow-x-scroll no-scrollbar'>
  <div className='w-[73px] h-[44px] overflow-hidden rounded-lg border border-[#D3F462] relative left-[9px] top-6'> <div className='relative -rotate-90 pl-3 text-base items-center right-6 font-medium bg-[#D3F462]'>{Currentmonth()}</div><div>{Daydate(0)}</div> </div>
  <div className='w-[53px] h-[44px] overflow-hidden rounded-lg bg-[#292929]  relative left-[10px] top-6'><div className='relative right-5 top-6 text-[#808080]'>{Daydate(1)}</div> </div>
  <div className='w-[53px] h-[44px] overflow-hidden rounded-lg bg-[#292929]  relative left-[10px] top-6'><div className='relative right-5 top-6 text-[#808080]'>{Daydate(2)}</div> </div>
  <div className='w-[53px] h-[44px] overflow-hidden rounded-lg bg-[#292929]  relative left-[10px] top-6'><div className='relative right-5 top-6 text-[#808080]'>{Daydate(3)}</div> </div>
  <div className='w-[53px] h-[44px] overflow-hidden rounded-lg bg-[#292929]  relative left-[10px] top-6'><div className='relative right-5 top-6 text-[#808080]'>{Daydate(4)}</div> </div>
  <div className='w-[53px] h-[44px] overflow-hidden rounded-lg bg-[#292929]  relative left-[10px] top-6'><div className='relative right-5 top-6 text-[#808080]'>{Daydate(5)}</div> </div>
  </div>
  </div>
     <div className='flex gap-x-3'>
     <div className='relative left-[18px] top-2 bg-[#D3F462] w-fit px-2 font-medium mb-10 text-[#0B0809] rounded-3xl'>Day 1 {currentDate()}</div>
     <div className='bg-none text-[#D3F462] font-medium top-2 flex content-center relative left-[28px] '> <LiaHikingSolid className='' size={20} /> 3 Activities</div></div>
     <div className='w-[373px] left-[9px] mb-5 relative h-[415px] rounded-xl border border-[#D3F462]'>
       <div className='w-[355px] flex left-[7px] mb-5 top-[5px] bg-[#4D4D4D] rounded-lg relative h-[120px]'><img className='w-[120px] h-[120px] rounded-l-lg' src="/Temple.png" alt="" /> <div> <div className='text-sm relative top-4 left-[10px] font-normal text-[#F5F5F5] '>Senso-ji Temple & Nakamise Shopping Street Senso-ji</div> <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Timing: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>8:15 am Morning</div> </div>
     <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Duration: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>3 hours</div> </div>
     <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Pick up: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>From Hotel</div> </div>
      </div> </div>
      <div className='w-[355px] flex left-[7px] mb-5 top-[5px] bg-[#4D4D4D] rounded-lg relative h-[120px]'><img className='w-[120px] h-[120px] rounded-l-lg' src="/Tower.png" alt="" /> <div> <div className='text-sm relative top-4 left-[10px] font-normal text-[#F5F5F5] '>Tokyo Sky Tree</div> <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Timing: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>1:00 pm Afteroon</div> </div>
     <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Duration: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>3 hours</div> </div>
     <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Pick up: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>From Nakamise Street</div> </div>
      </div> </div>
      <div className='w-[355px] flex left-[7px] mb-5 top-[5px] bg-[#4D4D4D] rounded-lg relative h-[120px]'><img className='w-[120px] h-[120px] rounded-l-lg' src="/wearing.png" alt="" /> <div> <div className='text-sm relative left-[10px] top-4 font-normal text-[#F5F5F5] '>Kimono Wearing</div> <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Timing: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>Anytime before 8:00pm </div> </div>
     <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Duration: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>1-2 hours</div> </div>
     <div className='text-xs relative left-[10px] font-normal flex top-6 text-[#F5F5F5]'>Pick up: <div className='text-xs relative left-[3px] font-light text-[#F5F5F5]'>From Hotel</div> </div>
      </div> </div>
      
       </div>
<div className='w-[393px] h-[58px] flex gap-x-9 fixed bg-[#1D1F24] top-[760px] p-[12px] '> 
       <div className='text-white relative left-2 bottom-2'>
  <div className='hover:cursor-pointer items-center bg-[#d2f46285] rounded-full text-[#d2fb4d] p-2'>
    <FiHome className='font-bold' size={26} />
  </div>
</div>

<div className='text-white relative left-2 bottom-2'>
  <div className='hover:cursor-pointer items-center hover:bg-[#d2f46285] rounded-full hover:text-[#d2fb4d] p-2'>
    <GoSearch className='font-bold' size={26} />
  </div>
</div>

<div className='text-white relative left-2 bottom-2'>
  <div className='hover:cursor-pointer items-center  rounded-full p-2'>
    <FaPlus className='font-bold text-[#d2fb4d]' size={26} />
  </div>
</div>

<div className='text-white relative left-2 bottom-2'>
  <div className='hover:cursor-pointer items-center hover:bg-[#d2f46285] hover:text-[#d2fb4d] rounded-full p-2'>
    <IoIosHeartEmpty className='font-bold' size={26} />
  </div>
</div>

<div className='text-white relative left-2 bottom-2'>
  <div className='hover:cursor-pointer items-center hover:bg-[#d2f46285] hover:text-[#d2fb4d] rounded-full p-2'>
    <IoMdPerson className='font-bold' size={26} />
  </div>
</div>

          </div> 
    </div>
  )
}
const JourneyDuration=()=>{
    const newDate= new Date();
    const date= new Date();
    const q=JSON.parse(localStorage.getItem("Travel")); 
   const durationString=q.duration;
    const [amount, unit] = durationString.split(' ');
if (unit.includes('Month')) {
  date.setMonth(date.getMonth() + parseInt(amount));
} else if (unit.includes('Days')) {
  date.setDate(date.getDate() + parseInt(amount)); }
  else if (unit.includes('year')) {
    date.setFullYear(date.getFullYear() + parseInt(amount));
  }
   const newday=date.getDate();
   const newmonth=date.getMonth();
   const newyear=date.getFullYear();
   const day = newDate.getDate(); 
   const month = newDate.getMonth();
   const  year = newDate.getFullYear();   
      return (<>
       {day}.{month}.{year}-{newday}.{newmonth}.{newyear}
      </>)
}
const currentDate=()=>{
      const todaydate= new Date();
      const date=todaydate.getDate();
      const month=todaydate.getMonth();
      const year=todaydate.getFullYear();
    return (<>
     {date}.{month}.{year} 
    </>)
}

const daysLater=(date,newdate)=>{
 const durationString=newdate;
  const [amount, unit] = durationString.split(' ');
if (unit.includes('Month')) {
date.setMonth(date.getMonth() + parseInt(amount));
} else if (unit.includes('Days')) {
date.setDate(date.getDate() + parseInt(amount)); }
else if (unit.includes('year')) {
  date.setFullYear(date.getFullYear() + parseInt(amount));
}
 const newday=date.getDate();
 const newmonth=date.getMonth();
 const newyear=date.getFullYear(); 
    return <>
    {newday}.{newmonth}.{newyear}
    </> 
}
const Currentmonth=()=>{
     const date=new Date();
     const month=date.toLocaleString('default', { month: 'short' });;
     return <>{month}</>
}
const Daydate=(daysToAdd)=>{
    const date= new Date();
    date.setDate(date.getDate() + daysToAdd);
    const day=date.toLocaleDateString("default",{ weekday: 'short'});
    const num=date.getDate();
    return <div className={`flex flex-col relative bottom-6 text-sm ${ daysToAdd !==0 ? "left-9" : "left-7" } `}>
     <div className={`font-normal ${ daysToAdd !==0 ? "text-[#808080] relative right-1" :"text-white"} `}>{day.toUpperCase()}</div> 
    <div className={`font-semibold ${ daysToAdd !==0 ?"text-[#808080] relative left-1" :"text-white"} left-1 relative`} >{num}</div>
    </div>

}
export default Dasboard