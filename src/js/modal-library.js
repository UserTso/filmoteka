import UnsplashAPI from './fetch-films';
const unsplashAPI = new UnsplashAPI();

const modalContainer = document.querySelector('.modal__contents');
const backdrop = document.querySelector('.backdrop');
const gallaryList = document.querySelector('.gallery-library-list');

// localStorage.setItem('watched', '');
// localStorage.setItem('queue', '');

function renderFilms(film) {
  if (film.poster_path === null) {
    film.poster_path =
      'https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%BE%D1%80%D0%BE-%D0%BD%D0%B0-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%BF%D0%BE%D1%8F%D0%B2%D0%B8%D1%82%D1%81%D1%8F-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-retro-%D1%81%D0%B2%D0%B5%D1%82%D1%8F%D1%89%D0%B8%D0%B9%D1%81%D1%8F-%D0%BD%D0%B5%D0%BE%D0%BD-159994270.jpg';
  } else {
    film.poster_path = 'https://image.tmdb.org/t/p/w500/' + film.poster_path;
  }

  if (!film.genre_ids) {
    film.genre_ids = 'genre unknown';
  }

  return `<div class="modal__backcall">
        <div class="modal__img-box">
          <img
            class="modal__img"
            src=${film.poster_path} alt=${film.original_title}
          />
        </div>
        <div class="modal__text-content">
          <h2 class="modal__title">${film.title}</h2>
          <div class="modal__dicr">
            <ul class="modal__list1">
              <li class="modal__list-item">Vote / Votes</li>
              <li class="modal__list-item">Popularity</li>
              <li class="modal__list-item">Original Title</li>
              <li class="modal__list-item">Genre</li>
            </ul>
            <ul class="modal__list2">
              <li class="modal__item">
                <span class="modal__vote1">${film.vote_average}</span> /
                <span class="modal__vote2">${film.vote_count}</span>
              </li>
              <li class="modal__item">${film.popularity}</li>
              <li class="modal__item">${film.title}</li>
              <li class="modal__item">${film.genre_ids}</li>
            </ul>
          </div>
          <article class="modal__article">
            <h3 class="modal__subtitle">About</h3>
            <p class="modal__text">
             ${film.overview}
            </p>
          </article>
          <div class="modal__btn-box">
            <button class="modal__button-org" type="button">
              add to Watched
            </button>
            <button class="modal__button-trans" type="button">
              add to queue
            </button>
          </div>
        </div>
  </div>`;
}
