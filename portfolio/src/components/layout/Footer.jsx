import React from 'react'

const Footer = ({darkmode}) => {
  return (
    <div className={`${darkmode ? 'dark':'light'} grid grid-cols-1 lg:grid-cols-2 px-10 md:px-20 pt-16 bg-white`}>

      <div className='lg:col-span-2'>
        <h1 className='text-center text-5xl lg:text-[200px] font-bold'>SHAKYA</h1>
      </div>

      <div className='justify-self-center lg:justify-self-start'>
        <p>@2024 ALL RIGHTS RESERVED</p>
      </div>

      <div className='justify-self-center lg:justify-self-end'>
        <button>GO BACK TO TOP</button>
      </div>

    </div>
  )
}

export default Footer