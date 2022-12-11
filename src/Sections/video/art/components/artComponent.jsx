import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax';

const ArtComponent = () => {
    return (
        <div className='relative w-6/12 md:block hidden pr-10 max-w-[300px]'>
            <img src='./items/video/art/SS.png' alt=' ' className='absolute right-[50px] top-[100px]' />
            <img src='./items/video/art/circle.png' alt=' ' className='absolute right-[110px] top-[160px]' />
        </div>
    )
}

export default ArtComponent