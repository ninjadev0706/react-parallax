import React from 'react'

import DancingVideo from './components/dancingVideo'
import DancingText from './components/dancingText'

const Dancing = () => {
    return(
        <div className='lg:flex mb-20 items-center justify-center md:w-[80%] m-auto'>
            <DancingVideo />
            <DancingText />
        </div>
    )
}

export default Dancing