import React from 'react';
import {useParams} from 'react-router-dom';
import {movieRecords} from '../../movieRecords';
import styles from './MovieDetailsPage.module.css';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

const MovieDetailsPage: React.FC = () => {
    const {title} = useParams<{ title: string }>();
    const movieDetails = movieRecords.find((movie) => movie.title === title);

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.movieDetailsContainer}>
                {movieDetails ? (
                    <MovieDetails movie={movieDetails}/>
                ) : (
                    <p> Movie not found </p>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default MovieDetailsPage;
