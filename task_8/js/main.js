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

// Animation ====================================

	let blockAnimate = true;
	const window_height = window.innerHeight;  // высота окна браузера
	const animElements = document.querySelectorAll('.anim-item');
	
	if(animElements.length > 0){
		
		window.addEventListener('scroll', animOnScroll); // ставим слушатель на окно
	
		function animOnScroll (param){ 
			for(let i = 0; i < animElements.length; i++) {
				
				let animItem = animElements[i];
				let animItemHeight = animItem.offsetHeight; // высота елемента
				let animItemOffset = offset(animItem).top; // расстояние от верха элемента до начала страницы
				let animStart = 1; // коэфициент 
				
				let animItemPoint = (window_height - animItemHeight / animStart); // часть элемета при появлениии которой запускается анимация
				
				if(animItemHeight > window_height){
					animItemPoint = window_height - window_height / animStart; // часть элемета при появлениии которой запускается анимация, если элемент больше окна
				}
				if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
						animItem.classList.add('_animate');
				} else {
					if(!animItem.classList.contains('_anim-no-hide')){ 
						animItem.classList.remove('_animate');
					}
				}
			}
		}
	
		function offset(el) {
			const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
		}
	
		setTimeout(() => {
			animOnScroll();
		},300);
	};
	


