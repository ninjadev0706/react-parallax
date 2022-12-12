import React from 'react'

import ArtComponent from './components/artComponent'
import ArtVideo from './components/artVideo'
import './styles.css'

const Art = () => {
    return (
        <div className='md:flex mb-20 justify-center md:gap-[100px] xl:gap-[200px] w-full'>
            <ArtComponent />
            <ArtVideo />
        </div>
    )
}

export default Art