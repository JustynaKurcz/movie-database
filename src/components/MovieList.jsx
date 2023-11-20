import React from "react";
import MovieCard from "./MovieCard"; 
import "../styles/movieList.css";

const MovieList = ({ films }) => {
  return (
    <div className="movie-list">
      {films.map((film, index) => (
        <MovieCard key={index} film={film} />
      ))}
    </div>
  );
};

export default MovieList;