import React from 'react'
import Navbar from './Navbar'

const Container = (props) => {
  return (
    <div className='w-[80%] relative justify-end'>
        <Navbar/>
        <div className="page-wrapper ml-6 mt-[1%] relative h-[1000px] w-[96%]">
        {props.children}
        </div>
    </div>
  )
}

export default Container