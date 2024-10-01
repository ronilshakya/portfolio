import React from 'react'

const Footer = ({darkmode}) => {
  return (
    <div className={`${darkmode ? 'dark':'light'} grid sm:grid-cols-1 md:grid-cols-2 px-10 md:px-20 bg-white`}>

      <div className='md:col-span-2'>
        <h1 className='text-center text-5xl md:text-[200px] font-bold'>SHAKYA</h1>
      </div>

      <div className='justify-self-center md:justify-self-start'>
        <p>@2024 ALL RIGHTS RESERVED</p>
      </div>

      <div className='justify-self-center md:justify-self-end'>
        <button>GO BACK TO TOP</button>
      </div>

    </div>
  )
}

export default Footer