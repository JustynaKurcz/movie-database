import React from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './MovieDetailsPage.module.css'


const MovieDetailsPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.movieDetailsContainer}>
        <h1>Dajmy 5 minut aby mój telefon się podładował</h1>
        </div>
    )

}

export default MovieDetailsPage
