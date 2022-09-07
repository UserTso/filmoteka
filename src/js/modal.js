// import { UnsplashApi } from './fetch-films';

// import { renderGalleryItems } from './gallery';

// const unsplashApi = new UnsplashApi();
// const modalContainer = document.querySelector('#js-module');
// const backdrop = document.querySelector('[data-modal]');
// const galleryList = document.querySelector('.gallery-list');

// export function renderFilms(film) {
//   if (film.poster_path === null) {
//     film.poster_path =
//       'https://thumbs.dreamstime.com/b/%D1%81%D0%BA%D0%BE%D1%80%D0%BE-%D0%BD%D0%B0-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D1%81%D0%BA%D0%B5-%D0%BF%D0%BE%D1%8F%D0%B2%D0%B8%D1%82%D1%81%D1%8F-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-retro-%D1%81%D0%B2%D0%B5%D1%82%D1%8F%D1%89%D0%B8%D0%B9%D1%81%D1%8F-%D0%BD%D0%B5%D0%BE%D0%BD-159994270.jpg';
//   } else {
//     film.poster_path = 'https://image.tmdb.org/t/p/w500/' + film.poster_path;
//   }

//   if (!film.genre_ids) {
//     film.genre_ids = 'genre unknown';
//   }

//   return `<div class="modal__backcall">
//         <div class="modal__img-box">
//           <img
//             class="modal__img"
//             src=${film.poster_path} alt=${film.original_title}
//           />
//         </div>
//         <div class="modal__text-content">
//           <h2 class="modal__title">${film.title}</h2>
//           <div class="modal__dicr">
//             <ul class="modal__list1">
//               <li class="modal__list-item">Vote / Votes</li>
//               <li class="modal__list-item">Popularity</li>
//               <li class="modal__list-item">Original Title</li>
//               <li class="modal__list-item">Genre</li>
//             </ul>
//             <ul class="modal__list2">
//               <li class="modal__item">
//                 <span class="modal__vote1">${film.vote_average}</span> /
//                 <span class="modal__vote2">${film.vote_count}</span>
//               </li>
//               <li class="modal__item">${film.popularity}</li>
//               <li class="modal__item">${film.title}</li>
//               <li class="modal__item">${film.genre_ids}</li>
//             </ul>
//           </div>
//           <article class="modal__article">
//             <h3 class="modal__subtitle">About</h3>
//             <p class="modal__text">
//              ${film.overview}
//             </p>
//           </article>
//           <div class="modal__btn-box">
//             <button class="modal__button-org" type="button">
//               add to Watched
//             </button>
//             <button class="modal__button-trans" type="button">
//               add to queue
//             </button>
//           </div>
//         </div>
//   </div>`;
// }


// const WATCHED = 'watched';
// const QUEUE = 'queue';

// const watched = [];
// const queue = [];

// function openModal(event) {
//   if (event.target.nodeName === 'UL') {
//     return;
//   }

//   document.body.insertAdjacentHTML('beforebegin', renderGalleryItems());

//   const liId = event.target.closest('[data-id]').getAttribute('data-id');

//   unsplashApi
//     .infoAboutFilm(liId)
//     .then(({ data }) => {
//       backdrop.classList.toggle('is-hidden');

//       modalContainer.innerHTML = renderFilms(data);

      
//       const btnWatched = document.querySelector('.modal__button-org');
//       const btnQueue = document.querySelector('.modal__button-trans');

      

//       let watchedDataFromStorage = null;

//       try {
//         watchedDataFromStorage = localStorage.getItem(WATCHED);
//         watchedDataFromStorage =
//           watchedDataFromStorage === null
//             ? []
//             : JSON.parse(watchedDataFromStorage);
//       } catch (error) {
//         console.error('Get state error: ', error.message);
//       }

     
//       const watchedFilmFromStorage = watchedDataFromStorage.find(
//         el => el.id === data.id
//       );

//       if (watchedFilmFromStorage) {
//         btnWatched.addEventListener('click', onHandleRemoveWatch);
//         btnWatched.textContent = 'remove from watched';
//       } else {
//         btnWatched.addEventListener('click', onHandleWatch);
//       }

//       function onHandleWatch() {
//         let watchedArr = [];

//         if (!localStorage.getItem(WATCHED)) {
//           watchedArr.push(data);
//           localStorage.setItem(WATCHED, JSON.stringify(watchedArr));

