import React from 'react'

import Information_Page from './Information_Page'
import { Outlet } from 'react-router-dom'
import Leftside from './Leftside'

export default function Layout() {
    return (
        <div className=' grid w-[1470px] h-[95vh] mt-6 grid-cols-[20%_80%]  mx-[auto] rounded-xl bg-[white] shadow-xl'>
            <div >
                <Leftside/>
                
            </div>

            <div><Outlet /> </div>
        </div>
    )
}
