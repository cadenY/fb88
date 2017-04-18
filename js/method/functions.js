define(['jquery'],function($) {
   var doc = document;

   // flag
   $(doc).on('click','.flag-wrap', function(e) {
      e.stopPropagation();
      $(this).toggleClass('active');
   });

   $(doc).click(function(e) {
      e.stopPropagation();
      var container = $(".flag-wrap");

      //check if the clicked area is dropDown or not
      if (container.has(e.target).length === 0) {
         $('.flag-wrap').removeClass('active');
      }  
   });

   //nav mouse hover
   $(doc).on('mouseenter','.hasSub',function(e){
         $(e.currentTarget).addClass('active');
         $('.submenu').stop().slideDown(300);
      })
      .on('mouseleave','.hasSub,.submenu',function(e){
         if(!$(e.relatedTarget).parents().hasClass('submenu')){
            $('.hasSub.active').removeClass('active');
            $('.submenu').stop().slideUp(300);
         }
      });

   // iterate class
   setInterval(function(){
      if($('.nav ul li.hasUpdate').hasClass('animate')) {
         $('.nav ul li.hasUpdate').removeClass('animate');
      } else {
         $('.nav ul li.hasUpdate').addClass('animate');
      }
   },3000);
   
});
