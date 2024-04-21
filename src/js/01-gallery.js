
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
  
    function createGalleryItem(item) {
      const li = document.createElement("li");
      li.classList.add("gallery__item");
  
      const link = document.createElement("a");
      link.classList.add("gallery__link");
      link.href = item.original;
  
      const image = document.createElement("img");
      image.classList.add("gallery__image");
      image.src = item.preview;
      image.dataset.source = item.original;
      image.alt = item.description;
  
      link.appendChild(image);
      li.appendChild(link);
  
      return li;
    }
  
    function openModal(event) {
      event.preventDefault();
      if (event.target.nodeName !== "IMG") {
        return;
      }
      const imageURL = event.target.dataset.source;
      const instance = basicLightbox.create(`
          <div class="modal">
            <img src="${imageURL}" width="800" height="600">
          </div>
        `);
      instance.show();
  
      document.addEventListener("keydown", closeModalOnEscape);
    }
  
    // function closeModalOnEscape(event) {
    // if (event.key === "Escape" && lightboxInstance) {
    //   lightboxInstance.close();
    //   document.removeEventListener("keydown", closeModalOnEscape);
    // }
    //}
  
    galleryItems.forEach((item) => {
      const galleryItem = createGalleryItem(item);
      gallery.appendChild(galleryItem);
    });
  
    gallery.addEventListener("click", openModal);
  });
  
console.log(galleryItems);
