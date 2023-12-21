import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard'
import styles from './styles/movieList.module.css'
import {movieRecords} from '../../movieRecords'

const MovieList = () => {
    return (
        <div className={styles.movieList}>
            {movieRecords.map((film, index) => (
                <Link to={`/details/${film.title}`} key={`movie-${index}`}>
                    <MovieCard {...film} />
                </Link>
            ))}
        </div>
    )
}

export default MovieList
