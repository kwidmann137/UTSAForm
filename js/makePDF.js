function validatePDF(){
    runValidation();
    if($('.incomplete').length === 0){
        promptToSave();
    }else{
        numOfErorrs = $('.incomplete').length;
        var errorContent = '<p>You can not create your PDF yet.  You have <span class="create-pdf-error">%num% errors</span> to fix before you can create the PDF.  Once you have fixed the errors use the <strong>Create PDF</strong> button to create the completed PDF.</p><p>Your errors are highlighted on the form with a red border, and a note explaining the error underneath in red.</p><div class="text-center"><button class="btn btn-md btn-success" data-dismiss="modal" aria-label="Close">OK I will fix them</button></div>'
        var formattedContent = errorContent.replace(/%num%/, numOfErorrs);
        $("#makePDFErrorModal .modal-body").html(formattedContent);
        $("#makePDFErrorModal").modal('show');
    }
}

function promptToSave(){
    $('#makePDFModal').modal('show');
}

function generatePDF(){
    // alert("This feature is not active yet.  Coming Soon!");
    $('#makePDFModal').modal('hide');
    createJSON();
    // console.log(JSON.stringify(formData));
    // window.open('php/makePDF.php');
    // var success = false;
    console.log(formData);
    $.ajax({
        type: 'POST',
        url: 'php/makePDF.php',
        data: {'myData':JSON.stringify(formData)},
        cache: false,
        async: false,
        success: function(data){
        	window.open('php/viewPDF.php');
        	// console.log(data);
            $('#makePDFModal').modal('hide');
        },
        error: function(data){
            alert("Failed to generate PDF file");
        }
    });
}