import React from 'react'

import DancingImage from './components/dancingImage'
import DancingText from './components/dancingText'

const Dancing = () => {
    return(
        <div className='md:flex mb-20 items-center justify-center md:gap-[100px] xl:gap-[100px] md:w-[80%] m-auto'>
            <DancingImage />
            <DancingText />
        </div>
    )
}

export default Dancing