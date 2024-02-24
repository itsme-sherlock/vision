import React from 'react'

const SlideShowCard = ({heading, content}) => {
  return (
    <div className='p-36'> 
        {/* heading */}
    <div className=' text-visionGold text-4xl'>{heading}</div>
        {/* content */}
        <div className='text-white'>{content}</div>
    </div>
  )
}

export default SlideShowCard