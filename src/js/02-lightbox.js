import { galleryItems } from './gallery-items.js';
// Change code below this line
const listOgPhoto = document.querySelector('.gallery');

const photo = galleryItems.map(el => {
    return `
            <a class="gallery__item" href="${el.original}">
                <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
            </a>
           `;
}).join('');

listOgPhoto.innerHTML = photo;

const onListOgPhotoClick = (e) => {
    e.preventDefault();
    const { target } = e;

    if (target.nodeName !== "IMG") {
        return;
    }

    const alt = e.target.alt;
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });
    
    listOgPhoto.removeEventListener('click', onListOgPhotoClick);
};

listOgPhoto.addEventListener('click', onListOgPhotoClick);
console.log(galleryItems);
