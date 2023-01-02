import { Gallery } from "./components/gallery.js";
import { galleryItems } from "./const/gallery-items.js";

// eslint-disable-next-line no-undef
const modal = new SimpleLightbox(".gallery a", { captionDelay: 250 });
const gallery = new Gallery(modal);

gallery.fillGallery(galleryItems, buildGalleryItem);

// simplelightbox is a gallery manager & requires refresh after the gallery items were populated
modal.refresh();

function buildGalleryItem({ preview, original, description }) {
  const galleryItemEl = document.createElement("a");

  galleryItemEl.classList.add("gallery__item");
  galleryItemEl.href = original;
  galleryItemEl.innerHTML = `
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
  `;

  return galleryItemEl;
}
