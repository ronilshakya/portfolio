import React from 'react'
import { IoClose } from "react-icons/io5";
import Button from '../common/Button';
import {Link} from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import { navItems,linkItems } from '../../Data';

const NavMenu = ({ openedSidebar, setOpenedSidebar, darkmode }) => {
 
  return (
    <>
      {/* Sidebar */}
      <div 
        className={`fixed flex flex-col top-0 right-0 h-full w-full z-50 shadow-lg transform transition-transform duration-700 ease-in-out  ${darkmode ? 'bg-black text-white' : 'bg-white text-black'} ${openedSidebar ? 'translate-y-0' : 'translate-y-full'} `}
      >
        {/* navigation header */}
        <div className='flex justify-between items-center px-20 py-14'>
          <div className='max-sm:hidden'>
            <h1>LOGO</h1>
          </div>
          <div className={`bg-black inline-block rounded-full absolute max-sm:top-16 left-1/2 transform -translate-x-1/2 `}>
            <button 
              className="p-2" 
              onClick={() => setOpenedSidebar(false)}
            >
              <IoClose size={30} color='white'/>
            </button>
          </div>
          <div className='max-sm:hidden'>
            <Button darkmode={darkmode}>SCHEDULE A CALL</Button>
          </div>
        </div>
        {/* navigation list */}
        <div className='flex-grow flex justify-center items-center'>
          <ul>
            {
              navItems.map((item)=>(
                <Link 
                  key={item.id} 
                  to={item.link} 
                  onClick={()=>setOpenedSidebar(false)}
                  className='text-center'
                >
                  <h1 className='text-4xl md:text-8xl font-bold'>{item.name.toUpperCase()}</h1>
                </Link>
              ))
            }
          </ul>
        </div>
        {/* footer */}
        <div className='flex flex-col max-sm:items-center md:flex-row justify-between px-20 py-14 max-sm:gap-3'>
          <div>
            <p>@2024 ALL RIGHTS RESERVED</p>
          </div>
          <div className='flex max-sm:flex-col gap-6 max-sm:gap-3'>
            {
              linkItems.map((item)=>(
                <a key={item.id} href={item.href} target='blank' className='flex'>
                  {item.site}<MdArrowOutward size={25}/>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default NavMenu;
