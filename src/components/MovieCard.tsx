import '../styles/movieCard.css'
import { Movie } from '../types/Movie'

function MovieCard({ title, rating, image, description }: Movie) {
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