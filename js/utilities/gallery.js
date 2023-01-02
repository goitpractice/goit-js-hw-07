export function fillGallery(containerEl, buildData, builderFn) {
    buildData.forEach(item => {
        const galleryItemEl = builderFn(item);
        containerEl.appendChild(galleryItemEl);
    });
}