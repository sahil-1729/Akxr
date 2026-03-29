import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularMovies from "../hooks/usePopularMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GPTSearch from "./GPTSearch"
import { useSelector } from 'react-redux'

const Browse = () => {

  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  console.log('gpt search ', showGPTSearch)
  return (
    <div>
      <Header />
      {showGPTSearch === true ?
        <GPTSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse
