import Image from 'next/image'
import React from 'react'
import './style.css'

const transaction = () => {
    const cancel = 'cancel'
    const done = 'done'
    return (
        <div className='bg-slate-900 p-5 rounded-xl'>
            <h2 className='mb-5 font-medium text-gray-500'>Data of Transactions</h2>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='p-3'>Name</td>
                        <td className='p-3'>Status</td>
                        <td className='p-3'>Date</td>
                        <td className='p-3'>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image src={'/noavatar.png'} alt='logo' width={40} height={40} className='object-cover' style={{ borderRadius: '50%' }} />
                                Huy
                            </div>
                        </td>
                        <td className='p-3'>
                            <span className={`rounded-md p-1 text-sm ${cancel ? 'bg-red-500' : 'bg-purple-400'}`}>Cancelled</span>
                        </td>
                        <td className='p-3'>
                            <span className=''>10/12/2023</span>
                        </td>
                        <td className='p-3'>
                            <span className=''>900$</span>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image src={'/noavatar.png'} alt='logo' width={40} height={40} className='object-cover' style={{ borderRadius: '50%' }} />
                                Huy
                            </div>
                        </td>
                        <td className='p-3'>
                            <span className={`rounded-md p-1 text-sm ${done ? 'bg-gray-400' : 'bg-purple-400'}`}>Done</span>
                        </td>
                        <td className='p-3'>
                            <span className=''>10/12/2023</span>
                        </td>
                        <td className='p-3'>
                            <span className=''>900$</span>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image src={'/noavatar.png'} alt='logo' width={40} height={40} className='object-cover' style={{ borderRadius: '50%' }} />
                                Huy
                            </div>
                        </td>
                        <td className='p-3'>
                            <span className='rounded-md p-1 text-sm bg-purple-400'>Pending</span>
                        </td>
                        <td className='p-3'>
                            <span className=''>10/12/2023</span>
                        </td>
                        <td className='p-3'>
                            <span className=''>900$</span>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default transaction