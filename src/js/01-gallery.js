import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const list = document.querySelector('.gallery');

function renderList(images) {
    const markup = images.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}">
          </a>
      </li>`;
    }).join('');
  
    list.innerHTML = markup;
  };

  renderList(galleryItems);

  list.style.listStyle = 'none';

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
  });

console.log(galleryItems);
