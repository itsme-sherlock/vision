import React from 'react'


const Cards = ({heading,csvg,content}) => {
  return (
    <div className=' w-[300px] bg-white p-5 rounded-lg '>
        {/* card heading  */}
        <div className='text-visionGold text-left font-semibold text-2xl py-5'>{heading}
        </div>
        {/* card svg */}
        {/* <div>
            <img src={csvg} alt='club house'/>
        </div> */}
        {/* card content */}
        <div className='text-sm sm:text-base'>
        {content}
        </div>
    </div>
  )
}

export default Cards