import React from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'

const Container = (props) => {
  return (
    <div className='w-[80%] relative justify-end'>
        <Navbar/>
        <div className="page-wrapper mt-[1%] relative h-[1000px]">
        {props.children}
        </div>
    </div>
  )
}

export default Container