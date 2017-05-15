$(function(){
    // on page load
    $('#frame').iFrameResize({
        minHeight : 0
    });

    $('#depoFrame').iFrameResize({
        minHeight : 250
    });

    setIframeSrc('account',0);
    setIframeSrc('deposit',1);

    $('.img-nav').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            $('.img-nav').removeClass('active');
            setActiveNav($(this).attr('data-ref'));
            setIframeSrc($(this).attr('data-ref'),0);
            $('.account-mngr').stop().animate({
                height: 269
            },600);
            $(this).addClass('active');
        }else {
            $('.account-mngr').css('overflow','hidden');
            $('.account-mngr').stop().animate({
                height: 0
            },600);
            $(this).removeClass('active');
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

    function setActiveNav(ref){
        console.log(ref);
        $('.acct-mngr-nav ul li').removeClass('active');
        $('.acct-mngr-nav ul li a[data-href="'+ref+'"]').parent().addClass('active');
    }
});
