import React from 'react'
import SearchBar from '../components/searchBar/SearchBar'
import MovieList from '../components/movieList/MovieList'
import '../App.css'

const HomePage: React.FC = () => {
    return (
        <div className='app-container'>
            <div className='main-content'>
                <SearchBar/>
                <MovieList/>
            </div>
        </div>
    )
}

export default HomePage