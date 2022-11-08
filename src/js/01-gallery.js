'use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line
const listOfImage = document.querySelector('.gallery');

const photo = galleryItems.map(el => {
    return `
    <li class="gallery__item">
        <img src="${el.preview}" 
             alt="${el.description}"
             data-source="${el.original}" 
             class="gallery__image">
    </li>
    `;
}).join('');

listOfImage.innerHTML = photo;

const onListOfImageClick = (e) => {
    const { target } = e;
    if (target.nodeName !== 'IMG') {
        return;
    }

    const onListOfImageKeydown = (e) => {
        if (e.code === 'Escape') {
            console.log(e.code);
            instance.close(); 
        }
    };

    const objOfMethod = {
        onShow: () => {window.addEventListener('keydown', onListOfImageKeydown); },
        onClose: () => {window.removeEventListener('keydown', onListOfImageKeydown);}
    };

    const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="800" height="600">`, objOfMethod);

    instance.show();

};

listOfImage.addEventListener('click', onListOfImageClick);

