import UnsplashAPI from './fetch-films';


const unsplashAPI = new UnsplashAPI();

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('sibmit', searchFilm);


async function searchFilm(event) {
    event.preventDefault();

    unsplashAPI.searchQuery = event.currentTarget.elements.searchQuery.value;

    try {
        const results = await unsplashAPI.searchMovies();
        console.log(results);
    } catch (error) {
        console.log(error.message);
    }
}

console.log('hello');