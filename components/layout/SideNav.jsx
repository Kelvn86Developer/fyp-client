
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const SideNav = ({ title, type }) => {
  const router = useRouter();
  const isActiveLink = (href) => {
    return router.pathname === href ? 'bg-main-900' : 'bg-main-400';
  };

  if(type== "students"){
    return (
      <div className="side-bar sticky left-0 top-0 w-full h-[100vh] flex flex-col px-8 py-4 align-center">
        <div className="logo mb-20 mt-8 w-full flex space-x-4 items-center">
          <div className="img-logo w-[20%] relative">
            <span className="py-3 px-6 rounded-full bg-sky-900"></span>
          </div>
          <h2 className="text-2xl">{title}</h2>
        </div>
  
        <div className="links flex flex-col space-y-4">
          <div className={`link flex ${isActiveLink('/students')} border-main-900 border-[1px]  items-center justify-center px-2 py-2 space-x-4 relative`}>
            <i className="bi bi-speedometer text-white w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/students" className="text-white">Dashboard</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/students/group')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-table w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/students/group">Group timetable</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/students/exam')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-table w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/students/exam">Exam timetable</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/students/notifications')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-bell-fill w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/students/notifications">Notifications</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/students/reminders')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-alarm-fill w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/students/reminders">Reminder</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/students/account')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-person-gear w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/students/account">Account settings</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if(type == "lecturer") {
    return (
      <div className="side-bar sticky left-0 top-0 w-full h-[120vh] flex flex-col px-8 py-4 align-center">
        <div className="logo mb-20 mt-8 w-full flex space-x-4 items-center">
          <div className="img-logo w-[20%] relative">
            <span className="py-3 px-6 rounded-full bg-sky-900"></span>
          </div>
          <h2 className="text-2xl">{title}</h2>
        </div>
  
        <div className="links flex flex-col space-y-4">
          <div className={`link flex ${isActiveLink('/lecturer')} border-main-900 border-[1px]  items-center justify-center px-2 py-2 space-x-4 relative`}>
            <i className="bi bi-speedometer text-white w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/lecturer" className="text-white">Dashboard</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/lecturer/occupy')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-table w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/lecturer/freevenues">Free venues</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/lecturer/request')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-table w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/lecturer/requestvenues">Venues sessions</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/lecturer/request')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-table w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/lecturer/examtimetable">Exam timetable</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/lecturer/notifications')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-bell-fill w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/lecturer/notifications">Notifications</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/lecturer/occupied')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-alarm-fill w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/lecturer/occupied">Occupied venues</Link>
            </div>
          </div>
          <div className={`link flex text-white ${isActiveLink('/lecturer/account')} border-main-900 border-[1px] items-center justify-center px-1 py-2 space-x-4`}>
            <i className="bi bi-person-gear w-[10%]"></i>
            <div className="w-[60%]">
              <Link href="/lecturer/account">Account settings</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
};

SideNav.defaultProps = {
  title: "Smart class",
  image: "",
};

export default SideNav;
