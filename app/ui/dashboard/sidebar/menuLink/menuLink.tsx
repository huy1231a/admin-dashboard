import Link from 'next/link';
import React from 'react'


interface Item {
    icon: any
    title: string;
    path: string;
    margin: boolean | string;
}
const MenuLink = (item: Item) => {
  return (
    <Link href={item.path} className={`${item.margin && 'mt-5'} p-5 flex items-center gap-3 hover:bg-slate-700 rounded-xl`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink