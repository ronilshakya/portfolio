import React from 'react'
import ProfilePic from '../assets/images/1.jpg' 
import Input from '../components/common/Input'
import { linkItems } from '../Data'

const Contact = ({darkmode}) => {
  return (
    // wrapper
    <div> 
      {/* contact form */}
      <div className={`grid grid-cols-1 xl:grid-cols-2 px-8 md:px-20 py-10 justify-items-center items-center ${darkmode?'dark':'light'}`}>
        <div className='flex flex-col gap-8'>
          <h1 className='text-5xl font-bold'>SAY HELLO!</h1>
          <p className='text-2xl font-medium'>My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard.</p>
          <form action="" className='flex flex-col gap-4'>
            <h1 className='text-xl'>FILL THIS FORM OUT</h1>
            <Input placeholder={"Name"} darkmode={darkmode}/>
            <Input placeholder={"Email"} darkmode={darkmode}/>
            <textarea name="Message" placeholder='Message' rows="4" className={`rounded-xl w-full px-4 py-5 focus:outline-none ${darkmode ? 'bg-customDark':'bg-gray-100'}`} id=""></textarea>
            <button
              className={`w-full ${darkmode ? 'bg-white text-black':'bg-black text-white'} text-base py-5 rounded-xl`}
            >
              SEND EMAIL
            </button>
          </form>
        </div>
        <div className='rounded-xl overflow-hidden max-xl:mt-12'>
          <img src={ProfilePic} className='w-[500px]' alt="" />
        </div>
      </div>
      {/* contact info */}
      <div className='mx-20 border-t border-b border-custom-light-border'>
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:justify-items-center py-24'>
          {/* social */}
          <div>
            <p>SOCIAL</p>
            {linkItems.map((item)=>(
              <a href={item.href} key={item.id}>
                {item.site.toUpperCase()}
              </a>
            ))}
          </div>
          {/* current location */}
          <div>
            <p>CURRENT LOCATION</p>
            <ul>
              <li>LUNKHUSI,</li>
              <li>LALITPUR,</li>
              <li>NEPAL</li>
            </ul>
          </div>
          {/* PHONE */}
          <div>
            <p>PHONE</p>
            <ul>
              <li>+977-9818974948</li>
              <li>+977-9748277365</li>
            </ul>
          </div>
          {/* EMAIl */}
          <div>
            <p>EMAIL</p>
            <ul>
              <li>shakyaronil8@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact