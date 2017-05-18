var qw = jQuery.noConflict();
    qw(document).ready(function(){

        //BUTTON DOWNLOAD 
        qw("#btnCloseDownload").mouseover(function(){
            qw("#btn-download").stop().animate({left: '0px'});
            //qw("#btnCloseDownload").hide();
        });
        qw("#btn-download").mouseleave(function(){
            qw("#btn-download").stop().animate({left: '-235px'});
            //qw("#btnCloseDownload").show('fast');
        });

        //BUTTON HELP CENTER 
        qw("#btnCloseChat").mouseover(function(){
            qw("#btn-Chat").stop().animate({right: '0px'});
            //qw("#btnCloseChat").hide();
        });
        qw("#btn-Chat").mouseleave(function(){
            qw("#btn-Chat").stop().animate({right: '-212px'});
            //qw("#btnCloseChat").fadeIn('fast');
        });



    });
    