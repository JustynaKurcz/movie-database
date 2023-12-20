import React from 'react';
import { Movie } from '../../types/Movie';
import styles from '../../styles/movieDetails/movieDetails.module.css';
import {movieRecords} from '../../movieRecords'

interface MovieDetailsProps {
    movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
    return (
        <div className={styles.movieDetails}>
            <img className={styles.movieDetailsImage} src={movie.image} alt={`Poster for ${movie.title}`} />
            <div className={styles.movieDetailsInfo}>
                <h2>{movie.title}</h2>
                <p><strong>Ocena:</strong> {movie.rating}</p>
                <p><strong>Opis:</strong> {movie.description}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
