



var ja = jQuery.noConflict();
ja(document).ready(function(e) {
    var intervals = setInterval(function() {
        var momentNow = new Date().toLocaleString();
        ja('.time-part').html(momentNow);
    }, 100);
    //flag dropdown at header
    ja(".clicks").on('click',function(e) {
		//alert('sssss');
			e.preventDefault();
			//ja(".notes").hide();
			if(ja(this).next(".notes:first").is(":hidden")) {
				ja(this).next(".notes:first").slideToggle('fast');
			}
			else {					
				ja(this).next(".notes:first").slideToggle('fast');	
			}				
	});	

    //color dropdown at header
    ja(".colorChange").on('click',function(e) {
		//alert('sssss');
			e.preventDefault();
			if(ja(this).next(".colors:first").is(":hidden")) {
				ja(this).next(".colors:first").slideToggle('fast');
			}
			else {					
				ja(this).next(".colors:first").slideToggle('fast');	
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
	/*ja(document).on('click',function(e) {
	    if (e.target != ja('.loginBody')[1]) {
	        ja('.loginBody').slideToggle('fast');
	    }
	});
*/

   
    // dismiss login popup form from any click
    ja(document).on('click',function(e){
     if(ja('.loginBody ').is(':visible')) {
            ja('.loginBody').slideToggle('fast');
        }
    });
    
	



});
