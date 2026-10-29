import React from 'react'
import side from '../assets/side.png'
import Card from '../components/Card'

const Middilepage = () => {
  return (
      <div className='h-full flex flex-col  mx-8'>

        <main className=" shrink-0 flex justify-between p-4   bg-[#f4d1d0] rounded-3xl">

        <div className="">

          <h1 className="text-xl font-bold text-[#252A41]">
            Welcome Back, Rajkumar
          </h1>

          <p className="mt-1 font-stretch-125%  text-[#2e2938]">
            Together we make every small step count.
          </p>

          <p className="text-[#2e2938]">
            Let's support better cognitive health for a brighter tomorrow.
          </p>

        </div>
        <img className='h-20 w-50 object-cover rounded-3xl' src={side} alt=''/>

      </main>

    <div className='flex-1 min-h-0 overflow-y-auto pr-2 scrollbar-width:none [&::-webkit-scrollbar]:hidden'>
      <Card />
    </div>

      </div>
  )
}

export default Middilepage
