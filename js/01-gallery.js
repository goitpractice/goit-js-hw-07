import { galleryItems } from "./const/gallery-items.js";
import { Modal } from "./components/modal.js";
import { Gallery } from "./components/gallery.js";

// eslint-disable-next-line no-undef
const modal = new Modal();
const gallery = new Gallery(modal);

gallery.fillGallery(galleryItems, buildGalleryItem);

function buildGalleryItem({ preview, original, description }) {
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
