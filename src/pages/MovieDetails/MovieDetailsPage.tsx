import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import {UUID} from "node:crypto";
import axios from "axios";
import {Movie} from "../../components/movieList/types/Movie";

const MovieDetailsPage: React.FC = () => {
    const {movieId} = useParams<{ movieId: UUID }>();
    const [movieDetails, setMovieDetails] = useState<Movie>();

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://at.usermd.net/api/movies/${movieId}`)
                .then(response => setMovieDetails(response.data))
                .catch(error => console.log(error));
        };

        fetchData();
    }, [movieId]);


    return (
        <div className={styles.container}>
            <div className={styles.movieDetailsContainer}>
                {movieDetails ? (
                    <MovieDetails movie={movieDetails}/>
                ) : (
                    <p> Movie not found </p>
                )}
            </div>
        </div>
    );
};

export default MovieDetailsPage;
