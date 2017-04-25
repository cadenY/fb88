$(function(){
    // on page load
    setIframeSrc('account');

    function setIframeSrc(url) {
        $('#frame').attr('src','manage/'+url+'.html');
        $('#frame').iFrameResize({
            minHeight : 270
        });
    }
});
