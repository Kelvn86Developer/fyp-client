import React from 'react'
import Link from 'next/link';

const SideNav = ({title}) => {
  return (
    <div className="side-bar sticky left-0 top-0 w-full h-[100vh] flex flex-col px-8 py-4 align-center">
        <div className="logo mb-20 mt-8 w-full flex space-x-4 items-center">
             <div className="img-logo w-[20%] relative">
             <span className=' py-3 px-6 rounded-full bg-sky-900'></span>
             </div>
             <h2 className='text-2xl'>{title}</h2>
        </div>

        <div className="links flex flex-col space-y-4">
          <div className="link flex bg-main-900 items-center justify-center px-2  py-2 space-x-4 relative">
            <i className="bi bi-speedometer text-white w-[10%]"></i>
            <div className='w-[60%]'>
               <Link href='/lecturers/index' className='text-white'>Dashboard</Link>
            </div>
            
          </div>
           <div className="link flex text-white bg-main-400 border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4">
           <i className="bi bi-table w-[10%]"></i>
           <div className='w-[60%]'>
               <Link href='/lecturers/timetable'>Group timetable</Link>
            </div>
            
           </div>
           <div className="link flex text-white bg-main-400 border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4">
           <i className="bi bi-table w-[10%]"></i>
            <div className='w-[60%]'>
                <Link href='/lecturers/exam'>Exam timetable</Link>
            </div>
           </div>
           <div className="link flex text-white bg-main-400 border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4">
           <i className="bi bi-bell-fill w-[10%]"></i>
            <div className='w-[60%]'>
                <Link href='/students/notifications'>Notifications</Link>
            </div>
           </div>
           <div className="link flex text-white bg-main-400 border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4">
            <i className="bi bi-alarm-fill w-[10%]"></i>
            <div className='w-[60%]'>
            <Link href='/students/reminders'>Reminder</Link>
            </div>
           </div>
           <div className="link flex text-white bg-main-400 border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4">
           <i className="bi bi-person-gear w-[10%]"></i>
           <div className='w-[60%]'>
               <Link href='/students/profile'>Account settings</Link>
            </div>
           </div>

        </div>
    </div>
  )
}

SideNav.defaultProps= {
  title: "Smart class",
  image: "",
}

export default SideNav

