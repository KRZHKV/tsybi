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
	  const body = document.querySelector('body');
	  const menuBtn = document.querySelector('.menu-btn');
	  const adaptiveMenu = document.querySelector('.header-menu-adaptive');
	  const links = adaptiveMenu.querySelectorAll('a');
	  
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

})




