var currentFile = '';

function openFormData(){
    var fileData = $("#userfile").prop("files")[0];
    var formData = new FormData();
    formData.append('userfile', fileData);
    $.ajax({
        url: 'php/open.php',  //Server script to process data
        type: 'POST',
        // Form data
        data: formData,
        //Options to tell jQuery not to process data or worry about content-type.
        cache: false,
        contentType: false,
        processData: false,
        //Ajax events
        success: function(data){
            clearForm();
            var resultData = JSON.parse(data);
            var filename = resultData.file;
            currentFile = filename;
            var formData = resultData.data;
            console.log(formData);
            try{
                fillInForm(formData)    
            }catch(error){
                alert("FAILED TO OPEN THE FILE");
                $('#openModal').modal('hide');
            }
            $('#openModal').modal('hide');
            $("#userfile").val('');

        },
        error: function(data){
            alert(data.responseText);
            $('#openModal').modal('hide');
        }
    });

}

// function showFileName(filename){
// 	$(".current-file-name").html("Current File: "+filename);
// 	$(".current-file-name").css('visibility', 'visible');
// 	currentFile = filename;
// }

function fillInForm(data){
	var formData = JSON.parse(data);
    // $('#review_period_from').val(formData.review_period_from);
    // $('#review_period_to').val(formData.review_period_to);
    $('#employee_name').val(formData.employee_name);
    $('#employee_title').val(formData.employee_title);
    $('#employee_id').val(formData.employee_id);
    $('#job_code').val(formData.job_code);

    if(formData.numOfEssentialFunctions > 0){
        $('#essential-job-functions-container').empty();
        numOfEssentialFunctions = 0;
        for(var i = 0; i < formData.numOfEssentialFunctions; i++){
            addEssentialFunction();
        }
        var currJobFunctionIndex = 0;
        var currFunction;
        $('.job-function').each(function(){
            currFunction = formData.jobFunctions[currJobFunctionIndex];
            for (var key in currFunction.textareas){
                for( var textareaname in currFunction.textareas[key]){
                    var text = currFunction.textareas[key][textareaname];
                    if(text !== ''/*none*/){
                        $('#'+textareaname).text(text);        
                    }
                }
                var rating = currFunction.selectedRating;
                if(rating !== ''/*none*/){
                    $('.rating-btn[value="'+rating+'"]', this).addClass('selected-rating');
                }
            }
            currJobFunctionIndex++;
        });
    }

    if(formData.numOfProjects > 0){
        $('#projects-container').empty();
        numOfProjects = 0;
        for(var i = 0; i < formData.numOfProjects; i++){
            addProject();
        }
        var currProjectIndex = 0;
        var currProject;
        $('.project').each(function(){
            currProject = formData.projects[currProjectIndex];
            for (var key in currProject.textareas){
                for( var textareaname in currProject.textareas[key]){
                    var text = currProject.textareas[key][textareaname];
                    if(text !== ''/*none*/){
                        $('#'+textareaname).text(text);        
                    }
                }
                var rating = currProject.selectedRating;
                if(rating !== ''/*none*/){
                    $('.rating-btn[value="'+rating+'"]', this).addClass('selected-rating');
                }
                var dueDate = currProject.dueDate;
                if(dueDate !==''/*none*/){
                    $('.project-due-date', this).val(dueDate);
                }
            }
            currProjectIndex++;
        });
    }

    if(formData.numOfDevelopmentPlans > 0){
        $('#development-plans-container').empty();
        numOfDevelopmentPlans = 0;
        for(var i = 0; i < formData.numOfDevelopmentPlans; i++){
            addDevelopmentPlan();
        }
        var currPlanIndex = 0;
        var currPlan;
        $('.development-plan').each(function(){
            currPlan = formData.developmentPlans[currPlanIndex];
            for (var key in currPlan.textareas){
                for( var textareaname in currPlan.textareas[key]){
                    var text = currPlan.textareas[key][textareaname];
                    if(text !== ''/*none*/){
                        $('#'+textareaname).text(text);        
                    }
                }
            }
            var dueDate = currPlan.dueDate;
            if(dueDate !==''/*none*/){
                $('.development-plan-due-date', this).val(dueDate);
            }
            var startDate = currPlan.startDate;
            if(startDate !==''/*none*/){
                $('.development-plan-start-date', this).val(startDate);
            }
            var endDate = currPlan.endDate;
            if(endDate !==''/*none*/){
                $('.development-plan-end-date', this).val(endDate);
            }
            currPlanIndex++;
        });
    }

    for(attribute in formData.attributes){
        var attr  = formData.attributes[attribute].attribute;
        var com = formData.attributes[attribute].comment;
        var rat = formData.attributes[attribute].rating;
        var parent = $('.attribute:contains("'+attr+'")');

        if(com !== ''/*none*/){
            $('textarea', parent).val(com);
        }
        if(rat !== ''/*none*/){
            $('.rating-btn[value="'+rat+'"]', parent).addClass('selected-rating');
        }
    }

    if(formData.isSupervisor === 'yes'){
        $('.supervisor-status-btn[value*="Yes"]').addClass("selected-supervisor-status");
        $('#supervisor-attributes-container').css('display', 'inline');
        for(attribute in formData.supervisorAttributes){
            var attr  = formData.supervisorAttributes[attribute].attribute;
            var com = formData.supervisorAttributes[attribute].comment;
            var rat = formData.supervisorAttributes[attribute].rating;
            var parent = $('.supervisor-attribute:contains("'+attr+'")');

            if(com !== ''/*none*/){
                $('textarea', parent).val(com);
            }
            if(rat !== ''/*none*/){
                $('.rating-btn[value="'+rat+'"]', parent).addClass('selected-rating');
            }
        }
    }else if(formData.isSupervisor === 'no'){
        $('.supervisor-status-btn[value*="No"]').addClass("selected-supervisor-status");
        $('#supervisor-attributes-container').css('display', 'none');
    }else{
        $('#supervisor-attributes-container').css('display', 'none');
    }

    var overallText = formData.overallRating.overallComment;
    var overallRat = formData.overallRating.overallRating;

    if(overallText !== ''/*none*/){
        $('textarea', '#overall-rating-section').val(overallText);
    }
    if(overallRat !== ''/*none*/){
        $('.rating-btn[value="'+overallRat+'"]', '#overall-rating-section').addClass('selected-rating');
    }

    // var posType = formData.positionType;
    // if(posType !== ''/*none*/){
    //     $('.position-btn[value="'+posType+'"]', '#position-class-section').addClass('selected-position-type');
    // }

    var employeeCom = formData.employeeComment;
    if(employeeCom !== ''/*none*/){
        $('textarea', '#employee-comments-section').val(employeeCom);
    }

    runValidation()
}