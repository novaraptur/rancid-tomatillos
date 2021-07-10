import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import FeatMovie from '../FeatMovie/FeatMovie';
import './Movies.css';
import MovieDetails from '../MovieDetails/MovieDetails';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null
    };
  }

  filterMovies = id => {
    const { movies } = this.props;
    const clickedMovie = movies.movies.find(movie => id === movie.id);
    this.setState({ selectedMovie: clickedMovie });
  };

  //when you click browse button state will be re-set to null

  getMovieCards = () => {
    const { movies } = this.props;
    return movies.movies.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
          releaseDate={movie.release_date}
          filterMovies={this.filterMovies}
        />
      );
    });
  };

  render() {
    return (
      <section>
        {!this.state.selectedMovie ? (
          <div>
            <FeatMovie props={this.props}/>
            <div className='movies-container'>
              {this.getMovieCards()}
            </div>
          </div>
        ) : (
          <MovieDetails selectedMovie={this.state.selectedMovie} />
        )}
      </section>
    );
  }
}

export default Movies;
