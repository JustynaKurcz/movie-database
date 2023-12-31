import React from 'react';
import styles from './styles/movieCard.module.css'
import { Movie } from './types/Movie'

function MovieCard({ title, rating, image, description }: Movie) {
	return (
		<div className={styles.movieCard}>
			<img className={styles.movieCardImage} src={image} alt={`Poster for ${title}`} />
			<div className={styles.movieCardInfo}>
				<span className={styles.movieCardTitle}>Tytuł : {title}</span>
				<p className={styles.movieCardRating}>Ocena: {rating}</p>
				<p className={styles.movieCardDescription}>Opis: {description}</p>
			</div>
		</div>
	)
}

export default MovieCard