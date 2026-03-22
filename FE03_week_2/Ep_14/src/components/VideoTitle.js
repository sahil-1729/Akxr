import React from 'react'

const VideoTitle = ({ original_title, overview }) => {
  return (

    <div className='pt-32 px-12'>
      <h1 className='text-6xl font-bold'>
        {original_title}
      </h1>
      <p className='py-6 text-lg w-1/4'>
        {overview}
      </p>
      <div>
        <button className='bg-gray-500 text-black p-4 px-12 text-lg bg-opacity-50 rounded-md m-2'>Play</button>
        <button className='bg-gray-500 text-black p-4 px-12 text-lg bg-opacity-50 rounded-md m-2'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
