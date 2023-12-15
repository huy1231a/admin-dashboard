import React from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = () => {
    return (
        <div className='flex p-3 justify-center gap-3'>
            <button className='hover:bg-slate-400'>
                <GrFormPrevious />
            </button>
            <div className='text-sm'>1</div>
            <button className='hover:bg-slate-400'>
                <GrFormNext />
            </button>
        </div>

    )
}

export default Pagination