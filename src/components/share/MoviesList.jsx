import { Link } from "react-router-dom";
import { ListMovies } from "./MovieList.styles";

export default function MoviesList({ items }) {
    console.log(items);
    const movies = items.map((item) => {
        return <li key={item.id}>
                    <Link to={`/movies/${item.id}`}>
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