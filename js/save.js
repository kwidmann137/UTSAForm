function save(){
    //first show the modal, if they click save again then save
    $("#promptToSaveModal").modal('show');
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
        });
    });
}