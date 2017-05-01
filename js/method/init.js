$(function(){
	// $('#header').load('header.html?' + new Date().getTime(), function() {
    //    setDateTime();
    //    initNotice();
    //    initLogin();
	// });

	$('#footer').load('footer.html?' + new Date().getTime());

    getHeader();

	// on scroll
	setFixedheader();
	$(window).scroll(function() {
		setFixedheader()
	});

    function getHeader() {
        var topHeader = '<div class="top-header">'
                +'<div class="wrap-panel">'
                    +'<div class="notice-bar group">'
                        +'<label class="notice-icon group">'
                            +'<i class="icon-bell"></i>'
                            +'<span class="notice-counter">1</span>'
                        +'</label>'
                        +'<div class="date-time group">'
                            +'<span class="date">Loading date..</span>'
                            +'<span class="time">Loading time..</span>'
                        +'</div>'
                    +'</div>'
                    +'<div class="notice-list group">'
                        +'<div class="notice-wrap"> <ul></ul> </div>'
                    +'</div>'
                    +'<div class="flag-wrap">'
                        +'<span class="active-flag"><img src="images/flag-en.png" alt=""></span>'
                        +'<ul>'
                           +'<li><a href="#"><img src="images/flag-en.png" alt=""></a></li>'
                           +'<li><a href="#"><img src="images/flag-cn.png" alt=""></a></li>'
                           +'<li><a href="#"><img src="images/flag-vn.png" alt=""></a></li>'
                        +'</ul>'
                    +'</div>'
                    +'<div class="header-btn">'
                       +'<a href="javascript:;" data-fancybox data-src="login.html" class="login">LOGIN</a>'
                       +'<a href="#" class="join">JOIN NOW</a>'
                    +'</div>'
                    +'<div class="clear"></div>'
                +'</div>'
            +'</div>';
        var mainHeader = '<div class="main-header">'
                +'<div class="wrap-panel main-wrap">'
                    +'<div class="logo">'
                       +'<a href="#"><img src="images/logo.png" alt="Fb88.com"></a>'
                    +'</div>'
                    +'<div class="nav"></div>'
                +'</div>'
            +'</div';

        $.ajax({
            url: 'api/main/navigation.json',
            dataType: 'json'
        }).done(function(r){
            var str = '';
            $.each(r,function(i,e){
                var listClass = '';
                if(e.class.length > 0) {
                    listClass = e.class.join(',').replace(',',' ');
                }

                str += '<li class="'+(listClass != '' ? listClass : '')+'">'
                      +'<a href="'+e.url+'">'
                          +'<div class="img-wrap">'
                             +'<img src="images/'+e.icon+'.png" alt="">'
                          +'</div>'
                          +'<span>'+e.text+'</span>'
                       +'</a>'
                    +'</li>';
            });

            var ul = '<ul>'+str+'</ul>';
            $('#header').html(topHeader + mainHeader);
            $(document).find('.nav').append(ul);

            setDateTime();
            initNotice();
            initLogin();
        })
    }

	function setDateTime() {
		setTimeout(function(){
			// date and time
			$('.date').html(moment().format('DD-MM-YYYY'));
			$('.time').html(moment().format('hh:mm:ss Z'));

			// time
			setInterval(function(){
				$('.time').html(moment().format('hh:mm:ss Z'));
			},1000);

		},1000);
	}

	function initNotice(){
        var ulWidth = 0, posX = 611;

        $.ajax({
            url: 'api/main/announcement.json'
        }).done(function(r){
            var str = '';
            $.each(r,function(i,e){
                str+= '<li>'+e+'</li>';
            });

            $('.notice-wrap ul').html(str);
    		$('.notice-wrap li').each(function(i,e){
    			ulWidth += $(this).width();
    		});

    		loopNotice();
        });

		function loopNotice(){
			$('.notice-wrap ul').animate({
				left: -(ulWidth + 20)
			},30000,'linear', function(){
				$('.notice-wrap ul').css('left',posX);
				loopNotice();
			});
		}
	}

	function setFixedheader() {
		var sticky = $('#header'),
      	scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed')
	}

   function initLogin(){
      $("[data-fancybox]").fancybox({
         iframe: {
            css : {
               width : '515px'
            }
         },
         fullScreen : false,
         closeBtn   : true
      });
   }
});
