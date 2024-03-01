import React from 'react'

const SlideShowCard = ({heading, content}) => {
  return (
    <div className='p-10 sm:p-36 transition-opacity opacity-100 bg-gray-100 border-2 border-visionBlue'> 
        {/* heading */}
    <div className=' text-visionGold text-3xl sm:text-4xl'>{heading}</div>
        {/* content */}
        <div className='text-black text-xs sm:text-xl'>{content}</div>
    </div>
  )
}

export default SlideShowCard