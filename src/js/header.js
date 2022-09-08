import UnsplashAPI from './fetch-films';
import { renderGalleryItems } from './gallery';
import { createPagination } from './pagination';

const unsplashAPI = new UnsplashAPI();

const searchForm = document.querySelector('.search-form');
const empty = document.querySelector('.empty');
const notFound = document.querySelector('.not-found');

searchForm.addEventListener('submit', searchFilm);

async function searchFilm(event) {
  event.preventDefault();
  empty.style.display = 'none';
  notFound.style.display = 'none';
  // const seartchResult = event.currentTarget.input.value;
  unsplashAPI.searchQuery = event.currentTarget.input.value
    .trim()
    .toLowerCase();

  // console.log(unsplashAPI.searchQuery);
  if (unsplashAPI.searchQuery === '') {
    notFound.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  try {
    const result = await unsplashAPI.searchMovies();
    if (result.results.length === 0) {
      empty.style.display = 'none';
      notFound.style.display = 'block';
      return;
    }
    const pagination = createPagination({
      totalItems: result.total_results,
      page: result.page,
      totalPages: result.total_pages,
    });
    pagination.on('afterMove', event => {
      unsplashAPI.page = event.page;
      //  console.log(unsplashAPI.page);
      unsplashAPI.searchMovies().then(result => {
        //  console.log(result);
        notFound.style.display = 'none';

        empty.style.display = 'none';
        renderGalleryItems(result.results);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
    // console.log(results);

    renderGalleryItems(result.results);

    // console.log(results);
  } catch (error) {
    console.log(error.message);
  }
}
