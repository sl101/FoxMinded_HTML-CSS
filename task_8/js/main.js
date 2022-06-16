"use strict";

// Burger =============================================
const burger = document.querySelector('.burger');
const menuBody = document.querySelector('.menu__body');
const fixedBlocks = document.querySelectorAll('.fixed');

if (burger) {
	burger.addEventListener("click", function (e) {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		if (document.body.classList.contains('lock')) {
			burger_close();
		} else {
			burger_open(paddingOffset);
		}
	});
}

function burger_open(element) {
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = element;
	});
	document.body.style.paddingRight = element;
	document.body.classList.add("lock");
	burger.classList.add("active");
	menuBody.classList.add("active");
}

function burger_close() {
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = '0';
	});
	document.body.style.paddingRight = '0';
	document.body.classList.remove("lock");
	burger.classList.remove("active");
	menuBody.classList.remove("active");
}

// Swiper
const slider = new Swiper('.slider-reviews',{

	wrapperClass: 'slider-reviews__wrapper',
	slideClass: 'slider-reviews__slide',
	
	navigation: {
		nextEl: '.slider-reviews__button--next',
		prevEl: '.slider-reviews__button--prev',
	},

	spaceBetween: 50,
	speed: 1600,
	});




