import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "api/fetchAPI";
import MoviesTrendingList from "./MoviesTrendingList";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const resultFetch = async () => {
            try {
                const result = await fetchTrendingMovies();
                setMovies({
                    movies: result.results
                });
                
            return result;

            } catch(error) {
                console.log(error);
            }
        };
        resultFetch();
        
    }, [])
    
    
    

    return (
        <div>
            <MoviesTrendingList items = {movies} />
        </div>
    )
}
