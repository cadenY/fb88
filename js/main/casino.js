var j = jQuery.noConflict();
j(document).ready(function() {
    j(".se-pre-con").fadeOut("slow");

    // header
    var jsArray =  ['js/header/functions.js','js/header/custom.js','js/jscript.js'];
    j('#header').load('header.html', function() {
        for(var i = 0; i < jsArray.length; i ++){
            j.getScript(jsArray[i]);
        }
    });

    // footer
    j('#copyrights').load('footer.html');

    j('.prodlink .platform img').click(function() {
        var id = j(this).data('id');

        j('#'+id+'.single-content').addClass('active');
        j('.platform-content').delay(100).fadeIn(300);
    });

    j('.platform-content').click(function(e){
        if(typeof j(e.target).attr('class') != 'undefined') {
            j('.platform-content').fadeOut(300,function() {
                j('.single-content').removeClass('active');
            });
        }
    });
});
