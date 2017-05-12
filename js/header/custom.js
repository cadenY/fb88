var ja = jQuery.noConflict();
ja(document).ready(function(){

	

	var intervals = setInterval(function() {
        var momentNow = new Date().toLocaleString();
        ja('.time-part').html(momentNow);
    }, 100);

	//login dropdown at header
	ja(".clicks").on('click',function(e) {
		//alert('sssss');
		e.preventDefault();
	    e.stopPropagation();
		//ja(".loginBody").hide();
		if(ja(this).next(".notes:first").is(":hidden")) {
			ja(this).next(".notes:first").slideToggle('fast');
		}
		else {					
			ja(this).next(".notes:first").slideToggle('fast');	
		}				
	});	
	    

	//login dropdown at header
	ja(".login").on('click',function(e) {
		//alert('sssss');
		e.preventDefault();
	    e.stopPropagation();
		//ja(".loginBody").hide();
		if(ja(this).next(".loginBody:first").is(":hidden")) {
			ja(this).next(".loginBody:first").slideToggle('fast');
		}
		else {					
			ja(this).next(".loginBody:first").slideToggle('fast');	
		}				
	});	
// dismiss login popup form from any click
    ja(document).on('click',function(e){
     if(ja('.loginBody').is(':visible')) {
            ja('.loginBody').slideToggle('fast');
        }
     if(ja('.notes').is(':visible')) {
            ja('.notes').slideToggle('fast');
        }
    });


    ja('ul.tabs li').click(function(){
	    var tab_id = ja(this).attr('data-tab');

	    
	    if(tab_id == '') {
	      
	    }else {
	       ja('ul.tabs li').removeClass('current');
		   ja('.tab-content').removeClass('current');
		   ja(this).addClass('current');
		   ja("#"+tab_id).addClass('current');     
	    }
	    

	 });

	//alert(ja('#dob').val())
	


	// $('#reload-slider').click(function(e){
	//   e.preventDefault();
	//   $('.bxslider').append('<li><img src="/images/730_200/trees.jpg"></li>');
	//   slider.reloadSlider();
	// });
});

