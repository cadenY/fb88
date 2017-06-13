var j = jQuery.noConflict();

j(function(){
    j.getScript("../js/jquery.datetimepicker.full.js");
    j.getScript("../js/method/functions.js");
    var jsArray =  ['../js/header/functions.js','../js/header/custom.js','../js/jscript.js'];
    j('#header').load('../header-payment.html', function() {
         for(var i = 0; i < jsArray.length; i ++){
             j.getScript(jsArray[i]);
         }
    });
    j('#copyrights').load('../footer.html');

    var w = isMobile();
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

        j('html,body').animate({
                scrollTop: j("#depoFrame").offset().top + -250
        },1000);
    });

    j(document).on('click','.depoFrame-nav li a', function(){
        if(!j(this).parent().hasClass('active')){
            setIframeSrc(j(this).data('href'),1);
        } else {
            return false;
        }
    });

    function setIframeSrc(url,ref) {
        switch(ref){
            case 0:
                // j('#frame').attr('src','../manage/'+url+'.html');
                j('#frame').load('../manage/'+url+'.html');

                break;
            default:
                // j('#depoFrame').attr('src',url+'-light.html');

                j('#depoFrame').load(url+'-light.html', function(){
                    setTimeout(function(){
                        initEvt(url);
                    },0);
                });
        }
    }

    function initEvt(url){
        switch (url) {
            case 'deposit':
                j('#amount').keyup(function(event){
                    if (event.which >= 37 && event.which <= 40) return;
                    j(this).formatAmount();
                });

                // datetime
                j('#fd-date').datetimepicker({
                    value: {
                        format: 'd/m/Y'
                    },
                    timepicker:false,
                    format:'d/m/Y',
                    maxDate: new Date(),
                    defaultDate: new Date()
                });

                j('#hr').generateTime('hh');
                j('#min').generateTime('mm');

                j('#bank').change(function(){
                    if(j(this).val() == 'other'){
                        j('#bankNameRow').show();
                    }else {
                        j('#bankNameRow').hide();
                    }
                });

                //submit
                j('.btn-submit').click(function(e){
                    e.preventDefault();
                    // if sucess
                    fnDisplayMsg();
                });
                break;
            case 'deposit-local1':
            case 'deposit-local2':
                j('#amount').keyup(function(event){
                    if (event.which >= 37 && event.which <= 40) return;
                    j(this).formatAmount();
                });

                //submit
                j('.btn-submit').click(function(e){
                    e.preventDefault();
                    // if sucess
                    fnDisplayMsg();
                });
                break;
            case 'deposit-fb88':
                j('#amount').keyup(function(event){
                    if (event.which >= 37 && event.which <= 40) return;
                    j(this).formatAmount();
                });

                j('#bank').change(function(){
                    if(j(this).val() == 'other'){
                        j('#bankNameRow').show();
                    }else {
                        j('#bankNameRow').hide();
                    }
                });

                //submit
                j('.btn-submit').click(function(e){
                    e.preventDefault();
                    // if sucess
                    fnDisplayMsg();
                });
                break;
            case 'deposit-scratch-card':
                j('.btn-submit').click(function(e){
                    e.preventDefault();
                    // if sucess
                    fnDisplayMsg();
                });
                break;
            case 'transfer':
                j('#amount').keyup(function(event){
                    if (event.which >= 37 && event.which <= 40) return;
                    j(this).formatAmount();
                });
                break;
            case 'withdraw':
                j('#amount').keyup(function(event){
                    if (event.which >= 37 && event.which <= 40) return;
                    j(this).formatAmount();
                });

                j('#bank').change(function(){
                    if(j(this).val() == 'other'){
                        j('#bankNameRow').show();
                    }else {
                        j('#bankNameRow').hide();
                    }
                });

                //submit
                j('.btn-submit').click(function(e){
                    e.preventDefault();
                    // if sucess
                    fnDisplayMsg();
                });
                break;
            case 'withdraw-ewallet':
                j('#amount').keyup(function(event){
                    if (event.which >= 37 && event.which <= 40) return;
                    j(this).formatAmount();
                });

                //submit
                j('.btn-submit').click(function(e){
                    e.preventDefault();
                    // if sucess
                    fnDisplayMsg();
                });
            // case 'freebet':
            case 'history':
            case 'history-adjustment':
            case 'history-fund-transfer':
            case 'history-promotion-claim':
                j('.datepicker').datetimepicker({
                    value: {
                        format: 'd/m/Y'
                    },
                    timepicker:false,
                    format:'d/m/Y',
                    maxDate: new Date(),
                    defaultDate: new Date()
                });
                break;
            // case 'upload'
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
