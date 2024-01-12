import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard'
import styles from './styles/movieList.module.css'
import axios from "axios";
import { Movie } from "./types/Movie";

const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios.get('https://at.usermd.net/api/movies')
            .then(response => setMovies(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={styles.movieList}>
            {movies.map((film) => (
                <Link to={`/details/${film.id}`} key={film.id}>
                    <MovieCard {...film} />
                </Link>
            ))}
        </div>
    )
}

export default MovieList
