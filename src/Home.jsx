import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>

        <div className='shadow-md bg-[]'>
      <div className=' p-4 flex items-center justify-between'>
        <Link to={'/home'}>
          <div className='flex items-center gap-2 text-[19px] font-bold cursor-pointer hover:text-[#3D52A2]'> <h1>Home</h1>
          </div>
        </Link>
       <div><button className='p-[6px_17px] bg-[#7291E6] rounded-lg hover:bg-[#3D52A2]  cursor-pointer text-[white]'>Confirm</button></div>
      </div>
    </div>

    </>
  )
}
