// JavaScript Document
$(document).ready(function(){
	 "use strict";
	 $("#galIMG1").on('click', fullScreen_start);
	 
	 function fullScreen_start() {
		 $('#imgGAL1').css({
			 'display': "block",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
	}
	$("#galIMG2, #imgGAL1").on('click', fullScreen_gal2);
	 
	 function fullScreen_gal2() {
		 $('#imgGAL2').css({
			 'display': "block",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
		 $('#imgGAL1').css({
			 'display': "none",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
	}
	
	$("#galIMG3, #imgGAL2").on('click', fullScreen_gal3);
	 
	 function fullScreen_gal3() {
		 $('#imgGAL3').css({
			 'display': "block",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
		 $('#imgGAL2').css({
			 'display': "none",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
	}
	
	$("#galIMG4, #imgGAL3").on('click', fullScreen_gal4);
	 
	 function fullScreen_gal4() {
		 $('#imgGAL4').css({
			 'display': "block",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
		 $('#imgGAL3').css({
			 'display': "none",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
	}
	
	$("#galROW1a, #imgGAL4").on('click', fullScreen_gal5);
	 
	 function fullScreen_gal5() {
		 $('#imgGAL5').css({
			 'display': "block",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
		 $('#imgGAL4').css({
			 'display': "none",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
	}
	
	$("#galROW2a, #imgGAL5").on('click', fullScreen_gal6);
	 
	 function fullScreen_gal6() {
		 $('#imgGAL6').css({
			 'display': "block",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
		 $('#imgGAL5').css({
			 'display': "none",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
	}
	$("#imgGAL6").on('click', fullScreen_gal_close);
	 
	 function fullScreen_gal_close() {
		 $('#imgGAL6').css({
			 'display': "none",
			 '-webkit-transition': 'all 0.5s ease-in-out',
			 '-o-transition': 'all 0.5s ease-in-out',
			 'transition': 'all 0.5s ease-in-out'
		 });
	}
 });