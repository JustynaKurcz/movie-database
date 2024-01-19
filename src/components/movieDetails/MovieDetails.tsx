import React, {useState} from 'react';
import styles from './styles/movieDetails.module.css';
import {MovieDetailsProps} from './types/MovieDetailsProps';
import axios from 'axios';
import {jwtDecode, JwtPayload} from "jwt-decode";
import {UUID} from "node:crypto";

const MovieDetails: React.FC<MovieDetailsProps> = ({movie}) => {
    const token = localStorage.getItem('token');
    const decodedToken: any = token ? jwtDecode<JwtPayload>(token) : null;
    const isAdmin = useState<boolean>(decodedToken ? decodedToken.isAdmin : false);

    const handleDeleteMovie = async (movieId: UUID) => {
        await axios.delete(`https://at.usermd.net/api/movie/${movieId}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => window.location.href = '/')
            .catch(err => console.log(err));
    };

    return (
        <div className={styles.movieDetails}>
            <img className={styles.movieDetailsImage} src={movie.image} alt={`Poster for ${movie.title}`}/>
            <div className={styles.movieDetailsInfo}>
                <h2>{movie.title}</h2>
                <p><strong>Ocena:</strong> {movie.rate}</p>
                <p><strong>Opis:</strong> {movie.content}</p>
                {isAdmin && (
                    <button className={styles.deleteButton} onClick={() => handleDeleteMovie(movie.id)}>Usuń film</button>
                )}
            </div>
        </div>
    );
};

export default MovieDetails;
