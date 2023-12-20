import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import MovieDetailsPage from "./pages/MovieDetails/MovieDetailsPage";
import AddMoviePage from "./pages/AddMovie/AddMoviePage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/signin' element={<LoginPage />} />
					<Route path='/signup' element={<RegisterPage />} />
					<Route path='/details/:title' element={<MovieDetailsPage />} />
					<Route path='/add' element={<AddMoviePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
