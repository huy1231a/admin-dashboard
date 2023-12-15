import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Button from '../common/Button';

const Login = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-48 sm:mx-auto sm:w-full sm:max-w-sm bg-slate-800 rounded-lg p-6">
        <div className="">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">Login</h2>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-white">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-white">Password</label>
              <div className="text-sm">
                <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
          <div>
            <Link href={'/dashboard'}>
              <Button
                title='Back'
                styles='mb-2 flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              />
            </Link>
          </div>


        </form>
      </div>
    </div>
  );
}

export default Login