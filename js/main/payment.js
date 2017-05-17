$(function(){
    var w = isMobile();
    // on page load
    $('#frame').iFrameResize({
        minHeight : 0
    });

    $('#depoFrame').iFrameResize({
        minHeight : 250
    });

    var url = window.location.href;

    if(url.indexOf('?') != -1 ) {
        var queryItem = url.split('?')[1],
            id = queryItem.split('&')[0].split('=')[1],
            ref = queryItem.split('&')[1].split('=')[1];

        if(queryItem != ''){
            switch (id) {
                case '0':
                    setIframeSrc(ref,0);
                    $('.acct-mngr-nav ul li').removeClass('active');
                    $('.acct-mngr-nav ul li a[data-href="'+ref+'"]').parent().addClass('active');

                    setTimeout(function(){
                        $('.account-mngr').stop().animate({
                            height: $('#frame').height()
                        },600);

                        setIframeSrc('deposit',1);
                    },300);


                    break;
                case '1':
                    $('.mgnt-deposit-nav ul li').removeClass('active');
                    $('.mgnt-deposit-nav ul li a[data-href="'+ref+'"]').parent().addClass('active');
                    setIframeSrc('account',0);
                    setIframeSrc(ref,1);
                    break;
            }
        }
    } else {
        setIframeSrc('account',0);
        setIframeSrc('deposit',1);
    }

    $('.img-nav').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            $('.img-nav').removeClass('active');
            setActiveNav($(this).attr('data-ref'));
            setIframeSrc($(this).attr('data-ref'),0);
            $('.account-mngr').stop().animate({
                height: isMobile()
            },600);
            $(this).addClass('active');
        } else {
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

        if(!$(this).parent().hasClass('active')) {
            $('.acct-mngr-nav ul li').removeClass('active');
            $(this).parent().addClass('active');
            setIframeSrc($(this).data('href'),0);
        } else {
            return false;
        }
    });

    $('.mgnt-deposit-nav ul li a').click(function(e) {
        if(!$(this).parent().hasClass('active')){
            $('.mgnt-deposit-nav ul li').removeClass('active');
            $(this).parent().addClass('active');
            setIframeSrc($(this).data('href'),1);
        } else {
            return false;
        }

        // console.log($("#depoFrame").offset().top);
        $('html,body').animate({
                scrollTop: $("#depoFrame").offset().top + -250
        },1000);
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
        $('.acct-mngr-nav ul li').removeClass('active');
        $('.acct-mngr-nav ul li a[data-href="'+ref+'"]').parent().addClass('active');
    }

    function isMobile() {
        var width = $(window).width();
        // console.log(width);
        if(width <= 568){
            return 680;
        } else if(width <= 640) {
            return 510;
        } else if(width <= 977) {
            return 345;
        } else  {
            return 269;
        }

    }
});
