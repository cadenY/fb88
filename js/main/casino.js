$(function() {
      
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
