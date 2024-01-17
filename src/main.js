'use strict';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const searchParameters = {
  key: '41869346-1dc68e1b0e88fdca1b815defb',
  q: 'black',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
  
async function searchImg(params) {
  try {
        try {
            const response = await fetch(`https://pixabay.com/api/?${params}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const { hits } = await response.json();
            if (hits.length > 0) {
                const renderImg = hits.reduce((html, hit) => {
                    return (
                        html +
                        `<li class="gallery-item">
        <a href=${hit.largeImageURL}> 
          <img class="gallery-link" src =${hit.webformatURL} alt=${hit.tags} width='360' height='200'/>
        </a>
        <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${hit.likes}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${hit.views}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${hit.comments}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${hit.downloads}</span></p></li>
              </ul>
      </li>`
                    );
                }, '');
                gallery.innerHTML = renderImg;

                lightbox.refresh();
            } else {
                iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: '#ef4040',
                    messageSize: '16px',
                    messageColor: '#fafafb',
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    } finally {
      loader.style.display = 'none';
    }
}
form.addEventListener('submit', event => {
  event.preventDefault();
    gallery.innerHTML = '';
    loader.style.display = 'block';


  searchParameters.q = event.target.elements.search.value.trim();
  const searchParams = new URLSearchParams(searchParameters);
  searchImg(searchParams);
  event.currentTarget.reset();
});
