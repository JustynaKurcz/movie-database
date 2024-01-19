import React, { useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import MovieList from '../../components/movieList/MovieList';
import '../../App.css';

const HomePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div className='app-container'>
            <div className='main-content'>
                <SearchBar onSearch={handleSearch} />
                <MovieList searchTerm={searchTerm} />
            </div>
        </div>
    );
};

export default HomePage;
