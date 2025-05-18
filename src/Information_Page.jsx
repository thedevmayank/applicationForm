import axios from 'axios';
import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
  import { ToastContainer, toast } from 'react-toastify';

export default function Information_Page() {

  let navigate= useNavigate;
     

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://form-backend-by-py.onrender.com/api/website/user/register", e.target)
      .then((ress)=>{

      toast.success (ress.data.message);
  
      
      
      
      })

      .catch((error)=>{
       console.log(error.response.data.message)

        
      })

  }




  return (

    <>
    <ToastContainer />
      <div className='h-full '>

        {/* header */}

        <div className='  shadow-md p-4 flex items-center justify-between '>
          <Link to={'/home'}>
            <div className='flex items-center gap-2 text-[19px] font-bold cursor-pointer hover:text-[#3D52A2]'>
              <FaArrowLeftLong /> <h1>Information</h1>
            </div>
          </Link>
 <button className='p-[6px_17px] bg-[#7291E6] rounded-lg hover:bg-[#3D52A2]  cursor-pointer text-[white]  '  >Confirm</button>
        </div>
        {/* header end */}


        <div className="flex justify-around mt-3 gap-4  font-sans font-medium ">

          {/* form left side */}

          <div className=' ml-15  '>
            <div className='font-bold text-[18px]'>User Information</div>
            <div className=' mt-2'>
              <p className='text-[#808080]'>Enter the required information below to register.  you can change it later anytime you want</p>
            </div>

            {/* form start */}

            <div className=' mt-5   '>

              <form action="" onSubmit={submitHandler}>
                <div className='grid grid-cols-[48%_48%] justify-between'>
                  <div className=''>
                    <div className='text-[14px]'>
                      <label htmlFor="">
                        Full Name
                      </label>
                      <input type="text" name='name' placeholder='enter your name here' className='w-full  border-none outline-cyan-500 h-full bg-[#F5F5F5] p-3 mt-2' required />

                    </div>

                    <div className='text-[14px]'>
                      <label htmlFor="">
                        <p className='mt-5'>Email Address</p>
                      </label>
                      <input type="text" name='email' placeholder='enter your email here' className='w-full  border-none outline-cyan-500 h-full bg-[#F5F5F5] p-3 mt-2 flex' required></input>

                    </div>

                    <div className='text-[14px]'>
                      <label htmlFor="">
                        <p className='mt-5'>Contact </p>
                      </label>
                      <input type="text" name='contact' placeholder='enter your mobile number here' className='w-full  outline-cyan-500 h-full bg-[#F5F5F5] p-3 mt-2 ' required />

                    </div>


                    <div className='text-[14px]'>
                      <label htmlFor="">
                        <p className='mt-5'>Gender </p>
                      </label>
                      <div className='p-3 mt-1 border-grey rounded-lg  '>
                        <input type="radio" name='gender' value={"male"} required /> Male
                        <input type="radio" name='gender' value={"female"} className='ml-3' required /> Female

                      </div>
                    </div>

                    <div className='text-[14px]'>
                      <textarea name="address" id="" placeholder='Address here ' className=' resize-none outline-cyan-500 bg-[#F5F5F5] p-3 w-full mt-2' required></textarea>
                    </div>


                  </div>


                  <div>

                    <div className='text-[14px]'>
                      <label htmlFor="">
                        <p className=''>Date of Birth </p>
                      </label>
                      <input type="date" name='dob' className='w-full  border-none outline-cyan-500 h-full bg-[#F5F5F5] p-3 mt-2 cursor-pointer' required />
                    </div>


                    <div className='mt-5 text-[14px]'>
                      <label htmlFor="">
                        <p> Please Choose your Picture</p>
                      </label>
                      <div className='mt-4'>
                        <input type="file" name='profilePicture' className=' rounded-lg p-4  bg-[#EEE8F5] w-[50%] cursor-pointer hover:bg-[#AEBBDB]' />
                      </div>
                    </div>

                    <div className='mt-5 text-[14px]'>
                      <label htmlFor="">
                        <p>Qualification</p>
                      </label>
                      <div className='mt-4 flex items-center'>
                        <input type="checkbox" name="qualification" value={"10"} id="" /><span className='ml-3'>10<sup>th</sup></span>
                      </div>

                      <div className='mt-4 flex items-center'>
                        <input type="checkbox" name="qualification" value={"12"}  id="" /><span className='ml-3'>12<sup>th</sup></span>
                      </div>

                      <div className='mt-4 flex items-center'>
                        <input type="checkbox" name="qualification" value={"UG"}  id="" /><span className='ml-3'>UG</span>
                      </div>

                      <div className='mt-4 flex items-center'>
                        <input type="checkbox" name="qualification" value={"PG"}  id="" /><span className='ml-3'>PG</span>
                      </div>


                    </div>

                  </div>

                </div>

                <div className='text-center mt-5 '>
                  <button className='p-[6px_17px] bg-[#7291E6] rounded-lg hover:bg-[#3D52A2]  cursor-pointer text-[white] '  >Confirm</button>
                  <button type="reset" className='p-[6px_22px] bg-[#7291E6] rounded-lg hover:bg-[#3D52A2]  cursor-pointer text-[white] ml-4'>Reset</button>
                </div>

              </form>
              <p className='text-[12px] mt-2'><span className='text-[red]'>*</span> Please enter valid values</p>

            </div>
            {/* form end */}
          </div>
          {/* form left side end */}


          {/* form right side start */}

          <div className=''>
            <div className=' mt-3 text-[16px] border mx-[auto]'>
              Interest Section is in the process
            </div>
          </div>


          {/* form right side end */}
        </div >
      </div >
    </>

  )
}
