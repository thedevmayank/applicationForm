import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { RxCross2 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";



export default function Dashboard() {
  // for all data
  const [formData, setFormData] = useState([])

  // for single check to edit dialog box

  const [singleCheck, setSingleCheck] = useState(false)

  // for single delete 
  const [singleDelete, setSingleDelete] = useState()

  // for edit box model
  const [editdata, setEditData] = useState(false)





  // form data

  const formDataFn = () => {
    axios.get("https://form-backend-by-py.onrender.com/api/website/user/getuser")
      .then((ress) => {
        setFormData(ress.data.data)
      })
      .catch((error) => {
        console.log(error);

      })

  }

  // data check for edit or delete
  const editBoxFn = (dataId) => {
    setSingleDelete(dataId);


    setSingleCheck(true)

  }

  // for single delete
  const singleDeleteFn = () => {
    axios.delete(`https://form-backend-by-py.onrender.com/api/website/user/single-user-delete/${singleDelete}`)
      .then((ress) => {
        toast.success("User Deleted Successfully");

        setTimeout(() => {
          setSingleCheck(!singleCheck)
        }, 1200);

        setSingleCheck(false)
      })
  }

  const editfN = () => {
    setEditData(!false)

    //  setTimeout(() => {
    //    setEditData(false)
    //  }, 1000);
  }
  const closeModelFn = () => {
    setEditData(false)
    setSingleCheck(false)
  }

  // form submit
  const submitHandler = (e) => {

    e.preventDefault();
    axios.post(`https://form-backend-by-py.onrender.com/api/website/user/register/${singleDelete}`, e.target)
      .then((ress) => {

        console.log(ress.data);

      })

      .catch((error) => {
        console.log(error.response.data.message)
      })

  }

  // for check input

  // for selected inputs from checkbox
  const [selectInput, setSelectInput] = useState([])

  const checkInputFn = (e) => {
    // console.log(e.target.value); id
    // console.log(e.target.checked); true or false

    let { value, checked } = e.target
    // console.log(value,checked);


    if (checked == true) {
      setSelectInput([...selectInput, value])
    }
    else {
      let newData = selectInput.filter((v) => {
        if (value != v) {
          return v
        }

      })
      setSelectInput(newData)
    }



  }
  //  console.log("select inputs",selectInput);

  // https://form-backend-by-py.onrender.com/api/website/user/seleted-user-delete

  const selectedDeleteFn = () => {
    axios.post("https://form-backend-by-py.onrender.com/api/website/user/seleted-user-delete", selectInput)
      .then((ress) => {
        toast.success(ress.data.message);

      })
      .catch((error) => {
        console.log(error);

      })
  }

  // all input checked
  const allInputChecked = (e) => {

    console.log(e.target.checked);
    if (e.target.checked == true) {
      let getAllInputId = formData.map((v, i) => {
        return v._id

      })
      setSelectInput(getAllInputId)

    }
    else {
      setSelectInput([])
    }




  }
  console.log(selectInput);



  useEffect(() => {
    formDataFn()

  }, [formData])

  return (
    <>
      <ToastContainer />
      <div className='  h-full'>
        <div className='  '>
          <div className=' p-4 flex items-center justify-between'>
            <Link to={'/home'}>
              <div className='flex items-center gap-2 text-[19px] font-bold cursor-pointer hover:text-[#3D52A2]'><FaArrowLeftLong /> <h1>Dashboard</h1>
              </div>
            </Link>
            <div><button className='p-[6px_17px] bg-[#7291E6] rounded-lg hover:bg-[#3D52A2]  cursor-pointer text-[white]'>Confirm</button></div>

          </div >

        </div>

        {/* table  */}

        <div className=' scrollBar h-[80vh] overflow-y-scroll scrollbar-hide  '>


          <div className="relative sm:rounded-lg">
            {/* table heading start */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase bg-[white] dark:text-gray-400 sticky top-0 z-999 shadow-md ">
                <tr className=''>
                  <th scope="col" className="p-4">
                    <div className="flex items-center " >
                      <input type="checkbox" name="checkbox" id="" className='text-[21px] cursor-pointer' onChange={allInputChecked} />

                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    <div className=' hover:bg-[red]  rounded-lg hover:text-[white] cursor-pointer p-1' onClick={selectedDeleteFn}>
                      <MdDeleteOutline className='text-[21px]' />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    S No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Profile
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DOB
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qualification
                  </th>
                  <th scope="col" className="px-6 py-3">
                    address
                  </th>


                </tr>
              </thead>
              {/* table heading end */}

              {/* table data start */}
              <tbody className='  '>

                {formData.length > 0 ?
                  formData.map((v, i) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                          <div className="flex items-center">

                            <input id="checkbox-table-search-1" type="checkbox" value={v._id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
                              onChange={(e) => checkInputFn(e)} checked={selectInput.includes(v._id)} />

                          </div>
                        </td>
                        <td className="px-6 py-4 cursor-pointer" onClick={() => editBoxFn(v._id)}>
                          <FaRegEdit />
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {i + 1}
                        </th>
                        <td className="px-6 py-4">
                          <div className='w-[40px] h-[40px] '> <img src={`https://form-backend-by-py.onrender.com/uploads/${v.profilePicture}`} alt="" className='w-full h-full rounded-lg' /></div>
                        </td>
                        <td className="px-6 py-4">
                          {v.name}
                        </td>
                        <td className="px-6 py-4">
                          {v.email}
                        </td>
                        <td className="px-6 py-4">
                          {v.contact}
                        </td>
                        <td className="px-6 py-4">
                          {v.dob}
                        </td>
                        <td className="px-6 py-4">
                          {v.gender}
                        </td>
                        <td className="px-6 py-4 ">
                          {v.qualification}
                        </td>
                        <td className="px-6 py-4">
                          {v.address}
                        </td>
                          {/* formModal */}
                        <div className={`bg-[white] w-150 h-[74vh] fixed  rounded-xl p-2 shadow-sm top-40 left-[38%] z-[999] ${editdata == true ? "block" : "hidden"}`}>
                          <div className=' flex text-center'>
                            <h2 className='font-bold mx-[auto]'>Edit Your Data</h2>
                            <span className='cursor-pointer' onClick={closeModelFn}><RxCross2 /></span>
                          </div>


                          <form action="" onSubmit={submitHandler}>
                            <div className='mt-5 text-center'><input type="file" name='profilePicture' className=' rounded-lg p-4  bg-[#EEE8F5] w-[full] cursor-pointer hover:bg-[#AEBBDB]' /></div>


                            <div className='flex justify-around mt-6'>
                              <input type="text" name='name' placeholder='enter your name here' className=' border-none outline-cyan-500 h-11  bg-[#F5F5F5] p-3 mt-2 rounded-lg ' required />
                              <input type="text" name='email' placeholder='enter your email here' className=' border-none outline-cyan-500 h-11  bg-[#F5F5F5] p-3 mt-2  rounded-lg' required />
                            </div>

                            <div className='flex justify-around mt-7 items-center'>
                              <input type="text" name='contact' placeholder='enter your contact here' className=' border-none outline-cyan-500 h-11  bg-[#F5F5F5] p-3 mt-2  rounded-lg ' required />
                              <input type="date" name='dob' placeholder='enter your Date of Birth here' className=' border-none outline-cyan-500 h-11  bg-[#F5F5F5] p-3 mt-2  rounded-lg' required />
                              <div className='text-[14px]'>

                                <div className='p-3 mt-1 border-grey rounded-lg  '>
                                  <input type="radio" name='gender' value={"male"} required /> Male
                                  <input type="radio" name='gender' value={"female"} className='ml-3' required /> Female

                                </div>
                              </div>
                            </div>

                            <div className='mt-5 text-[14px]  font-sans font-medium  flex justify-around '>

                              <div className='ml-22'>

                                <label htmlFor="">
                                  <p className=' '>Qualification</p>
                                </label>
                                <div className='mt-4 flex items-center'>
                                  <input type="checkbox" name="qualification" value={"10"} id="" /><span className='ml-3'>10<sup>th</sup></span>
                                </div>

                                <div className='mt-4 flex items-center'>
                                  <input type="checkbox" name="qualification" value={"12"} id="" /><span className='ml-3'>12<sup>th</sup></span>
                                </div>

                                <div className='mt-4 flex items-center'>
                                  <input type="checkbox" name="qualification" value={"UG"} id="" /><span className='ml-3'>UG</span>
                                </div>

                                <div className='mt-4 flex items-center'>
                                  <input type="checkbox" name="qualification" value={"PG"} id="" /><span className='ml-3'>PG</span>
                                </div>
                              </div>
                              <div className='text-[14px] '>
                                <textarea name="address" id="" placeholder='Address here ' className=' resize-none outline-cyan-500 bg-[#F5F5F5] p-3 w-56 h-45 mt-2' required></textarea>
                              </div>


                            </div>
                            <div className='flex mt-6 gap-4 mx-[auto]  w-[35%]'>
                              <button type="submit" className='p-[6px_17px] bg-[#7291E6] rounded-lg hover:bg-[green]  cursor-pointer text-[white]  '>Update</button>
                              <button type="reset" className='p-[6px_17px] bg-[#7291E6] rounded-lg hover:bg-[red]  cursor-pointer text-[white]  ' onClick={singleDeleteFn}>Delete</button>
                            </div>
                          </form>
                        </div>
                        {/* form modal end */}
                      </tr>
                    )
                  })

                  :
                  <div className=' w-full mx-[auto]  mt-50 ml-95 '> <img src='https://media.tenor.com/WX_LDjYUrMsAAAAi/loading.gif' height={90} width={80} className='mx-[auto]' /></div>
                }



              </tbody>
              {/* table data end */}
            </table>

          </div>
          <div className={`overlay bg-[rgba(0,0,0,0.3)] w-[76.5%] h-[77.7vh] top-37 fixed rounded-[0px_0px_10px_0px]  ${editdata == true ? " visible" : "invisible"}`}>

          </div>
        </div>

        {/* table  end */}

        <div className={` fixed top-77 left-[44%] w-70 h-[20vh] bg-[#EEE8F5] rounded-xl p-8 shadow-lg 
          ${singleCheck != true ? "hidden " : " block"}`}>
          <div className='    flex items-center justify-around '>

            <button className='p-[7px_20px] bg-[#7291E6] text-[white] cursor-pointer rounded-lg hover:bg-[#3D52A2]' onClick={editfN}>Edit</button>
            <button className='p-[7px_15px] bg-[#7291E6] text-[white]  rounded-lg cursor-pointer hover:bg-[red]'
              onClick={singleDeleteFn}>Delete</button>
          </div>
          <div className='text-[14px] text-center mt-5 '>*for multiple delete turn on the Check box</div>
        </div>




      </div>
    </>
  )
}

