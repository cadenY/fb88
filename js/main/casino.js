define(['jquery','fun','init','aos','owlCarousel'],function($,fun,init,AOS,owlCarousel) {
//   AOS.init({
//     easing: 'ease-out-back',
//     duration: 1500,
//     once: true
//   });
//
//   setTimeout(function() {
//      $('.owl-carousel').owlCarousel({
//         loop:true,
//         items:1,
//         nav: true,
//         mouseDrag: false,
//      });
//   },300);
    
    $('.prodlink .platform img').click(function() {
        var id = $(this).data('id');
        
        $('#'+id+'.single-content').addClass('active');
        $('.platform-content').delay(100).fadeIn(300);
    });
    
    $('.pc-close').click(function() {
        $('.platform-content').fadeOut(300,function() {
            $('.single-content').removeClass('active');
        });
    });

});
