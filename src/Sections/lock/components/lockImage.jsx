import React from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax';

const LockImage = () => {
    return (
        <div className='md:absolute md:right-[0] md:block flex justify-center mt-[40px]'>
            <img src='./items/lock/lockgroup.png' alt=' ' className='max-w-[400px]' />
        </div>
    )
}

export default LockImage