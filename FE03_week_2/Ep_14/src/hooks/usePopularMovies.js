import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()
    // let user = useSelector((store) => console.log('movies ', store.movies));


    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)

        const { results } = await data.json()
        // console.log(results)

        dispatch(addPopularMovies(results))
    }

    useEffect(() => {
        getPopularMovies()
        // return () => {

        // };
    }, []);

}

export default useNowPlayingMovies