const gallery = document.querySelector('.gallery-list');

import UnsplashAPI from './fetch-films';
const unsplashAPI = new UnsplashAPI();

// !--------Popular Films to main-------------------

async function popularFilms() {
  try {
    const { results } = await unsplashAPI.fetchPopularFilms();
    // console.log(results);
    renderGalleryItems(results);
  } catch (error) {
    console.log(error.message);
  }
}

popularFilms();

// ?-----------------Render Gallery----------------

export async function renderGalleryItems(films) {
  try {
    const { genres } = await unsplashAPI.fetchGeneres();
    // console.log(genres);
    const generesConfig = getGeneresConfig(genres);
    // console.log(generesConfig);
    const markup = films
      .map(film => {
        return `<li class='list-item'>
      <img class='poster' src="${`https://image.tmdb.org/t/p/w500${film.poster_path}` ||
          `../images/gallery/355e4b0ed8a86718cd2468096b9b9190.jpg`
          }"
  alt="${film.title}"
  /><h2 class='title'>${film.title}</h2>
  <p class='info'>${mapGanereId(film.genre_ids, generesConfig)} &#124 ${film.release_date.slice(0, 4) || 'Unknown'
          }</p></li>`;
      })
      .join('');
    gallery.innerHTML = markup;
  } catch (error) {
    console.log(error.message);
  }
}

// ?----------------Replaces 'id' with ganeres 'name'---------

function mapGanereId(filmGeneresId, generesConfig) {
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
