$(function(){
    // on page load
    var $grid = $('.promo-grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      getSortData: {
        all: '.all',
        new: '.new',
        special: '.special'
      }
    })



    $('ul.p-nav li a').click(function(e) {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({ sortBy: sortByValue });
    });

});
