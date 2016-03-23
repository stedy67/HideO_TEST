// JavaScript Document
 /* jshint unused:false */
var xmlhttp;	 
 function showResult(str) {
	 "use strict";
	 if (str.length===0) { 
     $("#livesearch").html('');
     $("#livesearch").css('display', 'none');
     return;
   }
   if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
     xmlhttp=new XMLHttpRequest();
   } else {  // code for IE6, IE5
     xmlhttp=new window.ActiveXObject("Microsoft.XMLHTTP");
   }
   xmlhttp.onreadystatechange=function() {
     if (xmlhttp.readyState===4 && xmlhttp.status===200) {
       $("#livesearch").html(xmlhttp.responseText);
       $("#livesearch").css({
		   'display': 'block',
		   'border': '3px solid #404040',
		   'background-color': 'black'
	   });
     }
   };
   xmlhttp.open("GET","inc/livesearch.php?q="+str,true);
   xmlhttp.send();
 }
 
 $(document).ready(function(){
	 "use strict";
	 $("#searchTrig").on('click', searchShow);
	 
	 function searchShow() {
		 $('#searchForm').css({
			 'width': 350,
			 'left': 50 + '%',
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
		 $('.form-control').css({
			 'display': 'block',
			 'width': 350,
			 'left': 50 + '%',
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
		 
		 $('#searchTrig').css({
			 'display': 'none'
		 });
		 
		 
	}
 });