import React from 'react'
import notFound from '../../../../assets/Images/notFound.png'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <img className='w-[40%]' src={notFound} alt="not found" />
    </div>
  )
}
