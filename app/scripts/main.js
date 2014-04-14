$(document).ready(function() {

var navArray = ['<a href=index.html>Home</a>', '<a href=contact.html>Contact</a>', '<a href=portfolio.html>Portfolio</a>'];

var navTemplate = function(navdata) {
	var markup = " ";
	var n;

		for (n=0; n < navdata.length; n++) {
			markup += '<li>' + navdata[n] + '</li>';
		}

		console.log(markup);
		return markup;

	};

	$(".nav").append(navTemplate(navArray));



});

