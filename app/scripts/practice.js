$(document).ready(function(){
	console.log('howdy');

	var strVal = 'jquery by example rocks!!'
   	alert(strVal.toUpperCase());

   	$('.productDescription').each(function(index, value){
	console.log(index +':' + value);
	});

});
