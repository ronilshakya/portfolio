import React from 'react'

const Button = ({children,onClick,...props}) => {
  return (
    <button
        onClick={onClick}
        className={`border-2 px-4 lg:px-9 py-2 bg-black hover:bg-white text-white hover:text-black rounded-3xl font-heading text-sm lg:text-xl font-bold transition-colors duration-500 ${props.darkmode ? 'border-white':'border-black'}`}
        {...props}
    >
            {children}
    </button>
  )
}

export default Button