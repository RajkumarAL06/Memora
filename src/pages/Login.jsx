import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='min-h-screen bg-[#FAE8E7] flex'>

      <div className='w-1/2 flex flex-col items-center justify-center'>

        <h1 className='text-8xl font-extrabold text-pink-800'>Memora</h1>
        <h4 className='font-light'>Better Mind . Brighter Day</h4>
        <h4 className='font-light'>Personalized Cognitive Support for 
            a Healthier Tomorrow.
        </h4>
        <img src='https://png.pngtree.com/png-clipart/20220926/ourmid/pngtree-caring-for-the-elderly-with-dementia-png-image_6143555.png' alt='Memora'/>
        <h4 className='font-light'>Small Steps . Big Progress</h4>
      </div>

      <div className='w-1/2 flex  items-center justify-center'>
        <form className='w-120 bg-[#FEF8F7] p-10 flex flex-col gap-4 rounded-2xl'>
            <h2 className='font-bold text-2xl'>Wellcome</h2>
            <p>Login and complete your task</p>
            <input
                type='text'
                placeholder="Email or Phone Number"
                className="w-full p-4 rounded-xl bg-[#F7EDF2]"
            />

            <input
                type='text'
                placeholder="Password"
                className="w-full p-4 rounded-xl bg-[#F7EDF2]"
            />

            <div className='flex justify-between items-center'>

                <lebel className="flex items-center gap-1">
                    <input type='checkbox'/>
                    <span>Remember Me</span>
                </lebel>

                <Link to='/forgot' className='text-[#6F687D] font-medium hover:underline'>Forget Password?</Link>
            </div>

            <Link
                to="/dashboard"
                className="block w-full py-4 text-center bg-[#D5718B] rounded-2xl hover:bg-[#C9607B] active:scale-95 transition-transform"
            >
                Login
            </Link>

            <div className='flex justify-center gap-3 mt-4'>
                <div className='h-px flex-1 bg-gray-300'></div>
                <span className='text-sm text-gray-500'>OR</span>
                <div className='h-px flex-1 bg-gray-300'></div>
            </div>

            <div className='flex items-center gap-2 text-sm '>
                <span className='text-[#6F687D]'>Don't have any account?</span>
                <Link to='/register' className='text-[#6F687D] font-medium hover:underline'>Sign up</Link>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Login
