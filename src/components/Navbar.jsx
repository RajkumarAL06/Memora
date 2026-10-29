import React from 'react'
import logo2 from '../assets/logo2.png'
import {Link} from 'react-router-dom'
import pi from '../assets/pi.png'
const Navbar = () => {
  return (
    <div className='bg-[#f7bebb] flex justify-between px-15 py-1'>
        <div className='flex gap-1 justify-center items-center'>
            <img src={logo2} alt='Memora logo' className="h-18 w-18 rounded-4xl "/>
            <h2 className='font-bold text-2xl '>Memora</h2>
        </div>
        
        <div className='flex gap-5 items-center justify-center'>
            <Link to='/dashboard' className='text-sm font-bold hover:underline'>Home</Link>
            <Link to='/about' className='text-sm font-bold hover:underline'>About</Link>
            <Link to='/notify' className='text-sm font-bold hover:underline'>Notification</Link>
            <div className='flex gap-2 items-center'>
                <img src={pi} alt='pic' className="h-18 w-18 rounded-4xl "/>
                <h4 className='text-shadow-mauve-950 font-bold'>Rajkumar Patra</h4>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
