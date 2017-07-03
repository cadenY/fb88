var ja = jQuery.noConflict();
ja(document).ready(function() {

	ja('.submit').on('click',function(e){
		e.preventDefault();
        if(ja( "#user" ).val() === '') {
            ja('#errorModal').modal('show');
        }
        else {
            ja('#successModal').modal('show');
        }
	});
	ja('#errorModal h2 span, .btnErrorClose, #successModal h2 span ').on('click',function(e){
		e.preventDefault();
		ja('#errorModal').modal('hide');
	});
 

    function a(a) {
        var s = 0;
        return a.length < 6 ? (ja("#result").removeClass(), ja("#result").addClass("short"), "Too short") : (a.length > 7 && (s += 1), a.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (s += 1), a.match(/([a-zA-Z])/) && a.match(/([0-9])/) && (s += 1), a.match(/([!,%,&,@,#,$,^,*,?,_,~])/) && (s += 1), a.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/) && (s += 1), s < 2 ? (ja("#result").removeClass(), ja(".txtpass").addClass("weak"), "Weak") : 6 == s ? (ja("#result").removeClass(), ja("#result").addClass("good"), "Good") : (ja("#result").removeClass(), ja("#result").addClass("strong"), "Strong"))
    }

    function s() {
        var a = ja("#fname").val().length;
        a < 5 || a > 20 ? (j = !0, ja("#fname").css("border-color", "#ec0000"), ja(".a.okcross").show(), ja(".a.okcheck").hide()) : (j = !1, ja("#fname").css("border-color", "#028843"), ja(".a.okcheck").show(), ja(".a.okcross").hide())
    }

    function o() {
        "" !== ja("#dob").val() ? (d = !1, ja("#dob").css("border-color", "#028843"), ja(".b.okcheck").show(), ja(".b.okcross").hide()) : (d = !0, ja("#dob").css("border-color", "#ec0000"), ja(".b.okcross").show(), ja(".b.okcheck").hide());
    	var underage = ja("#dob").val();
    	//if(underage)
    }

    function c() {
        new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(ja("#email").val()) ? (ja("#email").css("border-color", "#028843"), ja(".c.okcheck").show(), ja(".c.okcross").hide(), n = !1) : (n = !0, ja("#email").css("border-color", "#ec0000"), ja(".c.okcross").show(), ja(".c.okcheck").hide())
    }

    function e() {
        new RegExp(/[0-9 -()+]+$/).test(ja("#phone").val()) ? (k = !1, ja("#phone").css("border-color", "#028843"), ja(".d.okcheck").show(), ja(".d.okcross").hide()) : (n = !0, ja("#phone").css("border-color", "#ec0000"), ja(".d.okcross").show(), ja(".d.okcheck").hide())
    }

    function r() {
        "" !== ja("#cur option:selected").val() ? (u = !1, ja("#cur").css("border-color", "#028843"), ja(".e.okcheck").show(), ja(".e.okcross").hide()) : (u = !0, ja("#cur").css("border-color", "#ec0000"), ja(".e.okcross").show(), ja(".e.okcheck").hide())
    }

    function i() {
        ja("#user").val().length < 8 ? (f = !0, ja("#user").css("border-color", "#ec0000"), ja(".f.okcross").show(), ja(".f.okcheck").hide()) : (f = !1, ja("#user").css("border-color", "#028843"), ja(".f.okcheck").show(), ja(".f.okcross").hide())
    }

    function l() {
        ja("#pass").val().length < 8 ? (p = !0, ja("#pass").css("border-color", "#ec0000"), ja(".g.okcross").show(), ja(".g.okcheck").hide()) : (p = !1, ja("#pass").css("border-color", "#028843"), ja(".g.okcheck").show(), ja(".g.okcross").hide())
    }

    function h() {
        var a = ja("#pass").val();
        ja("#cpass").val() !== a ? (v = !0, ja("#cpass").css("border-color", "#ec0000"), ja(".h.okcross").show(), ja(".h.okcheck").hide()) : (ja(".cpass_error").hide(), v = !1, ja("#cpass").css("border-color", "#028843"), ja(".h.okcheck").show(), ja(".h.okcross").hide())
    }

    function t() {
        "" === ja("#aff").val() ? (b = !0, ja("#aff").css("border-color", "#ec0000"), ja(".i.okcross").show(), ja(".i.okcheck").hide()) : (b = !1, ja("#aff").css("border-color", "#028843"), ja(".i.okcheck").show(), ja(".i.okcross").hide())
    }! function() {
        var a = window.location.href.lastIndexOf("/") + 1,
            s = window.location.href.substr(a).split(".")[0];
        "index" != s && "" != s && "index-light" != s || ja("#primary-menu ul > li:nth-child(1)").addClass("selected"), "mobile" == s && ja("#primary-menu ul > li:nth-child(2)").addClass("selected"), "sports" == s && ja("#primary-menu ul > li:nth-child(3)").addClass("selected"), "e-sports" == s && ja("#primary-menu ul > li:nth-child(4)").addClass("selected"), "casino" == s && ja("#primary-menu ul > li:nth-child(5)").addClass("selected"), "slots" == s && ja("#primary-menu ul > li:nth-child(6)").addClass("selected"), "lottery" == s && ja("#primary-menu ul > li:nth-child(7)").addClass("selected"), "poker" == s && ja("#primary-menu ul > li:nth-child(8)").addClass("selected"), "promotion" != s && "promotion_light" != s || ja("#primary-menu ul > li:nth-child(9)").addClass("selected")
    }(), setInterval(function() {
        var a = (new Date).toLocaleString();
        ja(".time-part").html(a)
    }, 100), ja(".login").on("click", function(a) {
        a.preventDefault(), a.stopPropagation(), ja(this).next(".loginBody:first").is(":hidden"), ja(this).next(".loginBody:first").slideToggle("fast")
    }), ja(document).on("click", function(a) {
        ja(".loginBody").is(":visible") && ja(".loginBody").slideToggle("fast"), ja(".notes").is(":visible") && ja(".notes").slideToggle("fast")
    }), ja(".loginBody").on("click", function(a) {
        ja(this).is(":visible") && a.stopPropagation()
    }), ja("ul.tabs li").click(function() {
        var a = ja(this).attr("data-tab");
        if ("" == a) return !1;
        ja("ul.tabs li").removeClass("current"), ja(".tab-content").removeClass("current"), ja(this).addClass("current"), ja("#" + a).addClass("current")
    }), j = !1, ja("#fname").focusout(function() {
        "" != ja(this).val() ? (ja(".a.okcheck").show(), ja(".a.okcross").hide()) : (ja(".a.okcross").show(), ja(".a.okcheck").hide())
    }), ja("#fname").keyup(function() {
        "" != ja(this).val() ? (ja(this).css("border-color", "#028843"), ja(".a.okcheck").show(), ja(".a.okcross").hide()) : (ja(this).css("border-color", "#ec0000"), ja(".a.okcross").show(), ja(".a.okcheck").hide())
    }), ja("#dob").focusout(function() {
        "" != ja(this).val() ? (ja(".b.okcheck").show(), ja(".b.okcross").hide(), ja(this).css("border-color", "#028843")) : (ja(".b.okcross").show(), ja(".b.okcheck").hide(), ja(this).css("border-color", "#ec0000"))
    }), ja("#email").focusout(function() {
        new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(ja("#email").val()) ? (ja(this).css("border-color", "#028843"), ja(".c.okcheck").show(), ja(".c.okcross").hide()) : (ja(this).css("border-color", "#ec0000"), ja(".c.okcross").show(), ja(".c.okcheck").hide())
    }), ja("#email").keyup(function() {
        new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(ja("#email").val()) ? (ja(this).css("border-color", "#028843"), ja(".c.okcheck").show(), ja(".c.okcross").hide()) : (ja(this).css("border-color", "#ec0000"), ja(".c.okcross").show(), ja(".c.okcheck").hide())
    }), ja("#phone").focusout(function() {
        "" != ja(this).val() ? (ja(".d.okcheck").show(), ja(".d.okcross").hide()) : (ja(".d.okcross").show(), ja(".d.okcheck").hide())
    }), ja("#phone").keyup(function() {
        new RegExp(/[0-9 -()+]+$/).test(ja("#phone").val()) ? (ja(this).css("border-color", "#028843"), ja(".d.okcheck").show(), ja(".d.okcross").hide()) : (ja(this).css("border-color", "#ec0000"), ja(".d.okcross").show(), ja(".d.okcheck").hide())
    }), ja("#cur").focusout(function() {
        "" != ja(this).val() ? (ja(".e.okcheck").show(), ja(".e.okcross").hide()) : (ja(".e.okcross").show(), ja(".e.okcheck").hide())
    }), ja("#user").focusout(function() {
        "" != ja(this).val() ? (ja(".f.okcheck").show(), ja(".f.okcross").hide()) : (ja(".f.okcross").show(), ja(".f.okcheck").hide(), ja(this).css("border-color", "#ec0000"))
    }), ja("#user").keyup(function() {
        ja(this).val().length > 8 ? (ja(this).css("border-color", "#028843"), ja(".f.okcheck").show(), ja(".f.okcross").hide()) : (ja(this).css("border-color", "#ec0000"), ja(".f.okcross").show(), ja(".f.okcheck").hide())
    }), ja("#pass").focusout(function() {
        ja("#result").val(), ja("#result").hasClass("strong") ? (ja(".g.okcheck").show(), ja(".g.okcross").hide(), ja(this).css("border-color", "#028843")) : (ja(".g.okcross").show(), ja(".g.okcheck").hide(), ja(this).css("border-color", "#ec0000"))
    }), ja("#pass").keyup(function() {
        ja("#result").html(a(ja("#pass").val()))
    }), ja("#cpass").focusout(function() {
        ja(this).val() == ja("#pass").val() ? (ja(".h.okcheck").show(), ja(".h.okcross").hide(), ja(this).css("border-color", "#028843")) : (ja(".h.okcross").show(), ja(".h.okcheck").hide(), ja(this).css("border-color", "#ec0000"))
    }), ja("#cpass").keyup(function() {
        var a = ja("#pass").val();
        ja("#cpass").val() !== a ? (ja(".h.okcheck").show(), ja(".h.okcross").hide(), ja(this).css("border-color", "#028843")) : (ja(this).css("border-color", "#ec0000"), ja(".h.okcross").show(), ja(".h.okcheck").hide())
    }), ja("#aff").focusout(function() {
        "" != ja(this).val() ? (ja(".i.okcheck").show(), ja(".i.okcross").hide(), ja(this).css("border-color", "#028843")) : (ja(".i.okcross").show(), ja(".i.okcheck").hide(), ja(this).css("border-color", "#ec0000"))
    });
    var j = !1,
        d = !1,
        n = !1,
        k = !1,
        u = !1,
        f = !1,
        p = !1,
        v = !1,
        b = !1;
    ja(".btnJoinNow").click(function() {
        return s(), o(), c(), e(), r(), i(), l(), h(), t(), !1 === j && !1 === d && !1 === n && !1 === u && !1 === f && !1 === p && !1 === v && !1 === b
    }), ja("#primary-menu ul li .mega-menu-content.style-2 li ul.listv li.listnav").hover(function() {
        ja(this).addClass("active").siblings().removeClass("active"), ja(this).css("color", "red")
    });
    var m = ja("#cirlceFlags > ul > li > a > img").attr("src");
    ja("ul#childFlag > li img").each(function(a, s) {
        ja(this).attr("src") === m && ja(this).parents("li").addClass("active")
    }), ja(document).on("click", "#childFlag li a", function(a) {
        if (ja(this).hasClass("active")) return !1;
        a.preventDefault(), ja("#childFlag li").removeClass("active"), ja(this).parent().addClass("active"), ja("#cirlceFlags > ul > li > a > img").attr("src", ja(this).find("img").attr("src"))
    });
    var w = ja("#cirleColors > ul > li > span").attr("class").split(" ")[1];
    ja("ul#childColor li a span").each(function(a, s) {
        ja(this).hasClass(w) && ja(this).parents("li").addClass("active")
    }), ja(document).on("click", "#childColor li a", function(a) {
        if (ja(this).hasClass("active")) return !1;
        a.preventDefault();
        var s = ja(this).find("span").attr("class").split(" ")[1];
        ja("#childColor li").removeClass("active"), ja(this).parent().addClass("active"), ja("#cirleColors > ul > li > span").removeClass("black white"), ja("#cirleColors > ul > li > span").addClass(s)
    })
});