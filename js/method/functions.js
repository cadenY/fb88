$(function(){
    // format ammount
    $.fn.formatAmount = function(){
        $(this).val(function(index, value) {
           return value
             .replace(/\D/g, "")
             .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
    }

    // generateTime
    //  hh = hour; mm = minute
    $.fn.generateTime = function(param){
       var maxTime = 0, d = new Date(), fn;
       switch (param) {
           case 'hh': maxTime = 24; fn = d.getHours(); break;
           case 'mm': maxTime = 60; fn = d.getMinutes(); break;
       }

       for( var i = 0; i < maxTime; i++) {
           $(this).append("<option value="+((i+1) <= 10 ? '0'+i : i)+" "+(i == fn ? 'selected=selected' : '')+">"+((i+1) < 10 ? '0'+(i+1) : (i+1))+"</option>");
       }
    }

});

// default alert on deposit submit
var fnDisplayMsg = function(){
    alert('Please submit your bank details on next page to complete the deposit.\nYou may check the deposit status in History page.');
}
