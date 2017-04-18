define(['jquery','fun','init','aos','owlCarousel'],function($,fun,init,AOS,owlCarousel) {
	AOS.init({
		easing: 'ease-out-back',
		duration: 1500,
		once: true
	});
   setTimeout(function() {
      $('.owl-carousel').owlCarousel({
         loop:true,
         items:1,
         nav: true,
         mouseDrag: false
      });  
   },300);
   
});
