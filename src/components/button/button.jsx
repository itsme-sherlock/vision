import React from 'react'

const Button = ({content}) => {
  return (
    <div className='flex items-center justify-center my-5'>
        <a href='https://docs.google.com/forms/d/1y1W7nqUwNu-jcrQRJ_Aw0KoYOij5ka4akmdDS-DUjvk/edit' className='w-fit bg-visionBlue p-2 sm:p-5 text-white flex cursor-pointer rounded-lg tracking-wide items-center justify-center font-bold' >{content}</a>
    </div>
  )
}

export default Button