import { Link, useLocation } from "react-router-dom";
import { ListMovies } from "./MovieList.styles";

export default function MoviesList({ items }) {
    const location = useLocation();
    console.log(location);
    const movies = items.map((item) => {
        return <li key={item.id}>
                    <Link state={{from: location}} to={`/movies/${item.id}`}>
                        <p>{item.title ? item.title : item.name}</p>
                    </Link>
                </li>
    })
    return (
        <ListMovies>
           {movies}
        </ListMovies>
    )
}