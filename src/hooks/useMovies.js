import { useSelector } from "react-redux";

const useMovies = () =>{
    const movies = useSelector(state => state.movies.movies);
    const loading = useSelector(state => state.movies.loading);
    const error = useSelector(state => state.movies.error);

    return { movies, loading, error }
}

export default useMovies;