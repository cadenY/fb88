define(['jquery','moment','moment-timezone','fancybox'],function($,moment,momentTimezone,fancybox) {

	$('#header').load('header.html?' + new Date().getTime(), function() {
       setDateTime();
       initNotice();
       initLogin();
	});

	//$('#footer').load('footer.html?' + new Date().getTime());

	// on scroll
	setFixedheader();
	$(window).scroll(function() {
		setFixedheader()
	});

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
		$('.notice-wrap li').each(function(i,e){
			ulWidth += $(this).width();
		});

		loopNotice();

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
