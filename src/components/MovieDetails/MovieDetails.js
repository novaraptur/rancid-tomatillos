import { fetchMovie } from '../../apiCalls/apiCalls';
import { cleanAPIData } from '../../apiCalls/utils';
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

  formatGenres(genres) {
    if (genres) {
      return genres.join(', ');
    } else {
      return '';
    }
  }

  render() {
    const { movie } = this.state;
    const {
      id,
      title,
      backdropPath,
      overview,
      averageRating,
      genres,
      runtime,
      releaseDate
    } = this.state.movie;

    const formattedGenres = this.formatGenres(genres);

    return (
      <>
        {movie ? (
          <div className='movie-details' id={id}>
            <img src={backdropPath} alt={`${title} poster`} />
            <div className='text-box'>
              <div className='title-container'>
                <h2 className='title'>{title}</h2>
              </div>
              <section className='content-container'>
                <section className='left-content'>
                  <h3>Overview:</h3>
                  <p>{overview}</p>
                  <h3>Rating:</h3>
                  <p>{averageRating.toFixed(1)}/10 </p>
                </section>
                <section className='right-content'>
                  <h3>Runtime:</h3>
                  <p>{runtime} minutes</p>
                  <h3>Genre:</h3>
                  <p>{formattedGenres}</p>
                  <h3>Release Date:</h3>
                  <p>{dayjs(releaseDate).format('MMMM D, YYYY')}</p>
                </section>
              </section>
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
