function validateEmplPDF(){
    promptToSaveEmployeePDF();
}

function promptToSaveEmployeePDF(){
    $('#makeEmplPDFModal').modal('show');
}

function generateEmplPDF(){
    // alert("This feature is not active yet.  Coming Soon!");
    $('#makePDFModal').modal('hide');
    createJSON();
    // console.log(JSON.stringify(formData));
    // window.open('php/makePDF.php');
    // var success = false;
    console.log(formData);
    $.ajax({
        type: 'POST',
        url: 'php/makeEmplPDF.php',
        data: {'myData':JSON.stringify(formData)},
        cache: false,
        async: false,
        success: function(data){
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