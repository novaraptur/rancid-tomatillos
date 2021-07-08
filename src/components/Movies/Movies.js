import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const Movies = ({ movies }) => {
  const movieCards = movies.movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
      />
    );
  });

  return <section className='movies-container'>{movieCards}</section>;
};

export default Movies;
