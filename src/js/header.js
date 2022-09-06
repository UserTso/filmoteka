import UnsplashAPI from './fetch-films';
import { renderGalleryItems } from './gallery';

const unsplashAPI = new UnsplashAPI();

const searchForm = document.querySelector('.search-form');
const empty = document.querySelector('.empty');
const notFound = document.querySelector('.not-found');

searchForm.addEventListener('submit', searchFilm);

async function searchFilm(event) {
  event.preventDefault();

  // const seartchResult = event.currentTarget.input.value;
  unsplashAPI.searchQuery = event.currentTarget.input.value
    .trim()
    .toLowerCase();

  // console.log(unsplashAPI.searchQuery);
  if (unsplashAPI.searchQuery === '') {
    empty.style.display = 'block';
    return;
  }
  try {
    const { results } = await unsplashAPI.searchMovies();
    if (results.length === 0) {
      return alert('ничего не нашлось');
    }
    // console.log(results);
    renderGalleryItems(results);

    // console.log(results);
  } catch (error) {
    console.log(error.message);
  }
}

// function alertMessage(element) {
//     element.style.display = 'block';
//     // captionDelay: 250
// }
