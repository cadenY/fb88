$(function() {
      
    $('.prodlink .platform img').click(function() {
        var id = $(this).data('id');

        $('#'+id+'.single-content').addClass('active');
        $('.platform-content').delay(100).fadeIn(300);
    });

    $('.platform-content').click(function(e){
        console.log(typeof $(e.target).attr('class'))
        if(typeof $(e.target).attr('class') != 'undefined') {
            $('.platform-content').fadeOut(300,function() {
                $('.single-content').removeClass('active');
            });
        }
    });

});
