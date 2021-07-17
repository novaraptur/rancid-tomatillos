import { checkForErrors } from './utils';
const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/';

export async function fetchMovies(endpoint) {
  const response = await fetch(`${baseURL}${endpoint}`);
  return checkForErrors(response);
}

export async function fetchMovie(id) {
  const response = await fetch(`${baseURL}movies/${id}`);
  return checkForErrors(response);
}

export async function fetchMovieTrailer(id) {
  const response = await fetch(`${baseURL}movies/${id}/videos`);
  return checkForErrors(response);
}
