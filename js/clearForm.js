function clearForm(){
    $('.review-period-section input, .employee-info-section input').each(function(){
        $(this).val('');
    });

    $('textarea').each(function(){
        $(this).val('');
    });

    $('.selected-rating').each(function(){
        $(this).removeClass('selected-rating');
    });

    $('.date-picker').each(function(){
        $(this).val('');
    });

    $('.selected-supervisor-status').removeClass('selected-supervisor-status');
    $('#supervisor-attributes-container').css('display', 'none');

    $("#essential-job-functions-container").empty();
    $("#projects-container").empty();
    $("#development-plans-container").empty();
}

function promptToClear(){
    $("#promptToClearModal").modal('show');
    var yes = $("#clear-btn-yes");
    yes.off().on('click', function(){
        clearForm();
        currentFile = '';
        $("#promptToClearModal").modal('hide');
    });
    var no = $("#clear-btn-no");
    no.off().on('click', function(){
        $("#promptToClearModal").modal('hide');
    });
}