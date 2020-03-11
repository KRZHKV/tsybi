$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dotClass: "slider-dot",
    	centerPadding: '50px',
		responsive: [
			 {
			 	breakpoint: 992,
			 	settings: {
				   slidesToShow: 2,
				   arrows: false
			 	}
			},
			{
			  breakpoint: 768,
			  settings: {
				dots: false,
				arrows: false,
				slidesToShow: 1
			  }
			},
			
		  ]
	  });
	
	$('.slider-arrow-prev').on('click', function() {
		event.preventDefault();
		$('.slider').slick('slickPrev');
	  });
	$('.slider-arrow-next').on('click', function() {
		event.preventDefault();
		$('.slider').slick('slickNext');
	  });
	  
});

window.addEventListener('DOMContentLoaded', function() {
	  const body = document.querySelector('body'),
	  		menuBtn = document.querySelector('.menu-btn'),
	  		adaptiveMenu = document.querySelector('.header-menu-adaptive'),
	  		links = adaptiveMenu.querySelectorAll('a');

	  const popup = document.querySelector('.prices-popup-wrapper'),
			popupBtn = document.querySelector('.prices-popup-close'),
			pricesBtn = document.querySelectorAll('.span-btn');
	  
	  links.forEach(function(elem) {
		elem.addEventListener('click', function() {
			adaptiveMenu.classList.toggle('header-menu-adaptive-active');
			body.classList.toggle('overflow-hidden');		
	  	});
	  });

	  menuBtn.addEventListener('click', function() {
		adaptiveMenu.classList.toggle('header-menu-adaptive-active');
		body.classList.toggle('overflow-hidden');
	  });

	  pricesBtn.forEach((elem) => {
		elem.addEventListener('click', () => {
			popup.classList.add('active');
		  });
	  })

	  popup.addEventListener('click', () => {
		  popup.classList.toggle('active');
	  })


});




