import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import styles from './styles/movieList.module.css';
import axios from 'axios';
import { Movie } from './types/Movie';

interface MovieListProps {
    searchTerm: string;
}

const MovieList: React.FC<MovieListProps> = ({ searchTerm }) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios
            .get('https://at.usermd.net/api/movies')
            .then((response) => setMovies(response.data))
            .catch((err) => console.log(err));
    }, []);

    const filteredFilms = movies.filter((film) =>
        film.title && film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.movieList}>
            {filteredFilms.length > 0 ? (
                filteredFilms.map((film) => (
                    <div key={film.id}>
                        <Link to={`/details/${film.id}`} style={{textDecoration: 'none'}}>
                            <MovieCard {...film} />
                        </Link>
                    </div>
                ))
            ) : (
                <p className={styles.emptyList}>Brak dostępnych filmów.</p>
            )}
        </div>
    );
};

export default MovieList;
