var jq = jQuery.noConflict();

jq(document).ready(function() {
   var sidebar = '<div id="btn-download">'
      +'<div class="slidingDiv">'
           +'<div class="slideIconTop"><img src="images/casino/leftpush/top.png"></div>'
           +'<h3><b>DOWNLOADS</b></h3> <span>PC Version</span>'
           +'<div class="cbp-spmenu cbp-spmenu-vertical">'
               +'<a href="#">'
                  +'<table width="100%" border="0" class="nomargin">'
                       +'<tr>'
                           +'<td rowspan="2" width="40%" align="center">'
                              +'<div class="bg-pc"></div>'
                           +'</td>'
                           +'<td align="left" valign="bottom">PC Version</td>'
                       +'</tr>'
                       +'<tr>'
                           +'<td valign="top" align="left">'
                              +'<div>v1.0.01</div>'
                           +'</td>'
                       +'</tr>'
                   +'</table>'
               +'</a>'
               +'<a href="#">'
                   +'<table width="100%" border="0" class="nomargin">'
                       +'<tr>'
                           +'<td rowspan="2" width="40%" align="center">'
                              +'<div class="bg-mac"></div>'
                           +'</td>'
                           +'<td align="left" valign="bottom">PC Version</td>'
                       +'</tr>'
                       +'<tr>'
                           +'<td valign="top" align="left">'
                              +'<div>v1.0.01</div>'
                           +'</td>'
                       +'</tr>'
                   +'</table>'
               +'</a>'
               +'<div class="tcenter mobVer"> MOBILE VERSION</div>'
               +'<a href="#">'
                   +'<table width="100%" border="0" class="nomargin">'
                       +'<tr>'
                           +'<td rowspan="2" width="40%" align="center">'
                              +'<div class="qr-andriod"></div>'
                           +'</td>'
                           +'<td align="left" valign="bottom">Android</td>'
                       +'</tr>'
                       +'<tr>'
                           +'<td valign="top" align="left">'
                              +'<div>v1.0.01</div>'
                           +'</td>'
                       +'</tr>'
                  +' </table>'
               +'</a>'
               +'<a href="#">'
                   +'<table width="100%" border="0" class="nomargin">'
                       +'<tr>'
                           +'<td rowspan="2" width="40%" align="center">'
                              +'<div class="qr-ios"></div>'
                           +'</td>'
                           +'<td align="left" valign="bottom">IOS</td>'
                       +'</tr>'
                      +'<tr>'
                           +'<td valign="top" align="left">'
                              +'<div>v1.0.01</div>'
                           +'</td>'
                       +'</tr>'
                   +'</table>'
               +'</a>'
           +'</div>'
      +'</div>'
      +'<div id="btnCloseDownload"> <img src="images/casino/leftpush/close-button.png" alt=""></div>'
   +'</div>'
   +'<div id="btn-Chat">'
      +'<div class="imgCustomerServ"><img src="images/casino/girl-chat.png"></div>'
      +'<div class="tcenter bottommargin-sm"><img src="images/casino/24-7.png"></div>'
      +'<div class="waysto clearfix">'
           +'<div class="col_half nomargin tcenter"> <img src="images/casino/deposit-icon.png" />'
               +'<br>'
               +'<div class="">How to <br> Deposit</div>'
           +'</div>'
           +'<div class="col_half col_last nomargin tcenter"> <img src="images/casino/withdraw-icon.png" />'
               +'<br>'
               +'<div class="">How to <br> Withdraw</div>'
           +'</div>'
      +'</div>'
      +'<div class="custService tcenter"> <a href="#"><span class="custIcon mail-icon"></span> help@fabet.com</a> <a href="#"><span class="custIcon phone-icon"></span> +852 8888 7168 <br> <span class="secondtext">International Call Charges May Apply</span></a> <a href="#"><span class="custIcon phone2-icon"></span> +852 8888 7168</a> <a href="#"><span class="custIcon line-icon"></span> +852 8888 7168</a> <a href="#"><span class="custIcon zolo-icon"></span> +852 8888 7168</a></div>'
      +'<p id="btnCloseChat"><img src="images/casino/leftpush/help-center.png" alt=""></p>'
   +'</div>';

   jq('body').append(sidebar);
});
