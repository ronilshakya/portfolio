import React from 'react'

const Input = ({placeholder,darkmode}) => {
  return (
    <input type="text" placeholder={placeholder} className={`${darkmode ? 'bg-customDark':'bg-gray-100'} rounded-xl border-none w-full px-4 py-5 focus:outline-none`}/>
  )
}

export default Input