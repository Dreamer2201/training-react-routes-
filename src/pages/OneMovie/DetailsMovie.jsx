import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { fetchOneMovieInf } from "api/fetchAPI";

export default function DetailsMovie() {
    const [state, setState] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    const location = useLocation();
    
    const isTrailerPage = location.pathname.includes('video');
    const trailerLink = isTrailerPage ? `/movies/${id}` : `/movies/${id}/video`
    const isCastPage = location.pathname.includes('cast');
    const castLink = isCastPage ? `/movies/${id}` : `/movies/${id}/cast`;
    const isRewiesPage = location.pathname.includes('rewies');
    const rewiesLink = isRewiesPage ? `/movies/${id}` : `/movies/${id}/rewies`;


    const from = location.state?.from || '/movies';
    console.log(from);

    useEffect(() => {
        
        const fetchMovieDetails = async () => {
            setLoader(true);
            try {
                const result = await fetchOneMovieInf(id);
                console.log(result);

                setState(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoader(false)
            }
        };
        fetchMovieDetails();
    }, [id]);

    const goBack =() => navigate(from);
    const goMovies = () => navigate('/movies');

    return (
        <>
            <button type="button" onClick={goBack}> Go back</button>
            <button type="button" onClick={goMovies}> Go movies list </button>
            <p>Details one movie</p>
            {state && <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} width="100px" height="100px" alt={state.tagline} />}
            <ul>
                <li><NavLink state={{ from }} to={trailerLink}>Movie trailer</NavLink></li>
                <li><NavLink state={{ from }} to={castLink}>Actors list</NavLink></li>
                <li><NavLink state={{ from }} to={rewiesLink}>Rewies movie</NavLink></li>
            </ul>
            <Outlet />
            
        </>
    )
}