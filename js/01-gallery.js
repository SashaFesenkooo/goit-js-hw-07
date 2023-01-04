import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(createGalleryMarkup(galleryItems));

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  const markup = items.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
       <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
           src="${preview}"
             data-source="${original}"
              alt="${description}"
            />
           </a>
    </div> `;
  });
 
  return markup.join('');

  
}


galleryContainer.addEventListener("click", onClickGalleryElement);
function onClickGalleryElement(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  const instance = basicLightbox.create(
  `
    <img src="${event.target.dataset.source}" width="900" height="600">`,
)

instance.show() };

