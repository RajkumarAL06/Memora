import React from 'react'
import Navbar from '../components/Navbar'
import Foter from '../components/Foter'
import Middilepage from '../components/Middilepage'
const DashBoard = () => {
  return (
    <div className='h-screen flex flex-col  bg-[#FAE8E7] gap-2'>
      <Navbar/>
      <div  className="flex-1 min-h-0  py-2 ">
        <Middilepage />
      </div>
      <Foter/>
    </div>
  )
}

export default DashBoard
