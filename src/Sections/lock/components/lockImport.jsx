import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax';

const LockImport = () => {
    return(
        <div className='relative md:top-[300px] md:ml-[150px] md:max-w-[600px] w-[100%]'>
            <p className='font-drukBold 2xl:text-[65px] md:text-[40px] text-[30px] font-bold'>Lock-up your handle now!</p>
            <p className='text-[17px] font-bold mt-[30px]'>Select a username</p>
            <div className='flex w-[100%] relative items-center gap-[10px]'>
                <input type='text' className='lock_input w-[100%] text-base outline-none' placeholder='/username' />
                <span className='absolute'>billa.net</span>
                <img src='./items/lock/Path.svg' alt=' ' className='' />
            </div>
        </div>
    )
}

export default LockImport