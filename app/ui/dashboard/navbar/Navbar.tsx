"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {
    const pathName = usePathname()
  return (
    <div className='flex justify-between items-center p-5 bg-slate-600 rounded-xl relative'>
        <div className='font-bold capitalize'>
            {pathName.split("/").pop()}
        </div>
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-3 bg-slate-800 p-3 rounded-xl'>
                <MdSearch />
                <input type='text' placeholder='Search...' className='bg-transparent text-white outline-none' />
            </div>
            <div className='flex items-center gap-5 cursor-pointer'>
                <MdOutlineChat size={20} />
                <MdNotifications size={20} />
                <MdPublic size={20} />
            </div>
        </div>
    </div>
  )
}

export default Navbar