// variables
const emptyQueueDiv = document.querySelector('.empty-queue-container');
const emptyWatchedDiv = document.querySelector('.empty-watched-container');
const galleryLibrary = document.querySelector('.gallery-library-list');
let savedWatched = null;
let savedQueue = null;

try {
  savedQueue = localStorage.getItem('queue');
  savedQueue = savedQueue === null ? [] : JSON.parse(savedQueue);
} catch (error) {
  console.error('Get state error: ', error.message);
}

try {
  savedWatched = localStorage.getItem('watched');
  savedWatched = savedWatched === null ? [] : JSON.parse(savedWatched);
} catch (error) {
  console.error('Get state error: ', error.message);
}

//! First render QUEUE

if (savedQueue.length > 0) {
  emptyQueueDiv.classList.add('is-hidden');
  galleryLibrary.innerHTML = makeMarkup(savedQueue);
}

// refs
const refs = {
  btnWatched: document.querySelector('.button__watched'),
  btnQueue: document.querySelector('.button__queue'),
};

const onBtnWatchedClickIsActive = e => {
  if (refs.btnWatched.classList.contains('button__current')) {
    return;
  }

  e.target.classList.add('button__current');
  refs.btnQueue.classList.remove('button__current');

  try {
    savedWatched = localStorage.getItem('watched');
    savedWatched = savedWatched === null ? [] : JSON.parse(savedWatched);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
  emptyQueueDiv.classList.add('is-hidden');
  if (savedWatched.length === 0) {
    emptyWatchedDiv.classList.remove('is-hidden');
    return;
  }
  emptyWatchedDiv.classList.add('is-hidden');

  galleryLibrary.innerHTML = makeMarkup(savedWatched);
};

const onBtnQueueClickIsActive = e => {
  if (refs.btnQueue.classList.contains('button__current')) {
    return;
  }

  e.target.classList.add('button__current');
  refs.btnWatched.classList.remove('button__current');

  try {
    savedQueue = localStorage.getItem('queue');
    savedQueue = savedQueue === null ? [] : JSON.parse(savedQueue);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
  emptyWatchedDiv.classList.add('is-hidden');
  if (savedQueue.length === 0) {
    emptyQueueDiv.classList.remove('is-hidden');
    return;
  }

  emptyQueueDiv.classList.add('is-hidden');
  galleryLibrary.innerHTML = makeMarkup(savedQueue);
};

refs.btnQueue.addEventListener('click', onBtnQueueClickIsActive);
refs.btnWatched.addEventListener('click', onBtnWatchedClickIsActive);

export function makeMarkup(data) {
  console.log(data);
  let markup = data
    .map(
      data => `<li class="gallery__item" >
      <img class="gallery__img" src="${
        data.poster_path === null
          ? new URL('../images/gallery/question-mark.jpeg', import.meta.url)
          : `https://image.tmdb.org/t/p/w500${data.poster_path}`
      }" alt="movie image" name="${data.id}">
      <h3 class="gallery__title">${data.title || 'Unknown'}</h3>
       <p class="gallery__text">${mapGanereId(data.genres)} &#124 ${
        data.release_date.slice(0, 4) || 'Unknown'
      } <span class="info-accent">${
        data.vote_average || 'Unknown'
      }</span></p></li>`
    )
    .join('');
  return markup;
}

// !------------------------------
function mapGanereId(genres) {
  return genres
    .map(genere => {
      return genere.name || 'Unknown';
    })
    .join(', ');
}
