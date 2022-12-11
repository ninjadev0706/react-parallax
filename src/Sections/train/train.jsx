import React from 'react'

import TrainText from './components/trainText'
import TrainMobile from './components/trainMobile'

const Train = () => {
    return (
        <div className='items-center md:flex hidden relative gap-[100px] m-auto max-w-[1000px]'>
            <TrainText />
            <TrainMobile />
            {/* <img src='./items/train/train.png' alt=' ' className='-ml-[15%]' />
            <img src='./items/train/stick.png' alt=' ' className='-ml-[15%] absolute right-[22%] w-[50px] lg:w-[90px] xl:w-[130px] 2xl:w-[170px]' />
            <img src='./items/train/globe.png' alt=' ' className='absolute right-[25%] top-[40%]' /> */}
        </div>
    )
}

export default Train