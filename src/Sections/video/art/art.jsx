import React from 'react'

import ArtComponent from './components/artComponent'
import ArtVideo from './components/artVideo'
import './styles.css'

const Art = () => {
    return (
        <div className='lg:flex mb-20 justify-center xl:gap-[100px] lg:gap-[50px] w-full'>
            <ArtComponent />
            <ArtVideo />
        </div>
    )
}

export default Art