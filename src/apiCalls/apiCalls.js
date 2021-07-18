import { checkForErrors } from './utils';
const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/';

export async function fetchMovieData(endpoint) {
  const response = await fetch(`${baseURL}${endpoint}`);
  return checkForErrors(response);
}
