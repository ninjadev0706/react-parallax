import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax';

const LockImport = () => {
    return(
        <div className='relative md:top-[300px] md:ml-[150px] px-[10%] max-w-[600px]'>
            <p className='font-drukBold 2xl:text-[55px] text-[40px] font-bold'>Lock-up your handle now!</p>
            <p className='text-[17px] font-bold my-[20px]'>Select a username</p>
            <div className='flex justify-center relative items-center gap-[30px]'>
                <input type='text' className='lock_input w-[100%] text-base outline-none' placeholder='/username' />
                <span className='absolute left-[10px]'>billa.net</span>
                <img src='./items/lock/Path.svg' alt=' ' className='w-12' />
            </div>
        </div>
    )
}

export default LockImport