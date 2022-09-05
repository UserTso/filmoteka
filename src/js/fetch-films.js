const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=c4c535d4c92d9e8cd45d9f8a1dc15d0d';

export async function fetchPopularFilms() {
  const response = await fetch(
    `${BASE_URL}movie/popular?${API_KEY}&language=en-US&page=1`
  );
  const films = await response.json();
  return films;
}

export async function fetchGeneres() {
  const response = await fetch(
    `${BASE_URL}genre/movie/list?${API_KEY}&language=en-US&page=1`
  );
  const genere = await response.json();
  return genere;
}

export async function searchMovies(search) {
  const response = await fetch(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&query=${search}&page=1`
  );
  const genere = await response.json();
  return genere;
}
