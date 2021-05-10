// name of the file must be "plantshop.js"
var nav = document.querySelector('nav');
var imgContent = document.querySelector('.img-content');
var feturedPlant = document.querySelector('.fetured-plant');
var plantCategory = document.querySelector('.plant-category');
var review = document.querySelector('.review');
var familyOffer = document.querySelector('.family-offer');
var plantGallery = document.querySelector('.plants-gallery');
window.onscroll = function(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        console.log(document.documentElement.scrollTop)
        nav.classList.add('navscroll');
        imgContent.classList.add('img-content-scroll');
    }
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        feturedPlant.classList.add('fade-in');
    }
    if(document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300){
        plantCategory.classList.add('fade-in');
    }
    if(document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300){
        review.classList.add('fade-in');
    }
    if(document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300){
        familyOffer.classList.add('width-increase');
    }
    if(document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700){
        plantGallery.classList.add('fade-in');
    }
    if(document.documentElement.scrollTop == 0){
        console.log(document.documentElement.scrollTop)
        nav.classList.remove('navscroll');
        imgContent.classList.remove('img-content-scroll');
    }
}