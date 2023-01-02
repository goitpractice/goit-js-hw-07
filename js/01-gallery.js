import { galleryItems } from "./const/gallery-items.js";
import { HTMLElementUtilities } from "./utilities/html-element.js";
import { Modal } from "./components/modal.js";
import { fillGallery } from "./utilities/gallery.js";

const galleryEl = document.querySelector(".gallery");
const modal = new Modal();

fillGallery(galleryEl, galleryItems, createGalleryEl);

galleryEl.addEventListener("click", handleClickEvent);

function handleClickEvent(ev) {
  const { target } = ev;

  ev.preventDefault();

  if (HTMLElementUtilities.isIMG(target)) {
    modal.open(target);
  }
}

function createGalleryEl({ preview, original, description }) {
  const galleryItemEl = document.createElement("div");

  galleryItemEl.classList.add("gallery__item");
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
