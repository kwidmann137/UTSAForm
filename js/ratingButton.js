$(function(){
    $('.form').on('click', '.btn-group', function(evt){
		$(this).children().removeClass('selected-rating');
    	$(evt.target).addClass('selected-rating');
    });
});