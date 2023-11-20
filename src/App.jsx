import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/header/Header'
import SearchBar from './components/SearchBar'

function App() {
	return (
		<div className='app-container'>
			<Header />
			<div className='main-content'>
				<SearchBar />
			</div>
			<Footer />
		</div>
	)
}

export default App
