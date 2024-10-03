import React from 'react'
import { FaPlus } from "react-icons/fa";
import Button from '../common/Button';

const ExpertiseModal = ({closeModal,modalTitle,modalDesc,modalKeyFeatures,modalPhoto,darkmode}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-15">
      <div className={`border ${darkmode ? 'bg-black border-custom-dark-border':'bg-white border-custom-light-border'} rounded-lg px-6 py-6 shadow-lg w-3/4 md:w-1/2`}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='flex flex-col justify-evenly gap-8'>
            <button className={`border p-3 bg-black self-start rounded-full rotate-45 ${darkmode?'border-custom-dark-border':'border-custom-light-border'}`} onClick={closeModal}>
              <FaPlus color='white' />
            </button>
            <h1 className='text-2xl font-bold'>{modalTitle}</h1>
            <p>{modalDesc}</p>
            <div>
              <h1 className='text-xl font-bold'>KEY FEATURES</h1>
              <ul className='ml-4 mt-2'>
                {modalKeyFeatures.map((item)=>(
                  <li key={item.id} className='py-1'>
                    {"("+item.id+")"} {item.feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button darkmode= {darkmode}>GET STARTED</Button>
          </div>
          <div className='flex justify-center items-center max-lg:hidden'>
            <img src={modalPhoto} className='rounded-xl' alt="" onLoad={()=>setLoading(false)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertiseModal