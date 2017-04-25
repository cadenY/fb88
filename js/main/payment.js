$(function(){
    // on page load
    setIframeSrc('account');

    // click event
    $('.acct-mngr-nav ul li a').click(function(e) {
        $('.acct-mngr-nav ul li').removeClass('active');
        $(this).parent().addClass('active');
        setIframeSrc($(this).data('href'));
    });

    function setIframeSrc(url) {
        $('#frame').attr('src','manage/'+url+'.html');
        $('#frame').iFrameResize({
            minHeight : 270
        });
    }
});
