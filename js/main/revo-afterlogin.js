var $ = jQuery.noConflict();

$(document).ready(function() {
    $(".se-pre-con").fadeOut("slow");

    // header
    var jsArray =  ['js/header/functions.js','js/header/custom.js','js/jscript.js'];
    $('#header').load('header.html', function() {
        for(var i = 0; i < jsArray.length; i ++){
            $.getScript(jsArray[i]);
        }
    });

    // footer
    $('#copyrights').load('footer.html');

    var apiRevoSlider = $('.tp-banner').show().revolution({
        sliderType: "standard",
        jsFileLocation: "include/rs-plugin/js/",
        dottedOverlay: "none",
        delay: 16000,
        startwidth: 1140,
        startheight: 100,
        height: 100,
        hideThumbs: 200,
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            thumbnails: {
                style: "hesperiden",
                enable: true,
                width: 100,
                height: 50,
                min_width: 100,
                wrapper_padding: 5,
                wrapper_color: "#ffffff",
                wrapper_opacity: "0.5",
                tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title">{{title}}</span>',
                visibleAmount: 5,
                hide_onmobile: false,
                hide_onleave: false,
                direction: "horizontal",
                span: false,
                position: "inner",
                space: 5,
                h_align: "right",
                v_align: "bottom",
                h_offset: 20,
                v_offset: 50
            }
        },
        touchenabled: "on",
        onHoverStop: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: "off",
        fullScreen: "on",
        spinner: "spinner4",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
    });
});
