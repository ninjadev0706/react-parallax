import React from 'react'

import RockImage from './components/rockImage'
import RockVideo from './components/rockVideo'

const Rock = () => {
    return (
        <div className='lg:flex hidden mb-[150px] justify-center w-[80%]'>
            <RockImage />
            <RockVideo />
        </div>
    )
}

export default Rock