import React from 'react'

import ArtComponent from './components/artComponent'
import ArtVideo from './components/artVideo'
import './styles.css'

const Art = () => {
    return (
        <div className='lg:flex mt-20 mb-40 md:my-60 justify-center gap-[50px] w-full'>
            <ArtComponent />
            <ArtVideo />
        </div>
    )
}

export default Art