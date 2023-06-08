import Link from 'next/link';
import React from 'react'
import {formatDateToRelative} from "../utils/dateUtil";
import {GoFileSubmodule} from "react-icons/go"
const Card = ({contents, type, totalNotifications}) => {
 
  if(type == "students"){
    const {icon, title,lectures, tutorials} = contents;
    return (
      <div className='first:bg-main-130 even:bg-ash-130 last-of-type:bg-main-130 rounded-md flex flex-col text-slate-900 w-[40%] min-h-[42vh] pl-3 pt-2'>
         <div className="icon mt-2 mb-6 w-[16%] h-[22%] bg-white shadow-md rounded-full text-center text-3xl text-main-400 flex items-center justify-center">
            <GoFileSubmodule />
         </div>
         <div className="title  text-xl font-semibold">
             <p>Total  {title}</p>
         </div>
         <div className="title mt-2">
             <p>Today`s lectures {lectures? lectures:0}</p>
         </div>
         <div className="title mt-1 ">
             <p>Today`s tutorial {tutorials != null || tutorials != ""?tutorials : 0 }</p>
         </div>
      </div>
    )
  }
  else{
    const {from,time,} = contents
    let relativeTime = formatDateToRelative(time);
    return (
      <div className='first:bg-main-130 even:bg-ash-130 last-of-type:bg-main-130 rounded-md flex flex-col text-slate-900 w-[40%] min-h-[42vh] pl-3 pt-2'>
         <div className="icon mt-2 mb-6 w-[16%] h-[22%] bg-white shadow-md rounded-full text-center text-3xl text-main-400 flex items-center justify-center">
            <GoFileSubmodule />
         </div>
         <div className="title  text-xl font-semibold flex gap-4">
             <p>Notifications: </p>
             <span>{totalNotifications? totalNotifications:0}</span>
         </div>
         <div className="title mt-2">
             <p>Last notification: {relativeTime} </p>
         </div>
         <div className="title mt-1 ">
             <p>From: {from}</p>
         </div>

         <div className="btn-view-more mt-8 bg-transparent underline w-[30%]">
            <Link href="lecturer/notifications">View more</Link>
         </div>
      </div>
    )
  }
  
 
}

Card.defaultProps = {
   contents: {
    icon: <GoFileSubmodule/>,
    title: "Modules 6",
    lectures: "3",
    tutorials: "2"
   }
}
export default Card