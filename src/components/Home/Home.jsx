import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "api/fetchAPI";
import MoviesList from "components/share/MoviesList";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const resultFetch = async () => {
            try {
                const result = await fetchTrendingMovies();
                const moviesArr = result.results;
                setMovies([...moviesArr]);
                
            return result;

            } catch(error) {
                console.log(error);
            }
        };
        resultFetch();
        
    }, [])

    return (
        <div>
            <MoviesList items = {movies} />
        </div>
    )
}
