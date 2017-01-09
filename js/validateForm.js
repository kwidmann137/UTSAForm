$(function(){
	$('#review_period_from').on("blur", function(){
		var value = $(this).val();
		var isNum = /^\d+$/.test(value);
		var length = value.length;
		if(length !== 4 || !isNum){
			$(this).addClass('incomplete');
			numOfErrors++;
		}else{
			$(this).removeClass('incomplete');
			numOfErrors--;
		}

	});
})

var numOfErrors = 0;

function validateForm(){
	//validate review period

	// validate name

	// validate title

	// validate employee id

	// validate job code

	// validate project

	//validate development plans

	//validate attributes

	// validate supervisors only

	// validate overall rating

	// validate position
}