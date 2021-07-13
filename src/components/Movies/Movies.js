import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import FeatMovie from '../FeatMovie/FeatMovie';
import './Movies.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Route, NavLink } from 'react-router-dom';

class Movies extends Component {
  // add component did mount here to do the fetch call to update the selected movie
  // if movie render this

  getMovieCards = () => {
    const { movies } = this.props;
    return movies.map(movie => {
      return (
        <NavLink to={`/${movie.id}`} key={movie.id}>
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            rating={movie.average_rating}
            releaseDate={movie.release_date}
            updateSelectedMovie={this.props.updateSelectedMovie}
          />
        </NavLink>
      );
    });
  };

  render() {
    return (
      <section>
        {!this.props.selectedMovie ? (
          <div>
            <NavLink to='/:movieId'>
              <FeatMovie
                props={this.props}
                updateSelectedMovie={this.props.updateSelectedMovie}
              />
            </NavLink>
            <div className='movies-container'>{this.getMovieCards()}</div>
          </div>
        ) : (
          <Route
            path="/:movieId"
            render={({ match }) => {
              console.log(match);
              <MovieDetails selectedMovie={this.props.selectedMovie} />
            }}
          />
        )}
      </section>
    );
  }
}

export default Movies;
