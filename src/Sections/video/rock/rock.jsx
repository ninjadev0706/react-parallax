import React from 'react'

import RockImage from './components/rockImage'
import RockVideo from './components/rockVideo'

const Rock = () => {
    return (
        <div className='md:flex hidden mb-20 justify-center gap-[100px] lg:gap-[150px] xl:gap-[200px] 2xl:gap-[250px] w-full'>
            <RockImage />
            <RockVideo />
        </div>
    )
}

export default Rock