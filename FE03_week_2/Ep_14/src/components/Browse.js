import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
const Browse = () => {

  const dispatch = useDispatch()
  let user = useSelector((store) => console.log('moveis ',store.movies));


  const getNowPlaying = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)

    const { results } = await data.json()
    console.log(results)

    dispatch(addNowPlayingMovies(results))
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
