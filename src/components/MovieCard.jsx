import React from 'react'
import '../styles/movieCard.css'

function MovieCard(props) {
	const { title, rating, image, description } = props.film

	return (
		<div className='movie-card'>
			<img className='movie-card-image' src={image} alt='Image movie' />
			<div className='movie-card-info'>
				<span className='movie-card-title'>Tytuł : {title}</span>
				<p className='movie-card-rating'>Ocena: {rating}</p>
				<p className='movie-card-description'>Opis: {description}</p>
			</div>
		</div>
	)
}

export default MovieCard
