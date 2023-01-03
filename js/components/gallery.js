import { HTMLUtilities } from "../utilities/html.js";

export class Gallery {
  #modalService;
  #galleryEl;

  constructor(modalService) {
    this.#modalService = modalService;
    this.#galleryEl = document.querySelector(".gallery");

    this.#listenToGalleryItemClick();
  }

  fillGallery(buildDataArr, buildGalleryItemFn) {
    buildDataArr.forEach((item) => {
      const galleryItemEl = buildGalleryItemFn(item);
      this.#galleryEl.appendChild(galleryItemEl);
    });
  }

  #listenToGalleryItemClick() {
    this.#galleryEl.addEventListener("click", (ev) => {
      ev.preventDefault();

      if (HTMLUtilities.isIMG(ev.target)) {
        this.#modalService.open(ev.target);
      }
    });
  }
}
