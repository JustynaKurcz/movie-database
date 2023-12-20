import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import MovieDetailsPage from "./pages/MovieDetails/MovieDetailsPage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/signin' element={<LoginPage />} />
					<Route path='/signup' element={<RegisterPage />} />
					<Route path='/details/:title' element={<MovieDetailsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
