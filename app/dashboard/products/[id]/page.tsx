import Button from '@/app/common/Button'
import React from 'react'
import Image from 'next/image'
import { fetchProduct } from '@/lib/data';
import Link from 'next/link';

const InforProduct = () => {

  // const product = await fetchProduct();

  const data = [
    {
      title: 'Price',
      name: '$4000'
    },
    {
      title: 'Stock',
      name: '15'
    },
    {
      title: 'Color',
      name: 'Red'
    },
    {
      title: 'Size',
      name: '1T'
    },
    {
      title: 'Category',
      name: 'Bad'
    },
  ]
  return (
    <div className='flex gap-12 mt-5'>
      <div className='flex-1 p-5 rounded-lg font-bold bg-slate-800 text-white'>
        <div className='relative overflow-hidden mb-5'>
          <Image
            src={'/noavatar.png'}
            alt='logo-user'
            width={350}
            height={350}
            className=' rounded-xl '
          />
        </div>
        <div className='p-4'>
          <span className='text-sm font-medium text-gray-400'>Title:</span> <span>Iphone 15 Pro Max</span>
          {data.map((item) => (
            <>
              <div className='mt-5'>
                <span className='text-sm font-medium text-gray-400 '>{item.title}:</span> <span>{item.name}</span>
              </div>
            </>
          ))}
          {/* <div className='mt-5'>
            <span className='text-sm font-medium text-gray-400 '>Email:</span> <span>taolahuy2k0@gmail.com</span>
          </div> */}
          {/* <div className='mt-5'>
            <span className='text-sm font-medium text-gray-400 '>Phone:</span> <span>0367835670</span>
          </div>
          <div className='mt-5'>
            <span className='text-sm font-medium text-gray-400 '>Adrress:</span> <span>47/2/5 Bùi Đình Túy</span>
          </div>
          <div className='mt-5'>
            <span className='text-sm font-medium text-gray-400 '>IsAdmin:</span> <span>Yes</span>
          </div>
          <div className='mt-5'>
            <span className='text-sm font-medium text-gray-400 '>IsAactive:</span> <span>Yes</span>
          </div> */}
        </div>
      </div>
      <div className='bg-slate-800 rounded-lg p-5 text-white' style={{ flex: 3 }}>
        <form action="">
          <div className='mb-5'>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white outline-none"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Price
              </label>
              <input
                type="number"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="$3.000"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Stock
              </label>
              <input
                type="number"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="1-2-3"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Color
              </label>
              <input
                type="text"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="Blue..."
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Size
              </label>
              <input
                type="text"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white bg"
                placeholder="Small"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Category
              </label>
              <select name="" id="" className='text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white bg'>
                <option value="">Kitchet</option>
                <option value="">Bad</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 mt-2 text-sm font-medium text-white">
                Description
              </label>
              <textarea id="message" rows={4} className="block p-2.5 rounded-lg w-full text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Write your thoughts here...">
              </textarea>
            </div>
          </div>
        </form>

        <Button
          title='Updated'
          styles='w-full rounded-xl bg-gray-900 text-white p-4 text-center font-medium text-sm hover:bg-gray-400'
        />
        <Link href={'/dashboard/products'}>
          <Button
            title='Back'
            styles='w-full rounded-xl bg-gray-900 text-white p-4 text-center font-medium text-sm hover:bg-gray-400 mt-2'
          />
        </Link>
      </div>
    </div >
  )
}

export default InforProduct