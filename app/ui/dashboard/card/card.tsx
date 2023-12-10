import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
    return (
        <div className='flex p-5 bg-slate-900 gap-5 rounded-xl cursor-pointer w-full hover:bg-slate-600'>
            <MdSupervisedUserCircle size={24} />
            <div className='flex flex-col gap-5'>
                <span>Total Users</span>
                <span className='text-2xl font-medium'>10.298</span>
                <span className='text-sm'>
                    <span><span className='text-lime-400'>12%</span> more than press</span>
                </span>
            </div>
        </div>
    )
}

export default Card