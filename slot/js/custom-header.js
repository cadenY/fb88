var ja = jQuery.noConflict();
ja(document).ready(function(){

	ja('#allGames').load('games/allgames.html');
	ja('#addTo').load('games/favourites.html');
	ja('#jackpot').load('games/jackpot.html');
	ja('#3dSlots').load('games/3dSlots.html');
	ja('#tableGames').load('games/tableGames.html');
	ja('#social').load('games/social.html');
	ja('#other').load('games/other.html');

	var intervals = setInterval(function() {
	        var momentNow = new Date().toLocaleString();
	        ja('#time-part').html(momentNow);
	    }, 1000);

	
	    

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
     if(ja('.loginBody ').is(':visible')) {
            ja('.loginBody').slideToggle('fast');
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

	


	// $('#reload-slider').click(function(e){
	//   e.preventDefault();
	//   $('.bxslider').append('<li><img src="/images/730_200/trees.jpg"></li>');
	//   slider.reloadSlider();
	// });
});

