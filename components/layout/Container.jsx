import React from 'react'
import { useRouter } from 'next/router';
import Navbar from './Navbar'

const Container = (props) => {
  const router = useRouter();
  let link = router.pathname;
  return (
    <div className='w-[80%] relative justify-end'>
      <Navbar link={link}/>
      <div className="page-wrapper ml-6 mt-[1%] relative h-[1000px] w-[96%]">
        {props.children}
      </div>
    </div>
  )
}

export default Container