import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {

  const getNowPlaying = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)

    const { results } = await data.json()
    console.log(results)
  }

  useEffect(() => {
    getNowPlaying()
    // return () => {

    // };
  }, []);

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse
