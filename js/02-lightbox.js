import { galleryItems } from './const/gallery-items.js';
import { HTMLElementUtilities } from './utilities/html-element.js';

let lightbox;
const galleryEl = document.querySelector('.gallery');

fillGallery(galleryItems);
// eslint-disable-next-line no-undef
lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

galleryEl.addEventListener('click', handleClickEvent);

function handleClickEvent(ev) {
    const { target } = ev;

    ev.preventDefault();

    if (HTMLElementUtilities.isIMG(target)) {
        lightbox.open(ev.target);
    }
}

function fillGallery(items) {
    items.forEach(item => {
        const galleryItemEl = createGalleryEl(item);
        galleryEl.appendChild(galleryItemEl);
    });
}

function createGalleryEl({ preview, original, description }) {
    const galleryItemEl = document.createElement('a');
    galleryItemEl.classList.add('gallery__item');
    galleryItemEl.href = original;
    galleryItemEl.innerHTML = `
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
  `;
    return galleryItemEl;
}