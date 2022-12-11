import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax';

const DancingImage = () => {
    return (
        <div className='md:block hidden w-6/12'>
            <img src='./items/video/dancing/dancer.png' alt=' ' className='m-auto' />
            <p className='text-[17px] max-w-[300px] m-auto pl-[20px]'>Got craft? Show it to your fans and followers. We love watching pottery!</p>
        </div>
    )
}

export default DancingImage