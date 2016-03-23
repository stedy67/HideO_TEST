// JavaScript Document

/* jshint unused:false */
$(document).ready(function(e) {
	"use strict";
	$(".wrap").each(function() {
		var minH = 0;
		$('.eq', this).each(function() {
			if($(this).height() > minH) {
				minH = $(this).height();
			}
		});
		
		$('.eq', this).height(minH);
	});
});