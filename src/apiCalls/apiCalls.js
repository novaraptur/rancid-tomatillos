import React from 'react';
const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2/';

export async function fetchMovies(endpoint) {
  const response = await fetch(`${baseURL}${endpoint}`);
  return checkForErrors(response);
}

function checkForErrors(response) {
  if (!response.ok) {
    throw new Error(response.status + ' ' + response.statusText);
  } else {
    return response.json();
  }
}
