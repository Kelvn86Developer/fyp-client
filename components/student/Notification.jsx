import React from 'react'

const Notification = ({notification}) => {
  return (
    <>
      <div className="circle w-[4%] relative mt-2">
        <span className='bg-white rounded-full px-3 py-[0.08rem]'></span>
      </div>

      <div className="right pl-1">
         <div className="title">
            <h3 className='text-sm'>Class occupied</h3>
         </div>
         <div className="msg text-sm">
            <p>{notification.content}</p>
         </div>

         <div className="time">
            <small className='text-sm'>{notification.createdAt}</small>
         </div>
      </div>
    </>
  )
}

export default Notification