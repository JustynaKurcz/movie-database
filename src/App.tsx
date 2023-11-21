import './App.css'
import Footer from './components/Footer'
import Header from './components/header/Header'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

function App() {
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

export default App
