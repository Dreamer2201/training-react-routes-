import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { fetchOneMovieInf } from "api/fetchAPI";

export default function DetailsMovie() {
    const [state, setState] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    const location = useLocation();
   
    const isCastPage = location.pathname.includes('cast');
    const castLink = isCastPage ? `/movies/${id}` : `/movies/${id}/cast`;

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

    const goBack =() => navigate(-1);
    const goMovies = () => navigate('/movies');
    const videoLink = `movies/:${id}/video`;

    return (
        <>
            <button type="button" onClick={goBack}> Go back</button>
            <button type="button" onClick={goMovies}> Go movies list </button>
            <p>Details one movie</p>
            {state && <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} width="100px" height="100px" alt={state.tagline} />}
            <ul>
                <li><NavLink to={`/movies/${id}/video`}>Movie trailer</NavLink></li>
                <li><NavLink to={`/movies/${id}/cast`}>Actors list</NavLink></li>
                <li><NavLink to={`/movies/${id}/rewies`}>Rewies movie</NavLink></li>
            </ul>
            <Outlet />
            
        </>
    )
}