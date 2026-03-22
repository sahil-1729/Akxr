import React from 'react'
import playLogo from "../assets/img/netflixPlay.gif"

const VideoTitle = ({ original_title, overview }) => {
  return (

    <div className='pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold'>
        {original_title}
      </h1>
      <p className='py-6 text-lg w-1/4'>
        {overview}
      </p>
      <div className='flex col'>
        <button className='bg-[#fffdff] text-black p-4 px-12 text-md rounded-md m-2 flex row font-bold'>
          <img src={playLogo} className='bg-black w-8' alt='play logo not found' />
          <p>
            Play
          </p>
        </button>
        <button className='bg-gray-500 p-4 px-12 text-md bg-opacity-50 rounded-md m-2'>  More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
