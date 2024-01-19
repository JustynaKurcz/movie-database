import React from 'react';
import styles from './styles/movieCard.module.css'
import { Movie } from './types/Movie'


function MovieCard({ title, rate, image, content }: Movie) {
	return (
		<div className={styles.movieCard}>
			<img className={styles.movieCardImage} src={image} alt={`Poster for ${title}`} />
			<div className={styles.movieCardInfo}>
				<span className={styles.movieCardTitle}>Tytuł : {title}</span>
				<p className={styles.movieCardRating}>Ocena: {rate}</p>
				<p className={styles.movieCardDescription}>Opis: {content}</p>
			</div>
		</div>
	)
}

export default MovieCard