//           btnWatched.removeEventListener('click', onHandleWatch);
//           btnWatched.textContent = 'remove from watched';
//           btnWatched.addEventListener('click', onHandleRemoveWatch);
          
//         } else if (
//           localStorage.getItem(WATCHED).includes(JSON.stringify(data))
//         ) {
//           console.log('Watched film list includes this film!');
//         } else {
//           watchedArr = JSON.parse(localStorage.getItem(WATCHED));
//           watchedArr.push(data);
//           localStorage.setItem(WATCHED, JSON.stringify(watchedArr));

//           btnWatched.removeEventListener('click', onHandleWatch);
//           btnWatched.textContent = 'remove from watched';
//           btnWatched.addEventListener('click', onHandleRemoveWatch);
          
//         }
//       }

//       function onHandleRemoveWatch() {
//         const watchedFilm = JSON.parse(localStorage.getItem(WATCHED));

//         const watchedFilmToRemove = watchedFilm.findIndex(
//           el => el.id === data.id
//         );

//         watchedFilm.splice(watchedFilmToRemove, 1);

//         localStorage.setItem(WATCHED, JSON.stringify(watchedFilm));

//         btnWatched.removeEventListener('click', onHandleRemoveWatch);
//         btnWatched.textContent = 'add to Watched';
//         btnWatched.addEventListener('click', onHandleWatch);
//       }

      

//       let queueDataFromStorage = null;

//       try {
//         queueDataFromStorage = localStorage.getItem(QUEUE);
//         queueDataFromStorage =
//           queueDataFromStorage === null ? [] : JSON.parse(queueDataFromStorage);
//       } catch (error) {
//         console.error('Get state error: ', error.message);
//       }

    
//       const queueFilmFromStorage = queueDataFromStorage.find(
//         el => el.id === data.id
//       );

//       if (queueFilmFromStorage) {
//         btnQueue.addEventListener('click', onHandleRemoveQueue);
//         btnQueue.textContent = 'remove from queue';
//       } else {
//         btnQueue.addEventListener('click', onHandleQueue);
//       }

//       function onHandleQueue() {
//         let queueArr = [];

//         if (!localStorage.getItem(QUEUE)) {
//           queueArr.push(data);
//           localStorage.setItem(QUEUE, JSON.stringify(queueArr));

//           btnQueue.removeEventListener('click', onHandleQueue);
//           btnQueue.textContent = 'remove from queue';
//           btnQueue.addEventListener('click', onHandleRemoveQueue);
          
//         } else if (localStorage.getItem(QUEUE).includes(JSON.stringify(data))) {
//           console.log('queue film list includes this film!');
//         } else {
//           queueArr = JSON.parse(localStorage.getItem(QUEUE));
//           queueArr.push(data);
//           localStorage.setItem(QUEUE, JSON.stringify(queueArr));

//           btnQueue.removeEventListener('click', onHandleQueue);
//           btnQueue.textContent = 'remove from queue';
//           btnQueue.addEventListener('click', onHandleRemoveQueue);
          
//         }
//       }

//       function onHandleRemoveQueue() {
//         const queueFilm = JSON.parse(localStorage.getItem(QUEUE));

//         const queueFilmToRemove = queueFilm.findIndex(el => el.id === data.id);

//         queueFilm.splice(queueFilmToRemove, 1);

//         localStorage.setItem(QUEUE, JSON.stringify(queueFilm));

//         btnQueue.removeEventListener('click', onHandleRemoveQueue);
//         btnQueue.textContent = 'add to queue';
//         btnQueue.addEventListener('click', onHandleQueue);
//       }

     
//     })
//     .finally(() => {
//       document.querySelector('.backdrop-loader').remove();
//     });

//   const closeModalBtn = document.querySelector('.close');

//   closeModalBtn.addEventListener('click', toggleModal);

//   window.addEventListener('keydown', closeModalEsc);

//   backdrop.addEventListener('click', closeModalBackdrop);

//   function closeModalBackdrop(event) {
//     if (event.target === event.currentTarget) {
//       toggleModal();
//     }
//   }

//   function closeModalEsc(event) {
//     if (event.code === 'Escape') {
//       toggleModal();
//     }
//   }

//   function toggleModal() {
//     backdrop.classList.toggle('is-hidden');
//     closeModalBtn.removeEventListener('click', toggleModal);
//     window.removeEventListener('keydown', closeModalEsc);
//     backdrop.removeEventListener('click', closeModalBackdrop);
//   }
// }
// galleryList.addEventListener('click', openModal);
