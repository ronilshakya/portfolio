import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='relative flex justify-between items-center px-12 py-5 border-b bg-white'>
      {/* site branding */}
      <div>
        <h1>LOGO</h1>
      </div>

      {/* dark button */}
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <button>Dark</button>
      </div>

      {/* Menu */}
      <div>
        <button
          className='px-9 py-3 bg-black text-white rounded-3xl font-heading font-bold'
          >
            Menu
        </button>
      </div>
    </div>
    </>
  )
}

export default Navbar