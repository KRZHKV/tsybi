$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dotClass: "slider-dot",
    	centerPadding: '50px',
    	prevArrow: "<button class='slider-prev' alt='1'><i class='fas fa-chevron-left'></i></button>",
		nextArrow: "<button class='slider-next' alt='1'><i class='fas fa-chevron-right'></i></button>",
		responsive: [
			 {
			 	breakpoint: 992,
			 	settings: {
			 	  slidesToShow: 2
			 	}
			},
			{
			  breakpoint: 768,
			  settings: {
				dots: false,
				slidesToShow: 1
			  }
			},
			
		  ]
	  });
	  
});

window.addEventListener('DOMContentLoaded', function() {
	
	  const menuBtn = document.querySelector('.menu-btn');
	  const adaptiveMenu = document.querySelector('.header-menu-adaptive');
	  const links = adaptiveMenu.querySelectorAll('a');
	  
	  links.forEach(function(elem) {
		elem.addEventListener('click', function() {
			adaptiveMenu.classList.toggle('header-menu-adaptive-active');
	  });
	  });
	  menuBtn.addEventListener('click', function() {
		  adaptiveMenu.classList.toggle('header-menu-adaptive-active');
	  });

})




