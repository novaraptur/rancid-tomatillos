import { fetchMovie } from '../../apiCalls/apiCalls';
import { cleanAPIData } from '../../apiCalls/util';
import Errors from '../Errors/Errors';
import React, { Component } from 'react';
import './MovieDetails.css';
const dayjs = require('dayjs');

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    };
  }

  componentDidMount() {
    fetchMovie(this.props.selectedId)
      .then(data => cleanAPIData(data))
      .then(cleanedMovie => this.setState({ movie: cleanedMovie }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    const { movie } = this.state;
    const releaseDate = movie.release_date;
    return (
      <>
        {movie ? (
          <div className='movie-details' id={movie.id}>
            <img src={movie.backdrop_path} alt={`${movie.title} poster`} />
            <div className='text-box'>
              <div className='title-container'>
                <h2 className='title'>{movie.title}</h2>
              </div>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h3>Rating:</h3>
              <p>{movie.average_rating.toFixed(1)}/10 </p>
              <h3>Runtime:</h3>
              <p>{movie.runtime} minutes</p>
              <h3>Genre:</h3>
              <p>{movie.genres}</p>
              <h3>Release Date:</h3>
              <p>{dayjs(releaseDate).format('MMMM D, YYYY')}</p>
            </div>
          </div>
        ) : (
          <Errors error={'Movie Loading...'} />
        )}
      </>
    );
  }
}

export default MovieDetails;
