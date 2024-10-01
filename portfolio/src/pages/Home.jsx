import React, { useEffect } from 'react'
import { FaCircle } from "react-icons/fa";
import ProfilePic from '../assets/images/1.jpg'
import Button from '../components/common/Button'

const Home = ({darkmode}) => {
  useEffect(()=>{
    
  },[])
  return (
    <div className={`${darkmode ? 'dark' : 'light'}`}> 
      {/* website hero */}
      <div className='lg:pt-36 pb-12 pt-12'>
        <p className='text-center flex justify-center items-center gap-2 text-gray-500'>
          <FaCircle color='green' size={12} />AVAILABLE FOR FREELANCE
        </p>
        <h1 className='text-center text-5xl md:text-[140px] font-bold'>RONIL<br/>SHAKYA</h1>
        <div className='flex justify-between px-20 py-16 text-base max-md:hidden'>
          <p>BASED ON LALITPUR, NEPAL</p>
          <p>FRONTEND DEVELOPER + GRAPHIC DESIGNER</p>
        </div>
      </div>
      
      <div className='pt-10 pb-24'>
        <div className='flex justify-center pb-20'>
          <div className='rounded-3xl md:rounded-full overflow-hidden'>
            <img src={ProfilePic} className='w-96' alt=""/>
          </div>
        </div>

        <div className='text-center flex flex-col gap-10 items-center'>
            <h1 className='text-3xl max-md:text-2xl font-bold px-20'>I'M AN INNOVATIVE DESIGNER WITH STRONG <br /> FOUNDATION  IN BOTH GRAPHIC DESIGN AND WEBSITE DEVELOPMENT.</h1>
            <p className='mx-48 text-2xl max-md:hidden'>My skill set allows me to combine creativity with technical expertise, enabling me to deliver user-friendly designs and efficient web solutions. I'm eager to apply my knowledge in both design and development to contribute effectively to any team or project.</p>
            <Button darkmode={darkmode}>DOWNLOAD RESUME</Button>
        </div>
      </div>
    </div>
    
  )
}

export default Home