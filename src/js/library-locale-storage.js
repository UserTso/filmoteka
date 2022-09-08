const WATCHED = 'watched';
const QUEUE = 'queue';

export function onModalBtnClick(result) {
  // !_________WATCHED______________________________

  const btnWatched = document.querySelector('.modal__btn-watched');
  const btnQueue = document.querySelector('.modal__btn-queue');

  let watchedDataFromStorage = null;

  try {
    watchedDataFromStorage = localStorage.getItem(WATCHED);
    watchedDataFromStorage =
      watchedDataFromStorage === null ? [] : JSON.parse(watchedDataFromStorage);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }

  const watchedFilmFromStorage = watchedDataFromStorage.find(
    el => el.id === result.id
  );

  if (watchedFilmFromStorage) {
    btnWatched.addEventListener('click', onHandleRemoveWatch);
    btnWatched.textContent = 'remove from watched';
  } else {
    btnWatched.addEventListener('click', onHandleWatch);
  }

  function onHandleWatch() {
    let watchedArr = [];

    if (!localStorage.getItem(WATCHED)) {
      watchedArr.push(result);
      localStorage.setItem(WATCHED, JSON.stringify(watchedArr));

      btnWatched.removeEventListener('click', onHandleWatch);
      btnWatched.textContent = 'remove from watched';
      btnWatched.addEventListener('click', onHandleRemoveWatch);
    } else if (localStorage.getItem(WATCHED).includes(JSON.stringify(result))) {
      console.log('Watched film list includes this film!');
    } else {
      watchedArr = JSON.parse(localStorage.getItem(WATCHED));
      watchedArr.push(result);
      localStorage.setItem(WATCHED, JSON.stringify(watchedArr));

      btnWatched.removeEventListener('click', onHandleWatch);
      btnWatched.textContent = 'Remove from watched';
      btnWatched.addEventListener('click', onHandleRemoveWatch);
    }
  }
  function onHandleRemoveWatch() {
    const watchedFilm = JSON.parse(localStorage.getItem(WATCHED));

    const watchedFilmToRemove = watchedFilm.findIndex(
      el => el.id === result.id
    );

    watchedFilm.splice(watchedFilmToRemove, 1);

    localStorage.setItem(WATCHED, JSON.stringify(watchedFilm));

    btnWatched.removeEventListener('click', onHandleRemoveWatch);
    btnWatched.textContent = 'Add to Watched';
    btnWatched.addEventListener('click', onHandleWatch);
  }

  // ! QUEUE------------------------------------------------

  let queueDataFromStorage = null;

  try {
    queueDataFromStorage = localStorage.getItem(QUEUE);
    queueDataFromStorage =
      queueDataFromStorage === null ? [] : JSON.parse(queueDataFromStorage);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }

  const queueFilmFromStorage = queueDataFromStorage.find(
    el => el.id === result.id
  );

  if (queueFilmFromStorage) {
    btnQueue.addEventListener('click', onHandleRemoveQueue);
    btnQueue.textContent = 'remove from queue';
  } else {
    btnQueue.addEventListener('click', onHandleQueue);
  }

  function onHandleQueue() {
    let queueArr = [];

    if (!localStorage.getItem(QUEUE)) {
      queueArr.push(result);
      localStorage.setItem(QUEUE, JSON.stringify(queueArr));

      btnQueue.removeEventListener('click', onHandleQueue);
      btnQueue.textContent = 'remove from queue';
      btnQueue.addEventListener('click', onHandleRemoveQueue);
    } else if (localStorage.getItem(QUEUE).includes(JSON.stringify(result))) {
      console.log('queue film list includes this film!');
    } else {
      queueArr = JSON.parse(localStorage.getItem(QUEUE));
      queueArr.push(result);
      localStorage.setItem(QUEUE, JSON.stringify(queueArr));

      btnQueue.removeEventListener('click', onHandleQueue);
      btnQueue.textContent = 'remove from queue';
      btnQueue.addEventListener('click', onHandleRemoveQueue);
    }
  }

  function onHandleRemoveQueue() {
    const queueFilm = JSON.parse(localStorage.getItem(QUEUE));

    const queueFilmToRemove = queueFilm.findIndex(el => el.id === result.id);

    queueFilm.splice(queueFilmToRemove, 1);

    localStorage.setItem(QUEUE, JSON.stringify(queueFilm));

    btnQueue.removeEventListener('click', onHandleRemoveQueue);
    btnQueue.textContent = 'add to queue';
    btnQueue.addEventListener('click', onHandleQueue);
  }
  //   !___________________________________________
}
