import { fetchProduct } from '@/lib/data';
import Link from 'next/link'
import React from 'react'

const AddProducts = () => {
  
  
  return (
    <div className='bg-slate-800 p-5 rounded-xl mt-5'>
      <form className="texx">
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="=title"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder=''-gray-400 text-white"
            placeholder="Iphone 15 Pro Max"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="Price"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder=''-gray-400 text-white"
            placeholder="...$"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-white"
          >
            Stock
          </label>
          <input
            type="number"
            id="Stock"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder=''-gray-400 text-white"
            placeholder="10"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-white"
          >
            Color
          </label>
          <input
            type="text"
            id="color"
            className=" text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="Blue Yellow"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-white"
          >
            Size
          </label>
          <input
            type="text"
            id="Size"
            className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="356G"
            required
          />
        </div>
        <div className='mb-6'>
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
        <div className="mb-6">
          <label className="block mb-2 mt-2 text-sm font-medium text-white">
            Description
          </label>
          <textarea id="message" rows={4} className="block p-2.5 rounded-lg w-full text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Write your thoughts here...">
          </textarea>
        </div>
        <button
          type="submit"
          className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-700 hover:bg-slate-900 w-full"
        >
          Submit
        </button>
        <Link href={'/dashboard/products'}>
          <button
            type="submit"
            className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-400 hover:bg-slate-900 w-full mt-2"
          >
            Back
          </button>
        </Link>
      </form>
    </div>
  )
}

export default AddProducts