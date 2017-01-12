function save(){
    createJSON();
    $.ajax({
        type: 'POST',
        url: 'php/save.php',
        data: {'myData':JSON.stringify(formData)},
        cache: false,
        success: function(data){
            window.location = 'php/downloadData.php';
        },
        error: function(data){
            alert(data);
        }
    });
}