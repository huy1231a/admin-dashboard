import Button from '@/app/common/Button'
import Search from '@/app/common/Search'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchProduct } from '@/lib/data'

const Products = async () => {

  const product = await fetchProduct();
  console.log('product' ,product);
  

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
        <Link href={'/dashboard/products/addProducts'}>
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
          {product.map((data) => (
            <>
            <pre>{data.descrip}</pre>
              <tr key={data.id}>
                <td className='p-3'>
                  <div className='flex gap-3 items-center'>
                    <Image style={{ borderRadius: '50%' }} className='object-cover' src='/noavatar.png' alt='logo-user' width={40} height={40} />
                    {data.title}
                  </div>
                </td>
                <td className='p-3'>
                  {data.desc}
                </td> 
                <td className='p-3'>
                  <span>{`$${data.price}`}</span>
                </td>
                <td className='p-3'>
                  <span>02-03-2023</span>
                </td>
                <td className='p-3'>
                  <span>{data.stock}</span>
                </td>
                <td className='p-3'>
                  <div className='flex gap-2 items-center'>
                    <Link href={`/dashboard/products/${data.id}`}>
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
            </>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Products