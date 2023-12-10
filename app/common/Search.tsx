import React from 'react'
import { MdSearch } from 'react-icons/md'

interface Prop {
    placo: string
}

const Search = (prop: Prop) => {
    return (
        <div className='flex items-center gap-3 bg-slate-800 p-3 rounded-xl w-max'>
            <MdSearch />
            <input type='text' placeholder={prop.placo} className='bg-transparent text-white outline-none' />
        </div>
    )
}

export default Search