import React from 'react'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md";
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import Button from '@/app/common/Button';
import Link from 'next/link';

const SideBar = () => {
    const menuItems = [
        {
            title: "Pages",
            list: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />,
                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle />,
                },
                {
                    title: "Products",
                    path: "/dashboard/products",
                    icon: <MdShoppingBag />,
                },
                {
                    title: "Transactions",
                    path: "/dashboard/transaction",
                    icon: <MdAttachMoney />,
                },
            ],
        },
        {
            title: "Analytics",
            list: [
                {
                    title: "Revenue",
                    path: "/dashboard/revenue",
                    icon: <MdWork />,
                },
                {
                    title: "Reports",
                    path: "/dashboard/reports",
                    icon: <MdAnalytics />,
                },
                {
                    title: "Teams",
                    path: "/dashboard/teams",
                    icon: <MdPeople />,
                },
            ],
        },
        {
            title: "User",
            list: [
                {
                    title: "Settings",
                    path: "/dashboard/settings",
                    icon: <MdOutlineSettings />,
                },
                {
                    title: "Help",
                    path: "/dashboard/help",
                    icon: <MdHelpCenter />,
                },
            ],
        },
    ];
    return (
        <div className='sticky top-10 h-screen'>

            <div className='flex items-center gap-5 mb-5 mt-3 ml-2'>
                <Image className='object-cover' src='/noavatar.png' alt="" width={40} height={40} style={{ borderRadius: '50%' }} />
                <div className='flex flex-col'>
                    <span className='font-medium cursor-pointer'>Huy Beo</span>
                    <span className='text-xs'>Admin</span>
                </div>
            </div>
            <ul className='list-none ml-4'>
                {menuItems.map((item) => (
                    <li key={item.title}>
                        <span className='font-bold text-sm mt-2'>{item.title}</span>
                        {item.list.map((total) => (
                            <MenuLink path={total.path} title={total.title} key={item.title} icon={total.icon} />
                        ))}
                    </li>
                ))}
            </ul>

            <Link href={'/login'}>
                <Button
                    title='Logout'
                    styles='p-5 mt-1 mb-0 flex items-center gap-3 cursor-pointer rounded-xl bg-none border-none text-white w-full hover:bg-slate-700'
                    icon={<MdLogout />}
                />
            </Link>
        </div>
    )
}

export default SideBar