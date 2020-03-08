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
	  
	  let dots = document.querySelectorAll('button[role="tab"]');
	  dots.forEach((elem) => {
		elem.textContent = '';
	  });
	  const menuBtn = document.querySelector('.menu-btn');
	  const adaptiveMenu = document.querySelector('.header-menu-adaptive');
	  

	  menuBtn.addEventListener('click', function() {
		  console.log('click');
		  adaptiveMenu.classList.toggle('header-menu-adaptive-active');
	  });
});




