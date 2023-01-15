import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "./SearchForm";
import { fetchSearchMovie } from "api/fetchAPI";
import MoviesList from "components/share/MoviesList";

export default function Movies() {
    const [searchMovie, setSearchMovie] = useState('');
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const genre = searchParams.get('genre');
 
    useEffect(() => {
        const fetchQuery = async () => {
            setLoader(true);
            try {
                    const result = await fetchSearchMovie(query);
                    const searchMovieArr = result.results;
                    console.log(searchMovieArr);
                    setSearchMovie(searchMovieArr);              
                
            } catch(error){
                setError(error);
            } finally {
                setLoader(false);
            }          
        }
        if (!query) {
            return;
        }
        fetchQuery(query);
    }, [query]);

    const onSubmitSearchForm = (queryName) => {
        setSearchParams({
            query: queryName,
        });
        console.log(query);
    }
   

    return (
        <div>
            <SearchForm
                onSubmitForm={onSubmitSearchForm}
            />
           
            {searchMovie && <MoviesList items={searchMovie} /> }
            
        </div>
    )
}