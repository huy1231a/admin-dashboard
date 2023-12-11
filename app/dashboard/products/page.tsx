import Button from '@/app/common/Button'
import Search from '@/app/common/Search'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

const Products = () => {

  const titleTitleTable = [
    {
      title: 'Title',
    },
    {
      title: 'Description',
    },
    {
      title: 'Price',
    },
    {
      title: 'Created At',
    },
    {
      title: 'Stock',
    },
    {
      title: 'Action',
    }
  ]
  return (
    <div className='bg-slate-900 p-5 rounded-xl mt-5'>
      <div className='flex justify-between items-center'>
        <Search
          placo='Search Products...'
        />
        <Link href={'/dashboard/user/add/products'}>
          <Button
            title='Add Product'
            styles='p-3 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:font-bold'
          />
        </Link>
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            {titleTitleTable.map((item) => (
              <>
                <td className='p-3'>
                  {item.title}
                </td>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-3'>
              <div className='flex gap-3 items-center'>
                <Image style={{ borderRadius: '50%' }} className='object-cover' src='/noavatar.png' alt='logo-user' width={40} height={40} />
                IPhone
              </div>
            </td>
            <td className='p-3'>
              <span>15 Pro Max</span>
            </td>
            <td className='p-3'>
              <span>$2300</span>
            </td>
            <td className='p-3'>
              <span>02-03-2023</span>
            </td>
            <td className='p-3'>
              <span>12</span>
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
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Products