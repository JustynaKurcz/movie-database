import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/Auth/LoginPage/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage/RegisterPage'
import MovieDetailsPage from "./pages/MovieDetails/MovieDetailsPage";
import AddMoviePage from "./pages/AddMovie/AddMoviePage";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/signin' element={<LoginPage/>}/>
                    <Route path='/signup' element={<RegisterPage/>}/>
                    <Route path='/details/:movieId' element={<MovieDetailsPage/>}/>
                    <Route path='/add' element={<AddMoviePage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
