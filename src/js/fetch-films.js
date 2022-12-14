export default class UnsplashAPI {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = 'api_key=c4c535d4c92d9e8cd45d9f8a1dc15d0d';

  searchQuery = '';
  page = 1;
  totalPages = 0;

  async fetchPopularFilms() {
    const response = await fetch(
      `${this.#BASE_URL}movie/popular?${this.#API_KEY}&language=en-US&page=${
        this.page
      }`
    );
    const films = await response.json();
    return films;
  }

  async fetchFilmInfo(id) {
    const response = await fetch(
      `${this.#BASE_URL}movie/${id}?${this.#API_KEY}&language=en-US`
    );
    const info = await response.json();
    return info;
  }

  async fetchGeneres() {
    const response = await fetch(
      `${this.#BASE_URL}genre/movie/list?${this.#API_KEY}&language=en-US&page=${
        this.page
      }`
    );
    const genere = await response.json();
    localStorage.setItem('genre_ids', JSON.stringify(genere));
    return genere;
  }

  async searchMovies() {
    const response = await fetch(
      `${this.#BASE_URL}search/movie?${this.#API_KEY}&language=en-US&query=${
        this.searchQuery
      }&page=${this.page}`
    );
    const films = await response.json();
    return films;
  }
}
