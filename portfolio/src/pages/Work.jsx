import React from 'react'
import { workItems } from '../Data'

const Work = ({darkmode}) => {
  return (
    <div className='lg:pt-36 pb-12 pt-12'>
      <h1 className='text-center text-5xl md:text-[140px] font-bold'>SELECTED <br /> WORKS</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-8 mx-8 md:mx-20'>
        {
          workItems.map((item)=>(
            <div key={item.id} className={`sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl justify-self-center rounded-xl overflow-hidden shadow-md ${darkmode ? 'bg-customDark':'bg-gray-100'}`}>
              <a href={item.url} target='_blank'>
                <img src={item.img} alt="" />
                <div className='p-5'>
                  <h1 className='text-xl'>{item.title}</h1>
                  <p className='text-lg text-gray-600'>{item.subtitle}</p>
                </div>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work