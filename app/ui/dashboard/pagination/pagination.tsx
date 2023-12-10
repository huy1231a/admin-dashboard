import React from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = () => {
    return (
        <div className='flex p-3 justify-between'>
            <button>
                <GrFormPrevious />
            </button>
            <div className='text-xs'>1</div>
            <button>
                <GrFormNext />
            </button>
        </div>

    )
}

export default Pagination