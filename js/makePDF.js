function validatePDF(){
    console.log("in validate PDF");
    runValidation();
    if($('.incomplete').length === 0){
        promptToSave();
    }else{
        alert("You must correct all errors before generating the PDF.");
    }
}

function promptToSave(){
    $('#makePDFModal').modal('show');
}

// function saveAndMakePDF(){
//     save();
//     $.when(save()).done(function(){
//         console.log("starting dl of pdf");
//         $.ajax({
//             type: 'POST',
//             url: 'php/makePDF.php',
//             data: {'myData':JSON.stringify(formData)},
//             cache: false,
//             success: function(data){
//                 window.location = 'php/downloadPDF.php';
//             },
//             error: function(data){
//                 alert("Failed to generate PDF file");
//             }
//         });
//     })
// }

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
        	console.log(data);
            alert("Failed to generate PDF file");
        }
    });

    // if(success){
    // 	window.open('php/downloadPDF.php');
    // }
}