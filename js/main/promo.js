$(function(){
    // on page load
    var $grid = $('.promo-grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    $('ul.p-nav li a').click(function(e) {
      $('ul.p-nav li').removeClass('active');
      $(this).parent().addClass('active');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // fancybox
    $("[data-promo-fancybox]").fancybox({
        margin: [0,0,0,0],
        infobar : false,
        buttons : false,
        smallBtn: false,
        onComplete: function(instance, slide){
          $('.fancybox-container').click(function(e){
            if( $(e.target).hasClass('fancybox-slide--current') ){
              $.fancybox.close();
            }
          })
        }
    });


});
