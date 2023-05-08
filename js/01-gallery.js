import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const imgCard = createGalleryMurkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imgCard);

galleryEl.addEventListener('click', onImageClick)

function createGalleryMurkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`;
})
.join('');
}

function onImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(evt.target)

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    document.addEventListener('keydown', onEscapePress)

    function onEscapePress(evt) {
        if (evt.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onEscapePress);
        }
    }
}