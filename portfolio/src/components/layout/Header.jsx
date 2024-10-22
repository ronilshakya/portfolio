import React,{useEffect, useState} from 'react'
import Button from '../common/Button'
import NavMenu from '../specific/NavMenu';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import LogoDark from '../../assets/images/vertical logo (dark).png'
import LogoLight from '../../assets/images/vertical logo (light).png'

const Header = ({darkmode,toggleDarkmode}) => {
  const [openedSidebar, setOpenedSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () =>{
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize",handleResize);
    return ()=>{
      window.removeEventListener("resize",handleResize);
    }
  })

 
  return (
    <>
      <div className={`relative z-40 flex justify-between items-center px-8 py-8 md:px-20 md:py-8 border-b ${darkmode ? 'bg-black border-custom-dark-border' : 'bg-white border-custom-light-border'} transition-colors duration-500 ease-in-out`}>
      {/* site branding */}
      <div>
        <Link to='/'>
        <img src={darkmode ? LogoLight : LogoDark} className='w-9 md:w-11' alt="" />
        </Link>
      </div>

      {/* dark button */}
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <button>
          <DarkModeSwitch
            checked={darkmode}
            onChange={toggleDarkmode}
            size={30}
          />
        </button>
      </div>

      {/* Menu */}
      <div>
        <Button darkmode={darkmode} onClick={()=> setOpenedSidebar(!openedSidebar)}>
          {
            windowWidth <= 768 ?(
              <IoMenu size={25} />
            ):(
              <span>NAVIGATE HERE</span>
            )
          }
        </Button>
      </div>
    </div>
    
     <NavMenu openedSidebar={openedSidebar} setOpenedSidebar={setOpenedSidebar} darkmode={darkmode}/>
   
    </>
  )
}

export default Header