import React, { useContext, useEffect } from 'react'

import StudentContext from '../../context/student/studentContext.js'
import Notification from './Notification.jsx';
import Alert from '../Alert.jsx';

const Notifications = () => {
  const studentContext = useContext(StudentContext);
  const { notifications, getRecentNotifications, getOldestNotifications, oldest_notifications, recent_notifications, filterNotifications, setActiveFilter, activeFilter } = studentContext;

  useEffect(() => {
    getRecentNotifications();
    getOldestNotifications();
    // eslint-disable-next-line
  }, []);
  const onClick = (e) => {
    const data = e.target.getAttribute('data');
    filterNotifications(data);
    setActiveFilter(data);
  }
  return (
    <div>
      <h1 className='text-2xl mb-4 font-semibold'>Notifications</h1>
      {/* compare date to to check if time for the content is less than one day or equal to date.now,  */}
      <div className="filters flex gap-4">
        <button className={ `border-[1px] border-main-400 rounded-md px-4 py-2 text-center ${activeFilter == "all"? "bg-main-400 text-white": "" }`} data="all" onClick={onClick}>All</button>
        <button className={ `border-[1px] border-main-400 rounded-md px-4 py-2 text-center ${activeFilter == "today"? "bg-main-400 text-white": "" }`} data="today" onClick={onClick}>Todays only</button>
      </div>
      <div className="recent mt-4 mb-2">
        <h2 className=' mb-2'>recent</h2>
        <div className="list-of-notifications bg-main-130 w-[96%] py-4 min-h-[40vh]">
        {
              recent_notifications.length == 0 ? (
                <>
                  <Alert />
                </>) : (
                recent_notifications.map((notification) => (<div className="notification flex border-b-[1px] border-slate-400 px-2 py-2 first:mt-2 mt-4 ml-4 w-[80%]" key={notification.id}>
                  <Notification notification={notification} />
                </div>)
                ))
            }
        </div>

        <div className="oldest mt-4">
          <h2 className='mb-2'>Oldest</h2>
          <div className="list-of-notifications bg-main-130 w-[96%] py-4 min-h-[40vh]">
            {
              oldest_notifications.length == 0 ? (
                <>
                  <Alert />
                </>) : (
                oldest_notifications.map((notification) => (<div className="notification flex border-b-[1px] border-slate-400 px-2 py-2 first:mt-2 mt-4 ml-4 w-[80%]" key={notification.id}>
                  <Notification notification={notification} />
                </div>)
                ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}



export default Notifications