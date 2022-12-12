import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax';

const HeroText = () => {
    return (
        <div className='md:w-5/12 2xl:pl-[100px]'>
            <p className='font-drukBold leading-[1.2] 2xl:text-[55px] md:text-[40px] text-[30px] font-black mb-[30px] 2xl:mb-[20px] mt-[30px] md:mt-0'>Creators earn crypto, fans earn creds.</p>
            <p className='mb-[15px] 2xl:mb-[20px] hidden md:block text-[17px] 2xl:text-[20px] font-bold'>The web3 way of taking control of your content monetization.</p>
            <div className='app-wrap'>
                <img src='./items/apple.png' alt=' ' className='h-[30px]' />
                <p className='app-content'>Get the app</p>
            </div>
        </div>
    )
}

export default HeroText