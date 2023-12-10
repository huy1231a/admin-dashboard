import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className='fixed'>
            <div className='p-5 pb-6 rounded-xl mb-5 relative bg-gradient-to-r from-slate-800'>
                <div className='absolute right-0 bottom-0 w-1/2 h-1/2'>
                    <Image className='object-contain opacity-20' src="/astronaut.png" alt="" fill />
                </div>
                <div className='flex flex-col gap-6'>
                    <span className='font-bold text-lg'>🔥 Available Now</span>
                    <h3 className='font-medium text-xs'>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className='font-medium text-base'>Takes 4 minutes to learn</span>
                    <p className='text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className='flex p-2 items-center gap-3 max-w-max bg-blue-500 text-white border-none rounded-md cursor-pointer hover:p-3'>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className='p-5 pb-6 rounded-xl mb-5 relative bg-gradient-to-r from-slate-800'>
                <div className='absolute right-0 bottom-0 w-1/2 h-1/2'>
                    <Image className='object-contain opacity-20' src="/astronaut.png" alt="" fill />
                </div>
                <div className='flex flex-col gap-6'>
                    <span className='font-bold text-lg'>🚀 Coming Soon</span>
                    <h3 className='font-medium text-xs'>
                        New server actions are available, partial pre-rendering is coming
                        up!
                    </h3>
                    <span className='font-medium text-base'>Boost your productivity</span>
                    <p className='text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className='flex p-2 items-center gap-3 max-w-max bg-blue-500 text-white border-none rounded-md cursor-pointer hover:p-3'>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;