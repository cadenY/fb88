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
		e.preventDefault();
	    e.stopPropagation();
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

    ja('.loginBody').on('click', function(e){
        if(ja(this).is(':visible'))
            e.stopPropagation();
    });

    ja('ul.tabs li').click(function(){
	    var tab_id = ja(this).attr('data-tab');
	    if(tab_id == '') {
            return false;
	    }else {
	       ja('ul.tabs li').removeClass('current');
		   ja('.tab-content').removeClass('current');
		   ja(this).addClass('current');
		   ja("#"+tab_id).addClass('current');
	    }
	 });

	var error_fullname = false;

	//fullname, when there is data
	ja('#fname').focusout(function() {
		var fname = ja(this).val();
		if(fname != '') {
			ja('.a.okcheck').show()
			ja('.a.okcross').hide();
		}else {
			ja('.a.okcross').show();
			ja('.a.okcheck').hide();
		}
	});

	//when typing keyup
	ja('#fname').keyup(function(){
		var fname = ja(this).val();
		if(fname != '') {
			ja(this).css("border-color", "#028843");
			ja('.a.okcheck').show()
			ja('.a.okcross').hide();
		}
		else {
			ja(this).css("border-color", "#ec0000");
			ja('.a.okcross').show();
			ja('.a.okcheck').hide();
		}
	});

	ja('#dob').focusout(function() {
		var dob = ja(this).val();
		if(dob != '') {
			ja('.b.okcheck').show();
			ja('.b.okcross').hide();
			ja(this).css("border-color", "#028843");
		}else {
			ja('.b.okcross').show();
			ja('.b.okcheck').hide()
			ja(this).css("border-color", "#ec0000");
		}
	});

	// when there is data
	ja('#email').focusout(function() {
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(pattern.test(ja("#email").val())) {
			ja(this).css("border-color", "#028843");
			ja('.c.okcheck').show();
			ja('.c.okcross').hide();
		} else {
			ja(this).css("border-color", "#ec0000");
			ja('.c.okcross').show();
			ja('.c.okcheck').hide();

		}
	});
	ja('#email').keyup(function(){
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(pattern.test(ja("#email").val())) {
			ja(this).css("border-color", "#028843");
			ja('.c.okcheck').show();
			ja('.c.okcross').hide();
		} else {
			ja(this).css("border-color", "#ec0000");
			ja('.c.okcross').show();
			ja('.c.okcheck').hide();

		}
	});

	ja('#phone').focusout(function() {
		var phone = ja(this).val();
		if(phone != '') {
			ja('.d.okcheck').show();
			ja('.d.okcross').hide();
		}else {
			ja('.d.okcross').show();
			ja('.d.okcheck').hide();
		}
	});
	ja('#phone').keyup(function(){
		var pnum = new RegExp(/[0-9 -()+]+$/);
		if(pnum.test(ja("#phone").val())) {
			ja(this).css("border-color", "#028843");
			ja('.d.okcheck').show();
			ja('.d.okcross').hide();
		} else {
			ja(this).css("border-color", "#ec0000");
			ja('.d.okcross').show();
			ja('.d.okcheck').hide();
		}
	});

	ja('#cur').focusout(function() {
		var cur = ja(this).val();
		if(cur != '') {
			ja('.e.okcheck').show();
			ja('.e.okcross').hide();
		}else {
			ja('.e.okcross').show();
			ja('.e.okcheck').hide();
		}
	});

	ja('#user').focusout(function() {
		var user = ja(this).val();
		if(user != '') {
			ja('.f.okcheck').show();
			ja('.f.okcross').hide();
		}else {
			ja('.f.okcross').show();
			ja('.f.okcheck').hide();
			ja(this).css("border-color", "#ec0000");
		}
	});

	ja('#user').keyup(function(){
		if(ja(this).val().length > 8 ) {
			ja(this).css("border-color", "#028843");
			ja('.f.okcheck').show();
			ja('.f.okcross').hide();
		}
		else {
			ja(this).css("border-color", "#ec0000");
			ja('.f.okcross').show();
			ja('.f.okcheck').hide();
		}
	});

	ja('#pass').focusout(function() {
		var pass = ja('#result').val();
		if(ja('#result').hasClass('strong')) {
			ja('.g.okcheck').show();
			ja('.g.okcross').hide();
			ja(this).css("border-color", "#028843");
		}else {
			ja('.g.okcross').show();
			ja('.g.okcheck').hide();
			ja(this).css("border-color", "#ec0000");
		}
	});

	ja('#pass').keyup(function(){
		ja('#result').html(checkStrength(ja('#pass').val()));
	});

	function checkStrength(password){
		var strength = 0

		if (password.length < 6) {
			ja('#result').removeClass()
			ja('#result').addClass('short')
			return 'Too short'
		}
		if (password.length > 7) strength += 1
		//If password contains both lower and uppercase characters, increase strength value.
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
		//If it has numbers and characters, increase strength value.
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1
		//If it has one special character, increase strength value.
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
		//if it has two special characters, increase strength value.
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
		//Calculated strength value, we can return messages

		//If value is less than 2
		if (strength < 2 ) {
			ja('#result').removeClass()
			ja('.txtpass').addClass('weak')
			return 'Weak'
		}
		else if (strength == 6) {
			ja('#result').removeClass()
			ja('#result').addClass('good')
			return 'Good'
		}
		else {
			ja('#result').removeClass()
			ja('#result').addClass('strong')
			return 'Strong'
		}
	}

	ja('#cpass').focusout(function() {
		var cpass = ja(this).val();
		var pass = ja('#pass').val();
		if(cpass == pass) {
			ja('.h.okcheck').show();
			ja('.h.okcross').hide();
			ja(this).css("border-color", "#028843");
		}else {
			ja('.h.okcross').show();
			ja('.h.okcheck').hide();
			ja(this).css("border-color", "#ec0000");
		}
	});

	ja('#cpass').keyup(function(){

		var passwordkey = ja("#pass").val();
		var retype_passwordkey = ja("#cpass").val();

		if( retype_passwordkey !== passwordkey ) {
			ja('.h.okcheck').show();
			ja('.h.okcross').hide();
			ja(this).css("border-color", "#028843");
		} else {
			ja(this).css("border-color", "#ec0000");
			ja('.h.okcross').show();
			ja('.h.okcheck').hide();
		}


	});

	ja('#aff').focusout(function() {
		var aff = ja(this).val();
		if(aff != '') {
			ja('.i.okcheck').show();
			ja('.i.okcross').hide();
			ja(this).css("border-color", "#028843");

		}else {
			ja('.i.okcross').show();
			ja('.i.okcheck').hide();
			ja(this).css("border-color", "#ec0000");
		}
	});


	var error_fullname = false;
	var error_dob = false;
	var error_email = false;
	var error_phone = false;
	var error_cur = false;
	var error_user = false;
	var error_pass = false;
	var error_cpass = false;
	var error_aff = false;

	function check_fullname() {
		var fullname_length = ja("#fname").val().length;
		if(fullname_length < 5 || fullname_length > 20) {
			error_fullname = true;
			ja('#fname').css("border-color", "#ec0000");
			ja('.a.okcross').show();
			ja('.a.okcheck').hide();
		} else {
			error_fullname = false;
		 	ja('#fname').css("border-color", "#028843");
		 	ja('.a.okcheck').show();
			ja('.a.okcross').hide();
		}
	}
	function check_dob() {
		var dob_length = ja("#dob").val();
		if(dob_length !== '') {
			error_dob = false;
		 	ja('#dob').css("border-color", "#028843");
		 	ja('.b.okcheck').show();
			ja('.b.okcross').hide();
		} else {
			error_dob = true;
			ja('#dob').css("border-color", "#ec0000");
			ja('.b.okcross').show();
			ja('.b.okcheck').hide();
		}
	}
	function check_email() {
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(pattern.test(ja("#email").val())) {
			ja('#email').css("border-color", "#028843");
			ja('.c.okcheck').show();
			ja('.c.okcross').hide();
			error_email = false;
		} else {
			error_email = true;
			ja('#email').css("border-color", "#ec0000");
			ja('.c.okcross').show();
			ja('.c.okcheck').hide();
		}
	}
	function check_phone() {
		var pattern = new RegExp(/[0-9 -()+]+$/);
		if(pattern.test(ja("#phone").val())) {
			error_phone = false;
			ja('#phone').css("border-color", "#028843");
			ja('.d.okcheck').show();
			ja('.d.okcross').hide();
		} else {
			error_email = true;
			ja('#phone').css("border-color", "#ec0000");
			ja('.d.okcross').show();
			ja('.d.okcheck').hide();

		}
	}
	function check_cur() {
		var cur_data = ja("#cur option:selected").val();
		if(cur_data  !== "") {
			error_cur = false;
			ja('#cur').css("border-color", "#028843");
			ja('.e.okcheck').show();
			ja('.e.okcross').hide();
		} else {
			error_cur = true;
			ja('#cur').css("border-color", "#ec0000");
			ja('.e.okcross').show();
			ja('.e.okcheck').hide();

		}
	}
	function check_username() {
		var username_length = ja("#user").val().length;
		if(username_length < 8) {
			error_user = true;
			ja('#user').css("border-color", "#ec0000");
			ja('.f.okcross').show();
			ja('.f.okcheck').hide();
		} else {
			error_user = false;
			ja('#user').css("border-color", "#028843");
			ja('.f.okcheck').show();
			ja('.f.okcross').hide();
		}
	}
	function check_password() {
		var password_length = ja("#pass").val().length;
		if(password_length < 8 ) {
			error_pass = true;
			ja('#pass').css("border-color", "#ec0000");
			ja('.g.okcross').show();
			ja('.g.okcheck').hide();
		} else {
			error_pass = false;
			ja('#pass').css("border-color", "#028843");
			ja('.g.okcheck').show();
			ja('.g.okcross').hide();
		}
	}
	function check_retype_password() {
		var password = ja("#pass").val();
		var retype_password = ja("#cpass").val()
		if( retype_password !== password ) {
			error_cpass = true;
			ja('#cpass').css("border-color", "#ec0000");
			ja('.h.okcross').show();
			ja('.h.okcheck').hide();
		} else {
			ja(".cpass_error").hide();
			error_cpass = false;
			ja('#cpass').css("border-color", "#028843");
			ja('.h.okcheck').show();
			ja('.h.okcross').hide();
		}

	}
	function check_affiliate() {
		var aff = ja("#aff").val();
		if( aff === '' ) {
			error_aff = true;
			ja('#aff').css("border-color", "#ec0000");
			ja('.i.okcross').show();
			ja('.i.okcheck').hide();
		} else {
			error_aff = false;
			ja('#aff').css("border-color", "#028843");
			ja('.i.okcheck').show();
			ja('.i.okcross').hide();
		}
	}
	ja('.submit').click(function() {
		check_fullname();
		check_dob();
		check_email();
		check_phone();
		check_cur();
		check_username();
		check_password();
		check_retype_password();
		check_affiliate();
		if(error_fullname === false && error_dob === false && error_email === false && error_cur === false && error_user === false && error_pass === false && error_cpass === false && error_aff === false) {
			return true;
		} else {
			return false;
		}
	});

	ja("#primary-menu ul li .mega-menu-content.style-2 li ul.listv li.listnav").hover(function() {
    	ja(this).addClass('active').siblings().removeClass('active');
    	ja(this).css('color','red');
    	//alert('sssssssssssss');
    });

    // flag
    var imgPath = ja('#cirlceFlags > ul > li > a > img').attr('src');
    // set active flag on page load
    ja('ul#childFlag > li img').each(function(i,e){
        if(ja(this).attr('src') === imgPath) {
            ja(this).parents('li').addClass('active');
        }
    });

    ja(document).on('click','#childFlag li a',function(e){
        if(!ja(this).hasClass('active')){
            e.preventDefault();
            ja('#childFlag li').removeClass('active');
            ja(this).parent().addClass('active');
            ja('#cirlceFlags > ul > li > a > img').attr('src',ja(this).find('img').attr('src'));
        } else {
            return false;
        }
    });

    // theme color
    var currentTheme = ja('#cirleColors > ul > li > span').attr('class').split(' ')[1];
    // set active theme on page load
    ja('ul#childColor li a span').each(function(i,e){
        if(ja(this).hasClass(currentTheme)){
            ja(this).parents('li').addClass('active');
        }
    });

    ja(document).on('click','#childColor li a',function(e){
        if(!ja(this).hasClass('active')){
            e.preventDefault();
            var color = ja(this).find('span').attr('class').split(' ')[1];
            ja('#childColor li').removeClass('active');
            ja(this).parent().addClass('active');
            ja('#cirleColors > ul > li > span').removeClass('black white');
            ja('#cirleColors > ul > li > span').addClass(color);
        } else {
            return false;
        }
    });
});
