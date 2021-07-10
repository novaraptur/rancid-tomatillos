import React from 'react';
import './FeatMovie.css';

const FeatMovie = ({props}) => {
  console.log(props)
  const movieIndex = Math.floor(Math.random() * props.movies.movies.length);
  return (
    <section className="featured-movie-section">
      <img className="featured-movie-img" src={props.movies.movies[movieIndex].backdrop_path} alt={props.movies.movies[movieIndex].title + ' preview image.'}/>
      <div className='featured'>
        <h2>Featured</h2>
        <h3>{props.movies.movies[movieIndex].title}</h3>
      </div>
    </section>
  )
}

export default FeatMovie;
