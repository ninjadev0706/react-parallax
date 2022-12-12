import React from 'react'

import StreamItems from './components/streamItems'
import StreamText from './components/streamText'

const Stream = () => {
    return (
        <div className='mt-[200px] md:mt-[300px] md:mb-[100px] mb-[150px] md:hidden block'>
            <StreamText />
            <StreamItems />
        </div>
    )
}

export default Stream