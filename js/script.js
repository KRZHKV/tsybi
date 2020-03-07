$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		dots: true,
		centerMode: true,
		dotClass: "slider-dot",
    	centerPadding: '50px',
    	prevArrow: "<button class='slider-prev' alt='1'><i class='fas fa-chevron-left'></i></button>",
    	nextArrow: "<button class='slider-next' alt='1'><i class='fas fa-chevron-right'></i></button>"
	  });
	  
	  let dots = document.querySelectorAll('button[role="tab"]');
	  dots.forEach((elem) => {
		elem.textContent = '';
	  });
});




