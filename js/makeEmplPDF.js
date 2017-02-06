function validateEmplPDF(){
    promptToSaveEmployeePDF();
}

function promptToSaveEmployeePDF(){
    $('#makeEmplPDFModal').modal('show');
}

function generateEmplPDF(){
    $('#makePDFModal').modal('hide');
    createJSON();
    $.ajax({
        type: 'POST',
        url: 'php/makeEmplPDF.php',
        data: {'myData':JSON.stringify(formData)},
        cache: false,
        async: false,
        success: function(data){
            console.log(data);
        	window.open('php/viewPDF.php');
        	// console.log(data);
            $('#makeEmplPDFModal').modal('hide');
        },
        error: function(data){
        	console.log(data);
            alert("Failed to generate PDF file");
        }
    });
}