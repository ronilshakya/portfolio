import React from 'react'

const Section = ({title,children,darkmode}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 px-8 lg:px-20 pt-10 lg:pt-20'>
        <div>
          <h1 className='sticky top-0 text-3xl xl:text-5xl font-bold pt-12'>{title}</h1>
        </div>
        <div className='col-span-2'>
          {children}
        </div>
    </div>
  )
}

export default Section