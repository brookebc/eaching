// $(document).ready(function() {


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

$(".jumbotron").each( function(index) {

    $(this).css("background-color", "#BDEDFF");
});

var mediaArray = ['<a href="#"><img src=/images/twitter-guns.jpeg></a>', '<a href="#"><img src=/images/face-book.jpeg></a>' ];

var mediaTemplate = function(mediaData) {

	var markup ="";
	var i; 

	for (i=0; i<mediaData.length; i++) {
		markup += '<p>' + mediaData[i] + '</li>';
	}
console.log(markup);
	return markup;
	
};

$(".mednav").append(mediaTemplate(mediaArray));

// });
