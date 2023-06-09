import React from 'react'
import Link from 'next/link'
import PropTypes  from 'prop-types'
const Navbar = ({link, notification, reminder}) => {
  return (
    <div className='fixed w-[80%] z-10 top-0 left-[24%] right-0 px-8 py-4 pr-20 flex justify-between shadow-sm bg-white'>
         <div className="left bg-main-130 py-1 px-2 w-[40%]">
          <p>{link}</p>
         </div>
         <div className="right flex justify-between w-[8%] text-main-400">
          <Link href="/students/notifications"><i className={`${notification} text-base`}></i></Link>
          <Link href="/students/reminders"><i className={`${reminder} text-base`}></i></Link>
         </div>
    </div>
  )
}

Navbar.propTypes = {
  link: PropTypes.string,
  notification: PropTypes.string,
  reminder: PropTypes.string,
}

Navbar.defaultProps= {
  link: "Dashboard",
  notification: "bi bi-bell-fill",
  reminder: "bi bi-alarm-fill"
}

export default Navbar
