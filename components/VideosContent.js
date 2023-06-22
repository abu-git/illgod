import React from 'react'
import ThrobbingVideo from './ThrobbingVideo'
import RespirationVideo from './RespirationVideo'

function VideosContent() {
    return (
        <div className='bg-[#d6e4e4] py-14 px-8 md:px-20 lg:px-72 md:mt-16 lg:mt-20 w-full'>
            <ThrobbingVideo />
            <RespirationVideo />
        </div>
    )
}

export default VideosContent