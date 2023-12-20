import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'
import '../../styles/movieList.css'
import { movieRecords } from '../../movieRecords'

const MovieList = () => {
	return (
		<div className='movie-list'>
			{movieRecords.map((film, index) => (
				<div key={`movie-${index}`}>
					<MovieCard {...film} />
				</div>
			))}
		</div>
	)
}

export default MovieList
