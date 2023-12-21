import React from 'react'
import Header from '../components/header/Header'
import SearchBar from '../components/searchBar/SearchBar'
import MovieList from '../components/movieList/MovieList'
import Footer from '../components/footer/Footer'
import '../App.css'

const HomePage: React.FC = () => {
    return (
        <div className='app-container'>
            <Header />
            <div className='main-content'>
                <SearchBar />
                <MovieList />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage