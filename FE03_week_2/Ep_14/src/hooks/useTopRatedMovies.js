import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch()
    // let user = useSelector((store) => console.log('movies ', store.movies));


    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)

        const { results } = await data.json()
        // console.log("TOP RATED ",results)

        dispatch(addTopRatedMovies(results))
    }

    useEffect(() => {
        getTopRatedMovies()
        // return () => {

        // };
    }, []);

}

export default useTopRatedMovies