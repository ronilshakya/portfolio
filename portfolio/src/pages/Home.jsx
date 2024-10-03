import React, { useEffect, useState } from 'react'
import { FaCircle } from "react-icons/fa";
import ProfilePic from '../assets/images/1.jpg'
import Button from '../components/common/Button'
import {expertiseItems} from '../Data'
import { FaPlus } from "react-icons/fa";
import ExpertiseModal from '../components/specific/ExpertiseModal';

const Home = ({darkmode}) => {
  const [openModalId, setOpenModalId] = useState(null);
  const openModal = (id) => setOpenModalId(id)
  const closeModal = () => setOpenModalId(null)
  const downloadUrl = "../../public/cv v-1.pdf";  
  
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
      
      {/* about me */}
      <div className='pt-10 pb-24'>
        <div className='flex justify-center pb-20'>
          <div className='rounded-3xl md:rounded-full overflow-hidden'>
            <img src={ProfilePic} className='w-96' alt=""/>
          </div>
        </div>

        <div className='text-center flex flex-col gap-10 items-center'>
            <h1 className='text-3xl max-md:text-2xl font-bold px-20'>I'M AN INNOVATIVE DESIGNER WITH STRONG <br /> FOUNDATION  IN BOTH GRAPHIC DESIGN AND WEBSITE DEVELOPMENT.</h1>
            <p className='mx-48 text-2xl max-md:hidden'>My skill set allows me to combine creativity with technical expertise, enabling me to deliver user-friendly designs and efficient web solutions. I'm eager to apply my knowledge in both design and development to contribute effectively to any team or project.</p>
            <a href={downloadUrl} download="cv v-1.pdf">
              <Button darkmode={darkmode}>DOWNLOAD RESUME</Button>
            </a>
        </div>
      </div>

      {/* my expertise */}
      <div className='px-8 md:px-20 flex flex-col gap-12 md:gap-20'>
        <h1 className='text-4xl md:text-7xl font-bold'>MY <br/>EXPERTISE</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {
            expertiseItems.map((item)=>(
              <div key={item.id} className={`p-9 ${darkmode?'bg-customDark':'bg-gray-100'} rounded-xl flex flex-col gap-4`}>
                <button className='p-4 bg-black self-end rounded-full hover:rotate-90 transition-transform duration-300 ease-in-out' onClick={()=>openModal(item.id)}>
                    <FaPlus color='rgb(243 244 246)' />
                </button>
                <span>{"("+item.id+")"}</span>
                <h1 className='font-bold text-3xl'>{item.title}</h1>
                <p className={`text-xl font-medium ${darkmode?'text-gray-400':'text-gray-600'}`}>{item.desc}</p>                
                {openModalId == item.id && (
                  <ExpertiseModal 
                    openModalId={openModalId} 
                    closeModal={closeModal} 
                    darkmode = {darkmode}
                    modalTitle={item.title} 
                    modalDesc={item.modal_desc}
                    modalKeyFeatures ={item.key_features}
                    modalPhoto = {item.photo}
                  />
                )}
              </div>
            ))
          }
        </div>
      </div>
    </div>
    
  )
}

export default Home