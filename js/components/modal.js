import { KEYBOARD_KEY } from "../const/keycodes.js";

export class Modal {
    #instance;
    #imageClass;

    constructor(imageClass = 'modal-image') {
        this.#imageClass = imageClass;

        this.#setupModalInstance();
        this.#setupKeyboardEventsListener();
    }

    get isOpen() {
        return this.#instance.visible();
    }

    open({ source, description }) {
        this.#updateModalImgData(source, description)

        this.#instance.show();
        this.#instance.element().focus();
    }

    close() {
        this.#updateModalImgData();
        this.#instance.close();
    }

    #setupModalInstance() {
        // eslint-disable-next-line no-undef
        this.#instance = basicLightbox.create(`<img class="${this.#imageClass}">`, {
            onClose: () => this.#updateModalImgData(),
        });
    }

    #setupKeyboardEventsListener() {
        // modal wrapper is not focusable by default 
        this.#instance.element().tabIndex = 0;
        this.#instance.element().addEventListener('keydown', (ev) => {
            ev.preventDefault(); // some keybindings can shift focus from the modal to other elements behind it
            ev.stopPropagation();

            if (ev.key === KEYBOARD_KEY.ESC) {
                this.close();
            }
        });
    }

    #updateModalImgData(src = '', alt = '') {
        const imageEl = this.#getModalImageEl();

        imageEl.src = src;
        imageEl.alt = alt;
    }

    #getModalImageEl() {
        return this.#instance.element().getElementsByClassName(this.#imageClass)[0];
    }
}
