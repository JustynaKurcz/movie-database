import React from 'react';
import styles from './AddMoviePage.module.css';
import Header from "../../components/header/Header";

const AddMoviePage: React.FC = () => {

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.addMovieContainer}>
                <h1>Add Movie Page</h1>
            </div>
        </div>
    );
};

export default AddMoviePage;
