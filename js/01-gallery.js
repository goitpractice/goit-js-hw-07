import { galleryItems } from './const/gallery-items.js';
import { HTMLElementUtilities } from './utilities/html-element.js';
import { Modal } from './components/modal.js';

const galleryEl = document.querySelector('.gallery');
const modal = new Modal();

fillGallery(galleryItems);

galleryEl.addEventListener('click', handleClickEvent);

function handleClickEvent(ev) {
  const { target } = ev;

  ev.preventDefault();

  if (HTMLElementUtilities.isIMG(target)) {
    const source = target.dataset.source;
    const description = target.alt;
    modal.open({ source, description });
  }
}

function fillGallery(items) {
  items.forEach(item => {
    const galleryItemEl = createGalleryEl(item);
    galleryEl.appendChild(galleryItemEl);
  });
}

function createGalleryEl({ preview, original, description }) {
  const galleryItemEl = document.createElement('div');
  galleryItemEl.classList.add('gallery__item');
  galleryItemEl.innerHTML = `
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  `;
  return galleryItemEl;
}
