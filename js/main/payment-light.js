var j = jQuery.noConflict();

j(function(){
    var jsArray =  ['../js/header/functions.js','../js/header/custom.js','../js/jscript.js'];
    j('#header').load('../header-payment.html', function() {
         for(var i = 0; i < jsArray.length; i ++){
             j.getScript(jsArray[i]);
         }
    });
    j('#copyrights').load('../footer.html');

    var w = isMobile();
    // on page load
    j('#frame').iFrameResize({
        minHeight : 0
    });

    j('#depoFrame').iFrameResize({
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
                    j('.acct-mngr-nav ul li').removeClass('active');
                    j('.acct-mngr-nav ul li a[data-href="'+ref+'"]').parent().addClass('active');

                    setTimeout(function(){
                        j('.account-mngr').stop().animate({
                            height: j('#frame').height()
                        },600);

                        setIframeSrc('deposit',1);
                    },300);
                    break;
                case '1':
                    j('.mgnt-deposit-nav ul li').removeClass('active');
                    j('.mgnt-deposit-nav ul li a[data-href="'+ref+'"]').parent().addClass('active');
                    setIframeSrc('account',0);
                    setIframeSrc(ref,1);
                    break;
            }
        }
    } else {
        setIframeSrc('account',0);
        setIframeSrc('deposit',1);
    }

    j('.img-nav').click(function(e){
        e.preventDefault();
        if(!j(this).hasClass('active')){
            j('.img-nav').removeClass('active');
            setActiveNav(j(this).attr('data-ref'));
            setIframeSrc(j(this).attr('data-ref'),0);
            j('.account-mngr').stop().animate({
                height: isMobile()
            },600);
            j(this).addClass('active');
        } else {
            j('.account-mngr').css('overflow','hidden');
            j('.account-mngr').stop().animate({
                height: 0
            },600);
            j(this).removeClass('active');
        }
    });

    // click event for manage account nav
    j('.acct-mngr-nav ul li a').click(function(e) {
        j('.account-mngr').css('height','auto');

        if(!j(this).parent().hasClass('active')) {
            j('.acct-mngr-nav ul li').removeClass('active');
            j(this).parent().addClass('active');
            setIframeSrc(j(this).data('href'),0);
        } else {
            return false;
        }
    });

    j('.mgnt-deposit-nav ul li a').click(function(e) {
        if(!j(this).parent().hasClass('active')){
            j('.mgnt-deposit-nav ul li').removeClass('active');
            j(this).parent().addClass('active');
            setIframeSrc(j(this).data('href'),1);
        } else {
            return false;
        }

        // console.log($("#depoFrame").offset().top);
        j('html,body').animate({
                scrollTop: j("#depoFrame").offset().top + -250
        },1000);
    });

    function setIframeSrc(url,ref) {
        switch(ref){
            case 0:
                j('#frame').attr('src','../manage/'+url+'.html');
                break;
            default:
                j('#depoFrame').attr('src',url+'-light.html');
        }
    }

    function setActiveNav(ref){
        j('.acct-mngr-nav ul li').removeClass('active');
        j('.acct-mngr-nav ul li a[data-href="'+ref+'"]').parent().addClass('active');
    }

    function isMobile() {
        var width = j(window).width();
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
