import { galleryItems } from "./const/gallery-items.js";
import { fillGallery } from "./utilities/gallery.js";
import { HTMLElementUtilities } from "./utilities/html-element.js";

let modal;
const galleryEl = document.querySelector(".gallery");

fillGallery(galleryEl, galleryItems, createGalleryEl);

// eslint-disable-next-line no-undef
modal = new SimpleLightbox(".gallery a", { captionDelay: 250 });

galleryEl.addEventListener("click", handleClickEvent);

function handleClickEvent(ev) {
  const { target } = ev;

  ev.preventDefault();

  if (HTMLElementUtilities.isIMG(target)) {
    modal.open(ev.target);
  }
}

function createGalleryEl({ preview, original, description }) {
  const galleryItemEl = document.createElement("a");

  galleryItemEl.classList.add("gallery__item");
  galleryItemEl.href = original;
  galleryItemEl.innerHTML = `
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
  `;

  return galleryItemEl;
}
