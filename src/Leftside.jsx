import React from 'react'
import { Link } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";



export default function Leftside() {
  
  return (
    <>
      <div className=' text-center  w-[full] h-full border-[red]-[800] rounded-[10px_0px_0px_10px] bg-[#EEE8F5]'>
        <div className=' p-4 text-[17px]'   > Welcome Back, <br /><span className='font-bold'>User</span></div>
        <div className='mt-5' >

          <Link to={"/home"}>
        
            <div className=' hover:bg-[white] p-2 cursor-pointer text-[#4D4D4F] hover:font-bold hover:text-[black]  flex items-center  pl-4 gap-3 mb-3 w-[94%] mx-[auto] rounded-lg'>
            <span className='text-[18px]'>  <GoHomeFill />    </span><h1>Home</h1> <span className='ml-32'> <FaBars /></span>

            </div>

          </Link>

            <Link to={"/home/list"}>
            <div className=' hover:bg-[white] p-2 cursor-pointer text-[#4D4D4F] hover:font-bold hover:text-[black] flex items-center pl-4 gap-3 mb-3 w-[94%] mx-[auto] rounded-lg '>
           <span className='text-[18px ]'>   <MdDashboard /></span>
              Dashboard  <span className='ml-24'> < FaBars /></span>
            </div>
          </Link>

          <Link to={"/home/form"} >

            <div className=' hover:bg-[white] p-2 cursor-pointer text-[#4D4D4F] hover:font-bold hover:text-[black] flex items-center pl-4 gap-3  mb-3 mb-3 w-[94%] mx-[auto] rounded-lg'>
             <span className='text-[18px]'><IoIosInformationCircle /></span> 

              Information  <span className='ml-22 hover '> < FaBars /></span>

            </div>


          </Link>
           <Link to={"/"} >

            <div className=' hover:bg-[white] p-2 cursor-pointer text-[#4D4D4F] hover:font-bold hover:text-[black] flex items-center pl-4 gap-3  mt-66  mb-3 w-[94%] mx-[auto] rounded-lg'>
             <span className='text-[18px]'><FaArrowLeftLong /> </span> 

              Back 

            </div>


          </Link>

        


        </div>


      </div>
    </>
  )
}




































































































