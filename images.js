const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.main-image');
const lightBox = document.querySelector('.light-box');
const lightBoxImg = document.querySelector('.light-box__img');
const nextArrow = document.querySelector('.light-box__arrow--next');
const previousArrow = document.querySelector('.light-box__arrow--previous');
const galleryImagesArray = document.querySelectorAll('.gallery__img');


gallery.addEventListener('click', changeImgGallery);
mainImage.addEventListener('click', openLightBox);
lightBox.addEventListener('click', closeLightBox);
nextArrow.addEventListener('click', btnNext);
previousArrow.addEventListener('click', btnPrevious);


function changeImgGallery(e){
    if(e.target.classList.contains('gallery__img')){
        const srcImage = e.target.src;
        mainImage.src = srcImage;
        removeFocusImageGallery();
        addFocusImageGallery(e.target);
    } 
};

function openLightBox(e){
    lightBoxImg.src = e.target.src;
    lightBox.classList.remove('hidden');
}

function closeLightBox(e){
    if(e.target.classList.contains('light-box__img') || e.target.classList.contains('arrow') || e.target.classList.contains('light-box__arrow')) return;
    lightBox.classList.add('hidden');
}

function getIndexMainImage(){
    const idImage = mainImage.src.split('//').pop().split('/').pop().replace('.jpg','').replace('image-product-', '');
    return idImage;
}

function btnNext(){
    let idImage = getIndexMainImage();
    idImage++;
    if(idImage > 4) idImage = 1;
    setMainImage(idImage);
}

function btnPrevious(){
    let idImage = getIndexMainImage();
    idImage--;
    if(idImage < 1) idImage = 4;
    setMainImage(idImage);
}

function setMainImage(imageIndex){
    let idMainImage = `./images/image-product-${imageIndex}.jpg`;
    mainImage.src = idMainImage;
    lightBoxImg.src = idMainImage;
}

function removeFocusImageGallery(){
    galleryImagesArray.forEach(image => {
        image.classList.remove('selected--img');
        image.parentElement.classList.remove('selected--container');
    });
}

function addFocusImageGallery(element){
    element.classList.add('selected--img');
    element.parentElement.classList.add('selected--container');
}