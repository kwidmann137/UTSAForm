window.onload = function(){
	$("#welcomeModal").modal('show');
	$("#welcome-btn-yes").on('click', function(){
		$("#welcomeModal").modal('hide');
	});
};