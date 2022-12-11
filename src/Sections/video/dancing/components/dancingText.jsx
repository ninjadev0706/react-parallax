import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax';

const DancingText = () => {
    return (
        <div className='md:w-6/12 relative md:mt-[0] p-[20px] mt-[100px]'>
            <div className='flex mb-5'>
                <div className='flex'>
                    <img src='./items/video/dancing/eth.png' alt=' ' className='w-[100px] h-[100px]' />
                    <img src='./items/video/dancing/metamask.png' alt=' ' className='w-[100px] h-[100px]' />
                </div>
                <img src='./items/video/dancing/flow.png' alt=' ' className='absolute right-[-100px] bottom-[-500px] md:top-[-100px]' />
            </div>
            <p className='font-drukBold leading-[1.3] md:text-[35px] text-[30px] font-black mb-[30px] 2xl:mb-[20px] mt-[30px] md:mt-0'>Crypto is here to stay.</p>
            <p className='md:block hidden text-[17px]'>We are doing this to eliminate the middle man, so case in point, we take zero commission, your earning are yours, fully.</p>
        </div>
    )
}

export default DancingText