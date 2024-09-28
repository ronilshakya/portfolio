import React from 'react'

const Home = ({darkmode}) => {
  return (
    <div className={`${darkmode ? 'dark' : 'light'}`}>
        <p>Hello world</p>
    </div>
  )
}

export default Home