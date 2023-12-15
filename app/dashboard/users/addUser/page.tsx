import Button from "@/app/common/Button";

import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import Link from "next/link";

const AddUserPage = () => {
  return (
    <div className='bg-slate-800 p-5 rounded-xl mt-5'>
      <form className="texx">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Created"
              className="block mb-2 text-sm font-medium text-white"
            >
              Created
            </label>
            <input
              type="date"
              id="created"
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-white"
            >
              Role
            </label>
            <select name="" id="" className='text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white bg'>
              <option value="">Client</option>
              <option value="">Banker</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-white"
            >
              Status
            </label>
            <select name="" id="" className='text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white bg'>
              <option value="">Passive</option>
              <option value="">Unpassive</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder=''-gray-400 text-white"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className=" text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 mt-2 text-sm font-medium text-white">
            Address
          </label>
          <textarea id="message" rows={4} className="block p-2.5 rounded-lg w-full text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Write your thoughts here...">
          </textarea>
        </div>
        <button
          type="submit"
          className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-700 hover:bg-slate-900 focus:ring-blue-800 w-full"
        >
          Submit
        </button>
        <Link href={'/dashboard/users'}>
          <button
            type="submit"
            className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-700 hover:bg-slate-900 w-full mt-2"
          >
            Back
          </button>
        </Link>

      </form>

    </div>
  );
};

export default AddUserPage;