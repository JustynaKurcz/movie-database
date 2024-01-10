import React from 'react';
import styles from './styles/movieDetails.module.css';
import {MovieDetailsProps} from "./types/MovieDetailsProps";


const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
    return (
        <div className={styles.movieDetails}>
            <img className={styles.movieDetailsImage} src={movie.image} alt={`Poster for ${movie.title}`} />
            <div className={styles.movieDetailsInfo}>
                <h2>{movie.title}</h2>
                <p><strong>Ocena:</strong> {movie.rating}</p>
                <p><strong>Opis:</strong> {movie.content}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
