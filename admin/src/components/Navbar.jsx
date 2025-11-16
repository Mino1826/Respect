import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-1 px-[3%] justify-between'>
        <img className='w-[max(15%,80px)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white py-2 px-5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm '> خروج </button>
    </div>
  )
}

export default Navbar