import React from 'react'
import Image from 'next/image'
import Button from '@/app/common/Button'
import { fetchUsers } from '@/lib/data'

const InforUser = async () => {
  const users = await fetchUsers()

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
          {users.map((data) => (
            <>
              <div>
                <span className='text-sm font-medium text-gray-400'>UserName:</span> <span>{data.username}</span>
              </div>
              <div className='mt-5'>
                <span className='text-sm font-medium text-gray-400 '>Email:</span> <span>{data.email}</span>
              </div>
              <div className='mt-5'>
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
              </div>
            </>
          ))}
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
                UserName
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
                Email
              </label>
              <input
                type="email"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="*********"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Phone
              </label>
              <input
                type="number"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder="+84....."
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                Address
              </label>
              <input
                type="text"
                id="last_name"
                className="text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white bg"
                placeholder="HCM"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                IsAdmin?
              </label>
              <select name="" id="" className='text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white bg'>
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 mt-2 text-sm font-medium text-white"
              >
                IsAactive?
              </label>
              <select name="" id="" className='text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white bg'>
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
          </div>
        </form>

        <Button
          title='Updated'
          styles='w-full rounded-xl bg-gray-900 text-white p-4 text-center font-medium text-sm hover:bg-gray-400'
        />
      </div>
    </div >
  )
}

export default InforUser