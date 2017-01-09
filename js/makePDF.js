function makePDF(){
    createJSON();
    $.ajax({
        type: 'POST',
        url: 'php/makePDF.php',
        data: {'myData':JSON.stringify(formData)},
        cache: false,
        success: function(data){
            console.log("SUCCESS");
            console.log(data);
            window.location = 'php/downloadPDF.php';
        },
        error: function(data){
            alert("Failed to save file");
            console.log(data);
        }
    });
}