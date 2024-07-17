import React from 'react'
import SlideBar from './components/SlideBar'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard'

const App = () => {
  return (
    <>
    <div className='mt-3'>
      <NavBar/>
      <div className='main flex'>
      <SlideBar/>
      <DashBoard/>
      </div>
    </div>
    </>
  )
}

export default App