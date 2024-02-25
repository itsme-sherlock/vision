import React from 'react'


const Cards = ({heading,csvg,content}) => {
  return (
    <div className='bg-white w-80  p-5'>
        {/* card heading  */}
        <div className='text-visionGold text-center font-semibold text-4xl'>{heading}
        </div>
        {/* card svg */}
        <div>
            <img src={csvg} alt='club house'/>
        </div>
        {/* card content */}
        <div className='text-sm sm:text-base'>
        {content}
        </div>
    </div>
  )
}

export default Cards