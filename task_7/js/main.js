"use strict";

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

	speed: 1600,

	effect: "fade",
	fadeEffect: {
		crossFade: true
	}
	});




