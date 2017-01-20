$(function () {
    $('.supervisor-status-btn').on('click', function(evt){
		$('.supervisor-status-btn').each(function(){
			$(this).removeClass("selected-supervisor-status");
		});
		$(this).addClass("selected-supervisor-status");
		if($(this).val() === "Yes"){
			$('#supervisor-attributes-container').css('display', 'inline');
		}else{
			$('#supervisor-attributes-container').css('display', 'none');
		}
		
    });
});

	