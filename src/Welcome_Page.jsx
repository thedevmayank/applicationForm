import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';



export default function Welcome_Page() {

    const [inputValue, setValue] = useState("")
    console.log(inputValue);

    const handleChange = (e) => {
        setValue(e.target.value); // Updates state with input's value
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', inputValue); // Use inputValue as needed
    };

    let name = "";

    return (
        <>
            <div className='max-w-[30%] bg-[white] rounded-xl  mx-[auto] mt-[13%] p-[50px_14px] flex flex-col justify-between shadow-lg'>

                <div>
                    <h2 className='uppercase font-bold text-[25px] text-center'>welcome {inputValue == "" ? "user" : inputValue}</h2>
                    <h2 className='text-[28px] capitalize   text-center' > {name != inputValue ? "please Go ahead" : "plase enter your name"}</h2>
                </div>
                <div className=' p-3 mt-4 text-[black] flex flex-col' >
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder="enter here" value={inputValue} onChange={handleChange} required className='w-full border-none outline-none shadow-lg text-center p-2 font-bold text-[17px] ' />
                        {name!=inputValue ? 
                        
                        <Link to={"/home"}>
                         <button className='bg-[#3D52A2] p-[7px_28px] flex gap-2 items-center text-[18px] text-white mx-[auto] mt-8 rounded-[3px] hover:bg-[blue] cursor-pointer font-bold duration-[1.3s] '>Pass <span className='animate-pulse'> <FaArrowRightLong /></span>
                         </button>
                     </Link>
                        
                        : 
                        <button className='bg-[#3D52A2] p-[7px_28px] flex gap-2 items-center text-[18px] text-white mx-[auto] mt-8 rounded-[3px] hover:bg-[blue] cursor-pointer font-bold duration-[1.3s] '>Pass <span className='animate-pulse'> <FaArrowRightLong /></span>
                         </button>
                        }
                       
                    
                    </form>
                </div>
            </div>

        </>
    )
}
