export function cleanAPIData(movie) {
  return {
    average_rating: movie.movie.average_rating,
    backdrop_path: movie.movie.backdrop_path,
    genres: movie.movie.genres,
    id: movie.movie.id,
    overview: movie.movie.overview,
    poster_path: movie.movie.poster_path,
    release_date: movie.movie.release_date,
    runtime: movie.movie.runtime,
    title: movie.movie.title
  };
}
