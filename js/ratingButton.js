$(function(){
    $('.form').on('click', '.btn-group', function(evt){
    	if($(this).hasClass('position-btn-group')){
    		$(this).children().removeClass('selected-position-type');
        	$(evt.target).addClass('selected-position-type');
    	}else{
    		$(this).children().removeClass('selected-rating');
        	$(evt.target).addClass('selected-rating');
    	}
    });
});