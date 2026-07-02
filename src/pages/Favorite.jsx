import React from "react";
import "../styles/Favorites.css";
import { useMovieContext } from "../context/MoiveCotntext";
import MovieCard from "../components/MovieCard";

const Favorite = () => {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite Movie yet!</h2>
      <p>Add some movies to your favorites to see them here</p>
    </div>
  );
};
export default Favorite;
