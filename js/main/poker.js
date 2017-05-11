$(function(){
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
         mouseDrag: false,
      });
   },300);

});
