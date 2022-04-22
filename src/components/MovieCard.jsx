import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import placeholder from "../placeholder.jpg"

export function MovieCard({ movie }){
    const imageUrl = movie.poster_path ? "http://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;
    return <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
        <img width={230} heigh={345} className={styles.movieImage} src={imageUrl} alt={movie.title}></img>
         <div>{movie.title}</div>
        </Link>
     </li>

}