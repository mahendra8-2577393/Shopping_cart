import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center absolute top-[50vh] left-[50vw] font-extrabold'>
      <div className='spinner'></div>
      <div className='text-2xl'>Loading...</div>
    </div>
  )
}

export default Spinner