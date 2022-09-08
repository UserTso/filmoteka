import UnsplashAPI from './fetch-films';
const unsplashAPI = new UnsplashAPI();

import { makeMarkup } from './gallery-library';

import { onModalBtnClick } from './library-locale-storage';
const gallery = document.querySelector('.gallery-library-list');
const modalBackdrop = document.querySelector('.backdrop');
const modalWrap = document.querySelector('.modal__contents');
const closeBtn = document.querySelector('.modal__btn-close');
const btnQueue = document.querySelector('.button__queue');

// ?_________________OPEN MODAL_______________

async function openModal(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const filmId = e.target.name;
  //   console.log(filmId);
  try {
    const result = await unsplashAPI.fetchFilmInfo(filmId);
    modalBackdrop.classList.toggle('is-hidden');
    // console.log(result);

    try {
      await renderModal(result);
      onModalBtnClick(result);
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
  }
  document.addEventListener('keydown', closeModal);
  closeBtn.addEventListener('click', closeModalOnBtnClick);
}

gallery.addEventListener('click', openModal);
closeBtn.removeEventListener('click', closeModalOnBtnClick);
document.removeEventListener('keydown', closeModal);
// ?_____________CLOSE MODAL______________

function closeModal(e) {
  if (e.code === 'Escape') {
    modalBackdrop.classList.toggle('is-hidden');
    document.removeEventListener('keydown', closeModal);

    if (btnQueue.classList.contains('button__current')) {
      console.log('hi');
      try {
        savedQueue = localStorage.getItem('queue');
        savedQueue = savedQueue === null ? [] : JSON.parse(savedQueue);
      } catch (error) {
        console.error('Get state error: ', error.message);
      }
      gallery.innerHTML = makeMarkup(savedQueue);
      return;
    }
    try {
      savedWatched = localStorage.getItem('watched');
      savedWatched = savedWatched === null ? [] : JSON.parse(savedWatched);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
    gallery.innerHTML = makeMarkup(savedWatched);
    console.log('hi2');
  }
}

function closeModalOnBtnClick(e) {
  modalBackdrop.classList.toggle('is-hidden');

  if (btnQueue.classList.contains('button__current')) {
    console.log('hi');
    try {
      savedQueue = localStorage.getItem('queue');
      savedQueue = savedQueue === null ? [] : JSON.parse(savedQueue);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
    gallery.innerHTML = makeMarkup(savedQueue);
    return;
  }
  try {
    savedWatched = localStorage.getItem('watched');
    savedWatched = savedWatched === null ? [] : JSON.parse(savedWatched);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
  gallery.innerHTML = makeMarkup(savedWatched);
  console.log('hi2');
}

// ?___________________Modal RENDER

async function renderModal(film) {
  try {
    const { genres } = await unsplashAPI.fetchGeneres();
    // console.log(genres);
    const generesConfig = getGeneresConfig(genres);
    // console.log(generesConfig);

    const markup = `<img src="${
      film.poster_path === null
        ? new URL('../images/gallery/question-mark.jpeg', import.meta.url)
        : `https://image.tmdb.org/t/p/w500${film.poster_path}`
    }" alt="photo" class="modal__poster" />
        <div>
          <h2 class="modal__title">${film.title.toUpperCase() || 'Unknown'}</h2>
          <table class="modal__info">
            <tr>
              <th>Vote/Votes</th>
              <td>
                <span class="modal__info--accent">${
                  film.vote_average || 'Unknown'
                }</span> /
                <span class="modal__info--noaccent">${
                  film.vote_count || 'Unknown'
                }</span>
              </td>
            </tr>
            <tr>
              <th>Popularity</th>
              <td>${film.popularity || 'Unknown'}</td>
            </tr>
            <tr>
              <th>Original Title</th>
              <td>${film.original_title || 'Unknown'}</td>
            </tr>
            <tr>
              <th>Genre</th>
              <td>${mapGanereId(film.genres, generesConfig)}</td>
            </tr>
          </table>
          <h3 class="modal__about--title">About</h3>
          <p class="modal__about">
            ${film.overview || 'Unknown'}
          </p>
              <div class="modal__btn">
      <button type="button" class="modal__btn-watched">add to Watched</button>
      <button type="button" class="modal__btn-queue">add to queue</button>
    </div>
 </div>`;

    modalWrap.innerHTML = markup;
  } catch (error) {
    console.log(error.message);
  }
}

function mapGanereId(filmGeneresId, generesConfig) {
  //   console.log(filmGeneresId);
  //   console.log(generesConfig);
  return filmGeneresId
    .map(generes => {
      return generesConfig[generes] || 'Unknown';
    })
    .join(', ');
}

// ?-------------------Make Obj with id: name------------

function getGeneresConfig(allGeneres) {
  return allGeneres.reduce((previousValue, { name, id }) => {
    return { ...previousValue, [id]: name };
  }, {});
}
