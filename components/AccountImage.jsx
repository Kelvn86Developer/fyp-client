import React from 'react'

const AccountImage = () => {
  return (
    <div className='flex flex-col items-center justify-between shadow-md w-[46%]'>
        <div className="img-wrapper relative w-[55%] h-[40vh] min-h-[40vh] max-h-[40vh] rounded-full overflow-hidden mb-8">
            <img src="/spiderman5.jpg" alt=""  className='w-full h-full object-fill'/>
        </div>

        <div className="gray-bg-rec bg-gray-300 w-full h-[30vh]">
         
        </div>
    </div>
  )
}

export default AccountImage