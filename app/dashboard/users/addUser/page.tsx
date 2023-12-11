import Button from '@/app/common/Button'
import React from 'react'

const AddUser = () => {
  return (
    <div className='bg-slate-800 p-5 rounded-xl mt-5 text-white'>
      <form action="" className='flex flex-wrap justify-between'>
        <input type="text" placeholder='title' name="" id="" required className='p-8 w-2/4 bg-transparent rounded-md mb-8' />
        <select name='cat' id='cat' className='p-8 bg-transparent rounded-md mb-8 '>
          <option value="genaral" className='bg-red'>Chose a Category</option>
          <option value="kitchet">Kitchen</option>
          <option value="phone">SmartPhone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder='price' name="price" id="" required className='p-8 w-2/4 bg-transparent rounded-md mb-8' />
        <input type="number" placeholder='stock' name="stock" id="" required className='p-8 w-2/4 bg-transparent rounded-md mb-8' />
        <input type="text" placeholder='color' name="color" id="" required className='p-8 w-2/4 bg-transparent rounded-md mb-8' />
        <input type="text" placeholder='size' name="size" id="" required className='p-8 w-2/4 bg-transparent rounded-md mb-8' />

        <textarea name="desc" id="desc" cols={30} rows={16} className='w-full'>

        </textarea>

        <Button
          title='Submit'
        />
      </form>
    </div>
  )
}

export default AddUser