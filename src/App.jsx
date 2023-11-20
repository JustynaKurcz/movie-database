import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header/Header'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import {films} from './films'

function App() {
	return (
		<div className='app-container'>
			<Header />
			<div className='main-content'>
				<SearchBar />
				<MovieList films={films} />
			</div>
			<Footer />
		</div>
	)
}

export default App
