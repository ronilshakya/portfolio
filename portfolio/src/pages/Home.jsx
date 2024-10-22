import React, { useEffect, useState } from 'react'
import { FaCircle } from "react-icons/fa";
import ProfilePic from '../assets/images/1.jpg'
import Button from '../components/common/Button'
import {expertiseItems,experienceItems, skillItems, FaqItems} from '../Data'
import { FaPlus } from "react-icons/fa";
import ExpertiseModal from '../components/specific/ExpertiseModal';
import Section from '../components/specific/Section';

const Home = ({darkmode}) => {
  const [openModalId, setOpenModalId] = useState(null);
  const [openFaqId, setOpenFaqId] = useState(null);
  const openModal = (id) => setOpenModalId(id)
  const closeModal = () => setOpenModalId(null)

  const downloadUrl = "../../public/cv v-1.pdf";  
  const handleScroll = () =>{
    setOffsetY(window.scrollY);
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll)
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
      
      {/* about me */}
      <div className='pt-4 md:pt-10 pb-24'>
        <div className='flex flex-col items-center justify-center pb-20 gap-20'>
          <h1 className='max-md:hidden md:text-8xl font-bold text-center'>ABOUT ME</h1>
          <div className='rounded-3xl md:rounded-full overflow-hidden'>
            <img src={ProfilePic} className='w-72 md:w-96' alt=""/>
          </div>
        </div>

        <div className='text-center flex flex-col gap-10 items-center'>
            <h1 className='text-3xl max-md:text-2xl font-bold px-8 md:px-20 '>I'M AN INNOVATIVE DESIGNER WITH STRONG <br /> FOUNDATION  IN BOTH GRAPHIC DESIGN AND WEBSITE DEVELOPMENT.</h1>
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
                <button className='p-4 bg-black self-end rounded-full hover:rotate-90 transition-transform duration-300 ease-in-out hidden md:block' onClick={()=>openModal(item.id)}>
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

      {/* experience */}
      <Section title="EXPERIENCE" darkmode={darkmode}>
        {
          experienceItems.map((item)=>(
            <div key={item.id} className={`border-b ${darkmode?'border-custom-dark-border':'border-custom-light-border'} px-0 py-12`}>
              <h1 className='text-3xl font-bold mb-4 lg:mb-2'>{item.company}</h1>
              <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-2 items-center gap-y-4 lg:gap-y-2'>
                <h1 className='text-2xl font-bold col-span-2'>{item.job}</h1>
                <h1 className='justify-self-start lg:justify-self-end text-2xl font-bold'>{item.duration}</h1>
                <p className={`col-span-2 font-medium text-xl ${darkmode?'text-gray-400':'text-gray-600'}`}>{item.desc}</p>
              </div>
            </div>
          ))
        }
      </Section>

      {/* skills */}
      <Section title="SKILLS" darkmode={darkmode}>
        {
          skillItems.map((item)=>(
            <div key={item.id} className={`${darkmode?'bg-[#0a0a0a]':'bg-[#f5f5f7]'} flex flex-col lg:flex-row items-start gap-5 lg:gap-10 p-5 lg:p-10 border ${darkmode?'border-[#1d1d1d]':'border-[#0000000A]'} rounded-xl my-12`}>

              <div className={`border ${darkmode? 'border-[#FFFFFF0F]':'border-[#0000000A]'} w-full lg:w-auto flex justify-center items-center rounded-xl ${darkmode?'bg-[#0d0d0d]':'bg-[#fafafa]'} p-3`}>
                <img src={item.skillImage} className='w-12 lg:w-32' alt="" />
              </div>

              <div className={`border border-[#0000000A] rounded-xl ${darkmode?'bg-[#0d0d0d]':'bg-[#fafafa]'} p-5 lg:p-10`}>
                <h1 className='text-3xl font-bold mb-4 lg:mb-2'>{item.skillName.toUpperCase()}</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 grid-rows-2 items-center gap-y-4 lg:gap-y-2'>
                  <h1 className='text-xl font-bold col-span-3'>{item.skillSubtitle.toUpperCase()}</h1>
                  <h1 className='justify-self-start lg:justify-self-end text-xl font-bold'>{item.skillPercentage}</h1>
                  <p className={`col-span-3 font-medium text-lg ${darkmode?'text-gray-400':'text-gray-600'}`}>{item.skillDesc}</p>
                </div>
              </div>

            </div>
          ))
        }
      </Section>

      {/* frequently asked questions */}
      <div>
        <h1 className='text-3xl xl:text-5xl font-bold pt-12 text-center'>FREQUENTLY <br />ASKED QUESTIONS</h1>
        <ul className='px-8 md:px-20 my-12'>
          {
            FaqItems.map((item)=>(
              <li key={item.id} role='button' className={`${darkmode?'bg-[#0a0a0a]':'bg-[#f5f5f7]'} my-4 rounded-xl`}  onClick={()=>setOpenFaqId(openFaqId === item.id ? null : item.id)}>
                <div className='flex justify-between items-center py-5 px-8'>
                  <h1 className='text-xl md:text-2xl'>{item.question}</h1>
                  <FaPlus className={`${openFaqId === item.id ? 'rotate-45' : 'rotate-0'} w-7 transition-all duration-300`}/>
                </div>
                <p className={`${openFaqId === item.id ? `max-h-96 mx-6 p-4 border-t ${darkmode ? 'border-custom-dark-border':'border-custom-light-border'}`:`max-h-0 mx-0 p-0`} ${darkmode?'text-gray-400':'text-gray-600'} text-lg md:text-2xl font-medium transition-all duration-300 ease-in-out overflow-hidden`}>{item.answer}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    
  )
}

export default Home