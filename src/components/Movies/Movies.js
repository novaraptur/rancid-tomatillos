import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import FeatMovie from '../FeatMovie/FeatMovie';
import './Movies.css';
import { NavLink } from 'react-router-dom';
import { Element } from 'react-scroll';

// add propTypes to every component
class Movies extends Component {
  getMovieCards = () => {
    const { movies } = this.props;
    return movies.map(movie => {
      // maybe change to <MovieCard {...movie} updateSelectedMovie={updateSelectedMovie} />
      return (
        <NavLink to={`/${movie.id}`} key={movie.id}>
          <MovieCard
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
        <div>
          <FeatMovie
            props={this.props}
            updateSelectedMovie={this.props.updateSelectedMovie}
          />
          <Element
            className='movies-container'
            id='movieCards'
            name='movieCards'
          >
            {this.getMovieCards()}
          </Element>
        </div>
      </section>
    );
  }
}

export default Movies;
