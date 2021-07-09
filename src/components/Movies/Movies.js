import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: ''
    };
  }

  filterMovies = id => {
    const { movies } = this.props;
    const clickedMovie = movies.movies.find(movie => id === movie.id);
    this.setState({ selectedMovie: clickedMovie });
  };

  movieCards = () => {
    const { movies } = this.props;
    return movies.movies.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          backdrop={movie.backdrop_path}
          title={movie.title}
          rating={movie.average_rating}
          releaseDate={movie.release_date}
          filterMovies={this.filterMovies}
        />
      );
    });
  };

  render() {
    return <section className='movies-container'>{this.movieCards()}</section>;
  }
}

export default Movies;
