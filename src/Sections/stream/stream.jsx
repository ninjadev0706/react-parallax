import React from 'react'

import StreamItems from './components/streamItems'
import StreamText from './components/streamText'

const Stream = () => {
    return (
        <div className='md:mt-[300px] mt-[100px] md:mb-[100px] mb-[50px] md:hidden block'>
            <StreamText />
            <StreamItems />
        </div>
    )
}

export default Stream