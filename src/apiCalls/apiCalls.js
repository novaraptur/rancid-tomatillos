const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/';

export async function fetchMovies(endpoint) {
  const response = await fetch(`${baseURL}${endpoint}`);
  return checkForErrors(response)
}

export async function fetchMovie(id) {
  const response = await fetch(`${baseURL}movies/${id}`);
  return checkForErrors(response);
}

function checkForErrors(response) {
  if (response.status === 404) {
    throw new Error("Sorry, we can't find the page you are looking for.");
  } else if (response.status === 500) {
    throw new Error('Internal Server Error. Our whole team is now aware.')
  } else if (response.status !== 200) {
    throw new Error('Something went wrong...')
  } else {
    return response.json();
  }
}
