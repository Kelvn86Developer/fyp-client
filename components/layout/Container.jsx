import React from 'react'
import { useRouter } from 'next/router';
import Navbar from './Navbar'

const Container = (props) => {
  const router = useRouter();
  let link = router.pathname;
  return (
    <div className='relative w-[80%] justify-end ml-[24%]'>
      <Navbar link={link}/>
      <div className="page-wrapper ml-6 mt-[8%] relative min-h-screen w-[96%]">
        {props.children}
      </div>
    </div>
  )
}

export default Container