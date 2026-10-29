import React from 'react'
import { Link } from 'react-router-dom'
import {ArrowRight} from 'lucide-react'
const Carddesign = (props) => {
  return (
    <Link
      to={props.Link}
      className={`${props.Bg} ${props.Border} border-2 rounded-2xl p-6 h-40 block hover:bg-blue-100`}
    >
      <h2 className="text-l font-bold">
        {props.Title}
      </h2>
      <div className='flex justify-between items-center'>
        <div>

          <p className="mt-3">
            {props.Para}
          </p>
          <span className='inline-flex mt-2 bg-amber-950 text-amber-50 rounded-xl p-1'> 
            <ArrowRight size={16} color="#ffffff" />
          </span>
        </div>
        <img  className='flex h-15 w-12'  src={props.Img} alt=''/>
      </div>
    </Link>
  )
}

export default Carddesign