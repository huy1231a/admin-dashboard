

import Button from '@/app/common/Button'
import Search from '@/app/common/Search'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchUsers } from '@/lib/data'

const dataTable = [
    {
        title: 'Name',
    },
    {
        title: 'Email',
    },
    {
        title: 'Created',
    },
    {
        title: 'Role',
    },
    {
        title: 'Status',
    },
    {
        title: 'Action',
    },
]

// const itemTable = [
//     {
//         title: 'Name',
//         name: 'Huy',
//         email: 'huybeo1ga@gmail.com',
//         date: 'Oct 30 2023',
//         role: 'client',
//         action: 'active'
//     },
//     {
//         title: 'Name',
//         name: 'Huy',
//         email: 'huybeo1ga@gmail.com',
//         date: 'Oct 30 2023',
//         role: 'client',
//         action: 'active'
//     },
//     {
//         title: 'Name',
//         name: 'Huy',
//         email: 'huybeo1ga@gmail.com',
//         date: 'Oct 30 2023',
//         role: 'client',
//         action: 'active'
//     },
//     {
//         title: 'Name',
//         name: 'Huy',
//         email: 'huybeo1ga@gmail.com',
//         date: 'Oct 30 2023',
//         role: 'client',
//         action: 'active'
//     },
//     {
//         title: 'Name',
//         name: 'Huy',
//         email: 'huybeo1ga@gmail.com',
//         date: 'Oct 30 2023',
//         role: 'client',
//         action: 'active'
//     },
// ]

const Users = async () => {
    const users = await fetchUsers()

    // React.useEffect(() => (
    // ), [users])

    return (
        <div className='bg-slate-900 p-5 rounded-xl mt-5'>
            <div className='flex justify-between items-center'>
                <Search
                    placo='Search user...'
                />
                <Link href='/dashboard/users/addUser'>
                    <Button
                        title='Add New'
                        styles='p-3 bg-gray-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                    />
                </Link>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        {dataTable.map((item) => (
                            <>
                                <td className='p-3'>
                                    {item.title}
                                </td>
                            </>
                        ))}

                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => (
                        <>
                            <tr key={users.id}>
                                <td className='p-3'>
                                    <div className='flex gap-3 items-center'>
                                        <Image style={{ borderRadius: '50%' }} className='object-cover' src={users.img} alt='logo-user' width={40} height={40} />
                                        {users.username}
                                    </div>
                                </td>
                                <td className='p-3'>
                                    <span>{users.email}</span>
                                </td>
                                <td className='p-3'>
                                    <span>Oct 30 2023</span>
                                </td>
                                <td className='p-3'>
                                    <span>{users.isAdmin ? 'Admin' : 'Client'}</span>
                                </td>
                                <td className='p-3'>
                                    <span>{users.isActive ? 'Passive' : 'UnPassive'}</span>
                                </td>
                                <td className='p-3'>
                                    <div className='flex gap-2 items-center'>
                                        <Link href={'/'}>
                                            <Button
                                                title='View'
                                                styles='p-2 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                            />
                                        </Link>
                                        <Button
                                            title='Delete'
                                            styles='p-2 bg-red-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                        />
                                    </div>

                                </td>
                            </tr>
                            {/* <tr>
                                <td className='p-3'>
                                    <div className='flex gap-3 items-center'>
                                        <Image style={{ borderRadius: '50%' }} className='object-cover' src='/noavatar.png' alt='logo-user' width={40} height={40} />
                                        Huy
                                    </div>
                                </td>
                                <td className='p-3'>
                                    <span>taolahuy2k0@gmail.com</span>
                                </td>
                                <td className='p-3'>
                                    <span>Oct 30 2023</span>
                                </td>
                                <td className='p-3'>
                                    <span>Client</span>
                                </td>
                                <td className='p-3'>
                                    <span>Passive</span>
                                </td>
                                <td className='p-3'>
                                    <div className='flex gap-2 items-center'>
                                        <Link href={'/'}>
                                            <Button
                                                title='View'
                                                styles='p-2 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                            />
                                        </Link>
                                        <Button
                                            title='Delete'
                                            styles='p-2 bg-red-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                        />
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className='p-3'>
                                    <div className='flex gap-3 items-center'>
                                        <Image style={{ borderRadius: '50%' }} className='object-cover' src='/noavatar.png' alt='logo-user' width={40} height={40} />
                                        Huy
                                    </div>
                                </td>
                                <td className='p-3'>
                                    <span>taolahuy2k0@gmail.com</span>
                                </td>
                                <td className='p-3'>
                                    <span>Oct 30 2023</span>
                                </td>
                                <td className='p-3'>
                                    <span>Client</span>
                                </td>
                                <td className='p-3'>
                                    <span>Passive</span>
                                </td>
                                <td className='p-3'>
                                    <div className='flex gap-2 items-center'>
                                        <Link href={'/'}>
                                            <Button
                                                title='View'
                                                styles='p-2 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                            />
                                        </Link>
                                        <Button
                                            title='Delete'
                                            styles='p-2 bg-red-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                        />
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className='p-3'>
                                    <div className='flex gap-3 items-center'>
                                        <Image style={{ borderRadius: '50%' }} className='object-cover' src='/noavatar.png' alt='logo-user' width={40} height={40} />
                                        Huy
                                    </div>
                                </td>
                                <td className='p-3'>
                                    <span>taolahuy2k0@gmail.com</span>
                                </td>
                                <td className='p-3'>
                                    <span>Oct 30 2023</span>
                                </td>
                                <td className='p-3'>
                                    <span>Client</span>
                                </td>
                                <td className='p-3'>
                                    <span>Passive</span>
                                </td>
                                <td className='p-3'>
                                    <div className='flex gap-2 items-center'>
                                        <Link href={'/'}>
                                            <Button
                                                title='View'
                                                styles='p-2 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                            />
                                        </Link>
                                        <Button
                                            title='Delete'
                                            styles='p-2 bg-red-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                        />
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className='p-3'>
                                    <div className='flex gap-3 items-center'>
                                        <Image style={{ borderRadius: '50%' }} className='object-cover' src='/noavatar.png' alt='logo-user' width={40} height={40} />
                                        Huy
                                    </div>
                                </td>
                                <td className='p-3'>
                                    <span>taolahuy2k0@gmail.com</span>
                                </td>
                                <td className='p-3'>
                                    <span>Oct 30 2023</span>
                                </td>
                                <td className='p-3'>
                                    <span>Client</span>
                                </td>
                                <td className='p-3'>
                                    <span>Passive</span>
                                </td>
                                <td className='p-3'>
                                    <div className='flex gap-2 items-center'>
                                        <Link href={'/'}>
                                            <Button
                                                title='View'
                                                styles='p-2 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                            />
                                        </Link>
                                        <Button
                                            title='Delete'
                                            styles='p-2 bg-red-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
                                        />
                                    </div>

                                </td>
                            </tr> */}
                            </>
                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default Users

