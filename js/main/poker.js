var xx = jQuery.noConflict();

xx(function(){

   AOS.init({
     easing: 'ease-out-back',
     duration: 1500,
     once: true
   });

   setTimeout(function() {
      xx('.owl-carousel').owlCarousel({
         loop:true,
         items:1,
         nav: true,
         mouseDrag: false,
         autoplay:true,
         autoplayTimeout:5000,
         autoplayHoverPause:true
      });
   },300);
   
});
