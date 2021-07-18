export function cleanSingleMovieData(movie) {
  return {
    averageRating: movie.movie.average_rating,
    backdropPath: movie.movie.backdrop_path,
    genres: movie.movie.genres,
    id: movie.movie.id,
    overview: movie.movie.overview,
    posterPath: movie.movie.poster_path,
    releaseDate: movie.movie.release_date,
    runtime: movie.movie.runtime,
    title: movie.movie.title
  };
}

export function cleanAllMoviesData(movies) {
  return movies.movies.filter(movie => movie.title !== 'Maratón After');
}

export function checkForErrors(response) {
  if (response.status === 404) {
    throw new Error("Sorry, we can't find the page you are looking for.");
  } else if (response.status === 500) {
    throw new Error('Internal Server Error. Our whole team is now aware.');
  } else if (response.status !== 200) {
    throw new Error('Something went wrong...');
  } else {
    return response.json();
  }
}

export function checkForTrailer(data) {
  if (!data.videos.length) {
    throw new Error('Video not found');
  } else {
    return data.videos[0].key;
  }
}
