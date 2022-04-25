import { useEffect, useState } from "react";
import { get } from "../utils/api";
import { useParams } from "react-router-dom";
import styles from "./moviedetails.module.css"
import { Spinner } from "../components/Spinner";
import placeholder from "../placeholder.jpg"
import {Footer} from "../components/Footer";


export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if(isLoading){
    return <Spinner/>;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = movie.poster_path ? "http://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
      <Footer/>
    </div>
  );
}