"use strict";

// const swiperEx = new Swiper('.swiper',{

// wrapperClass: 'swiper__wrapper',
// slideClass: 'swiper__slide',

// navigation: {
// 	nextEl: '.hero__arrow--next',
// 	prevEl: '.hero__arrow--prev',
// },

// 	spaceBetween: 20,
// 	centeredSlides: true,
// 	slidesPerView: 4,
// 	slidesPerGroup: 1,
	
// });


const carousel = new Swiper('.carousel',{

	wrapperClass: 'carousel__wrapper',
	slideClass: 'carousel__slide',
	
	navigation: {
		nextEl: '.carousel__arrow--next',
		prevEl: '.carousel__arrow--prev',
	},
	
	pagination: {
		el: '.carousel__pagination',
		clickable: true,
		type: 'bullets',
	},

	// spaceBetween: 70,
	speed: 1200,
	// loop: true,

	// effect: "fade",
	// fadeEffect: {
	// 	crossFade: true
	// }
	});




