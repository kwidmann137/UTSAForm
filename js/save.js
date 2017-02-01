function save(){
	//check if resaving
	resave();
    //first show the modal, if they click save again then save
    $("#promptToSaveModal").modal('show');
    $("#promptToSaveModal").css('z-index', '1500');
    var yes = $("#save-btn-yes");
    yes.off().on('click', function(){
        $("#promptToSaveModal .modal-dialog").css('width', '600px');
        $("#promptToSaveModal .video-container").css('width', 'auto');
        $("#promptToSaveModal .video-container").css('height', 'auto');
        createJSON();
        $.ajax({
            type: 'POST',
            url: 'php/save.php',
            data: {'myData':JSON.stringify(formData), 'currFile': currentFile},
            cache: false,
            success: function(data){
                window.location = 'php/downloadData.php';
                $("#promptToSaveModal").modal('hide');
            },
            error: function(data){
                alert(data);
            }
        })
    });
    $("#promptToSaveModal").on('hidden.bs.modal', function () {
        $(this).css('z-index', '1050');
    });
}

function resave(){
	if(currentFile !== ''){
		$("#resaveWarning").modal('show');
		$("#resaveWarning").css('z-index', '1500');
		$("#resave-btn-yes").on('click', function(){
			$("#resaveWarning").modal('hide');
		});
		$("#resaveWarning").on('hidden.bs.modal', function () {
	        $(this).css('z-index', '1050');
	    });
	}
}