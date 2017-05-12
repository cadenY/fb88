$(function(){
    // on page load
    $('iframe').iFrameResize({
        minHeight : 0
    });

    setIframeSrc('account',0);
    setIframeSrc('transfer',1);

    // show hide account setting panel
    $('.acct-profile img').click(function(e){
        e.preventDefault();
        if(!$(this).parent().hasClass('active')){
            $('.account-mngr').animate({
                height: 269
            },600);
            $(this).parent().addClass('active');
        }else {
            $('.account-mngr').css('overflow','hidden');
            $('.account-mngr').animate({
                height: 0
            },600);
            $(this).parent().removeClass('active');
        }
    });

    // click event for manage account nav
    $('.acct-mngr-nav ul li a').click(function(e) {
        $('.account-mngr').css('height','auto');

        $('.acct-mngr-nav ul li').removeClass('active');
        $(this).parent().addClass('active');
        setIframeSrc($(this).data('href'),0);
    });

    $('.mgnt-deposit-nav ul li a').click(function(e) {
        $('.mgnt-deposit-nav ul li').removeClass('active');
        $(this).parent().addClass('active');
        setIframeSrc($(this).data('href'),1);
    });

    function setIframeSrc(url,ref) {
        switch(ref){
            case 0:
                $('#frame').attr('src','../manage/'+url+'.html');
                break;
            default:
                $('#depoFrame').attr('src',url+'.html');
        }
    }
});
