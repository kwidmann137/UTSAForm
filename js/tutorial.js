// $('html, body').animate({
//         scrollTop: $("#attribute-1").offset().top-300
//     }, 2000);

var tutorialQueue = [];

function startTutorial(){
	// alert("Coming soon!");
	// add next button at bottom
	$(".tutorial-background").css('display', "inline");
	$(".tutorial-bar").css('display', "inline");
	$(".tutorial-side-menu").addClass("active");
	$(".tutorial-menu-show-btn").css('display', 'inline');

	createTutorialQueue();

	$('body').prepend(infoBox);
	$('#tutorial-content-container').html("<h3>Welcome to the tutorial!</h3><p>A few things before you start:</p><ul><li>The form is disabled during the tutorials.</li><li>You can navigate through the entire tutorial by clicking the <strong>next</strong button at the bottom.</li><li>You can also choose specific portions with the menu bar on the left hand side (which you can collapse and reopen).</li><li>At any time you can click the close button at the bottom to return to the active form.</li></ul>");
}

function skipToStep(ele){
	createTutorialQueue();
	console.log($(ele));
}

function createTutorialQueue(){
	tutorialQueue = [];
	tutorialQueue.push(employeeInfoTutorial);
	tutorialQueue.push(essentialJobFunctionsTutorial);
	tutorialQueue.push(projectsTutorial);
	tutorialQueue.push(developmentPlanTutorial);
	tutorialQueue.push(attributesTutorial);
	tutorialQueue.push(supservisorsOnlyTutorial);
	tutorialQueue.push(overallRatingTutorial);
	tutorialQueue.push(employeeCommentTutorial);
	tutorialQueue.push(createPDFTutorial);
	tutorialQueue.push(openFileTutorial);
	tutorialQueue.push(saveFileTutorial);
	iterable(tutorialQueue);
}

function closeTutorial(){
	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
	$(".tutorial-background").css('display', "none");
	$(".tutorial-bar").css('display', "none");
	$(".tutorial-menu-show-btn").css('display', 'none');
	$(".tutorial-side-menu").removeClass("active");
	$("[title]").tooltip().mouseout();

	//clear tutorial elements
	$(".tutorial-element").remove();
}

function tutorialNext(){
	$(".tutorial-side-menu").removeClass("active");
	if(tutorialQueue.hasNext()){
		var func = tutorialQueue.next();
		func();
	}else{
		closeTutorial();
		//change button text back to next
		$("#tutorial-next-btn").html("Finish");
	}
}

function moveArrow(to){
	arrow = ".right-arrow";
	if($(arrow).length===0){
		$("body").prepend(arrowRight);
	}
    $(arrow).css('left', to.offset().left - $(arrow).width());
    $(arrow).css('top', to.offset().top- $(arrow).height()/2);
}

function moveArrowBottom(to){
	arrow = ".right-arrow";
	if($(arrow).length===0){
		$("body").prepend(arrowRight);
	}
    $(arrow).css('left', to.offset().left - $(arrow).width());
    $(arrow).css('top', to.offset().top);
}

//employee info
var employeeInfoTutorial = function(){
	tutorialQueue.setIndex(0);
	$('html, body').animate({
        scrollTop: $(".employee-info-section").offset().top-450
    });
    moveArrow($(".employee-info-section"));
    $('#tutorial-content-container').html("<h3 class='text-center'>Employee Info</h3><p>Fill out the years for the review period, employees Name, Title, EMPL ID and Job Code.</p>");
}

//add essential job function
var essentialJobFunctionsTutorial = function(){
	tutorialQueue.setIndex(1);

	var step1 = function(){
		//explain button
		moveArrow($("#add-essential-function-btn"));
    	$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Click this button to add a function.</p>');
    	
	}

	var step2 = function(){
		//trigger button and explain fields
		$("#add-essential-function-btn").trigger('click');
    	newID = $(".job-function").last().attr('id');
    	moveArrow($("#"+newID));
    	$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Essential Job Funciton and Standard fields are mandatory.<br>Comments are preferred for all ratings, but <strong>required</strong> for ratings of O and I.</p>');
	}

	var step3 = function(){
		//explain ratings
		moveArrow($(".job-function .btn-group").last());
		$(".job-function button[value='O']").last().tooltip().mouseover();
		$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
	}

	var step4 = function(){
		//explain delete btn
		$(".job-function button[value='O']").last().tooltip().mouseout();
		moveArrow($(".function-close-btn").last());
    	$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Click this button to delete the associated function.</p>');
	}

	var step5 = function(){
		$(".function-close-btn").last().trigger('click');
    	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
    	tutorialNext();
	}

	var steps = [];
	steps.push(step1);
	steps.push(step2);
	steps.push(step3);
	steps.push(step4);
	steps.push(step5);
	iterable(steps);

	$('html, body').animate({
		//reset next function
        scrollTop: $(".essential-job-functions-container").offset().top-450
    });
    moveArrow($(".essential-job-functions-container"));
    $('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Here you will fill out the employees job functions.</p>');
    $("#tutorial-next-btn").attr("onclick", "");

    $("#tutorial-next-btn").on('click', function(){
    	if(steps.hasNext() && tutorialQueue.getIndex() === 1){
    		var func = steps.next();
    		func();
		}else{
			return;
		}
    });
}

//add project
var projectsTutorial = function(){
	tutorialQueue.setIndex(2);
	var step1 = function(){
		//explain button
		moveArrow($("#add-project-btn"));
    	$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Click this button to add a Project.</p>');
    	
	}

	var step2 = function(){
		//trigger button and explain fields
		$("#add-project-btn").trigger('click');
    	newID = $(".project").last().attr('id');
    	moveArrow($("#"+newID));
    	$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Special Project and Standard fields are mandatory.<br>Comments are preferred for all ratings, but <strong>required</strong> for ratings of O and I.</p>');
	}

	var step3 = function(){
		//explain calendar
		var datePicker = $(".project .date-picker").last();
		moveArrow(datePicker);
		datePicker.trigger('focus');
		$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Click in this field to choose the due date from the calendar.<br><strong>This field is not required.</strong></p>');
	}

	var step4 = function(){
		//explain ratings
		moveArrow($(".project .btn-group").last());
		$(".project button[value='O']").last().tooltip().mouseover();
		$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
	}

	var step5 = function(){
		//explain delete btn
		$(".project button[value='O']").last().tooltip().mouseout();
		moveArrow($(".project-close-btn").last());
    	$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Click this button to delete the associated project.</p>');
	}

	var step6 = function(){
		$(".project-close-btn").last().trigger('click');
    	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
    	tutorialNext();
	}

	var steps = [];
	steps.push(step1);
	steps.push(step2);
	steps.push(step3);
	steps.push(step4);
	steps.push(step5);
	steps.push(step6);
	iterable(steps);

	$('html, body').animate({
        scrollTop: $(".projects-container").offset().top-450
    });
    moveArrow($(".projects-container"));

    //set initial step
    $('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Here you will fill out the employees special projects.</p>');
    $("#tutorial-next-btn").attr("onclick", "");

    $("#tutorial-next-btn").on('click', function(){
    	if(steps.hasNext() && tutorialQueue.getIndex() === 2){
    		var func = steps.next();
    		func();
		}else{
			return;
		}
    });
}

//add training/skill
var developmentPlanTutorial = function(){
	tutorialQueue.setIndex(3);

	var step1 = function(){
		//explain button
		moveArrow($("#add-development-plan-btn"));
    	$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Click this button to add a Development Plan.</p>');
    	
	}

	var step2 = function(){
		//trigger button and explain fields
		$("#add-development-plan-btn").trigger('click');
    	newID = $(".development-plan").last().attr('id');
    	moveArrow($("#"+newID));
    	$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Both Fields are required, but dates are not.</p>');
	}

	var step3 = function(){
		//explain calendar
		var datePicker = $(".development-plan .date-picker").last();
		moveArrow(datePicker);
		datePicker.trigger('focus');
		$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Click in this field to choose the due date from the calendar.<br><strong>This field is not required.</strong></p>');
	}

	var step4 = function(){
		//explain delete btn
		moveArrow($(".development-plan-close-btn").last());
    	$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Click this button to delete the associated development plan.</p>');
	}

	var step5 = function(){
		$(".development-plan-close-btn").last().trigger('click');
    	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
    	tutorialNext();
	}

	var steps = [];
	steps.push(step1);
	steps.push(step2);
	steps.push(step3);
	steps.push(step4);
	steps.push(step5);
	iterable(steps);

	$('html, body').animate({
        scrollTop: $(".development-plans-container").offset().top-450
    });
    moveArrow($(".development-plans-container"));

    $('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Here you will fill out the employees special projects.</p>');
    $("#tutorial-next-btn").attr("onclick", "");

    $("#tutorial-next-btn").on('click', function(){
    	if(steps.hasNext() && tutorialQueue.getIndex() === 3){
    		var func = steps.next();
    		func();
		}else{
			return;
		}
    });
}

//attributes
var attributesTutorial = function(){
	tutorialQueue.setIndex(4);

	var step1 = function(){
		//explain clipboard
		moveArrow($("#attribute-1 .attribute-glyph"));
		$("#attribute-1 .attribute-glyph").tooltip().mouseover();
    	$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>You can hover over the clipboard icon to see a definition of the attribute.</p>');
    	
	}

	var oldContents
	var step2 = function(){
		//explain clipboard
    	$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>You can also choose to click on the clipboard to automatically copy the contents into the field.</p>');
    	oldContents = $("#attribute-1 textarea").val();
    	$("#attribute-1 textarea").val('');
    	$("#attribute-1 .attribute-glyph").last().tooltip().mouseout();
    	$("#attribute-1 .attribute-glyph").trigger('click');
	}

	var step3 = function(){
		//explain ratings
		$("#attribute-1 textarea").val(oldContents);
		moveArrow($("#attribute-1 .btn-group"));
		$("#attribute-1 button[value='O']").last().tooltip().mouseover();
		$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
	}

	var step4 = function(){
		$("#attribute-1 button[value='O']").last().tooltip().mouseout();
    	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
    	tutorialNext();
	}

	var steps = [];
	steps.push(step1);
	steps.push(step2);
	steps.push(step3);
	steps.push(step4);
	iterable(steps);

	$('html, body').animate({
        scrollTop: $(".attributes-container").offset().top-450
    });
    moveArrow($(".attributes-container"));

    $('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Here you will rank the employee for each attribute.  For ratings of "O" or "I" a comment is required.</p>');
    $("#tutorial-next-btn").attr("onclick", "");

    $("#tutorial-next-btn").on('click', function(){
    	if(steps.hasNext() && tutorialQueue.getIndex() === 4){
    		var func = steps.next();
    		func();
		}else{
			return;
		}
    });
}

//supervisors only
var supservisorsOnlyTutorial = function(){
	tutorialQueue.setIndex(5);

	var step1 = function(){
		//explain clipboard
		moveArrow($("#supervisor-attribute-1 .attribute-glyph"));
		$("#supervisor-attribute-1 .attribute-glyph").tooltip().mouseover();
    	$('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>You can hover over the clipboard icon to see a definition of the attribute.</p>');
    	
	}

	var oldContents
	var step2 = function(){
		//explain clipboard
    	$('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>You can also choose to click on the clipboard to automatically copy the contents into the field.</p>');
    	oldContents = $("#supervisor-attribute-1 textarea").val();
    	$("#supervisor-attribute-1 textarea").val('');
    	$("#supervisor-attribute-1 .attribute-glyph").last().tooltip().mouseout();
    	$("#supervisor-attribute-1 .attribute-glyph").trigger('click');
	}

	var step3 = function(){
		//explain ratings
		$("#supervisor-attribute-1 textarea").val(oldContents);
		moveArrow($("#supervisor-attribute-1 .btn-group"));
		$("#supervisor-attribute-1 button[value='O']").last().tooltip().mouseover();
		$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
	}

	var step4 = function(){
		$("#supervisor-attribute-1 button[value='O']").last().tooltip().mouseout();
    	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
    	tutorialNext();
	}

	var steps = [];
	steps.push(step1);
	steps.push(step2);
	steps.push(step3);
	steps.push(step4);
	iterable(steps);


	$('html, body').animate({
        scrollTop: $("#supervisor-attributes-container").offset().top-450
    });
    moveArrow($("#supervisor-attributes-container"));

    $('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>Here you will rank supervisors for each attribute.  For ratings of "O" or "I" a comment is required.</p>');
    $("#tutorial-next-btn").attr("onclick", "");

    $("#tutorial-next-btn").on('click', function(){
    	if(steps.hasNext() && tutorialQueue.getIndex() === 5){
    		var func = steps.next();
    		func();
		}else{
			return;
		}
    });
}

//overall rating
var overallRatingTutorial = function(){
	tutorialQueue.setIndex(6);

	var step1 = function(){
		//explain ratings
		moveArrow($("#overall-rating-section .btn-group"));
		$("#overall-rating-section button[value='O']").last().tooltip().mouseover();
		$('#tutorial-content-container').html('<h3 class="text-center">Overall Rating</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
	}

	var step2 = function(){
		$("#overall-rating-section button[value='O']").last().tooltip().mouseout();
    	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
    	tutorialNext();
	}

	var steps = [];
	steps.push(step1);
	steps.push(step2);
	iterable(steps);

	$('html, body').animate({
        scrollTop: $("#overall-rating-section").offset().top-450
    });
    moveArrowBottom($("#overall-rating-section"));

    $('#tutorial-content-container').html('<h3 class="text-center">Overall Rating</h3><p>Provide your overall rating of the employee.</p>');
    $("#tutorial-next-btn").attr("onclick", "");

    $("#tutorial-next-btn").on('click', function(){
    	if(steps.hasNext() && tutorialQueue.getIndex() === 6){
    		var func = steps.next();
    		func();
		}else{
			return;
		}
    });
}

//employee comments
var employeeCommentTutorial=function(){
	tutorialQueue.setIndex(7);
	$('html, body').animate({
        scrollTop: $("#employee-comments-section").offset().top-450
    });
    moveArrowBottom($("#employee-comments-section"));

    $('#tutorial-content-container').html('<h3 class="text-center">Employee Comments</h3><p>The employee should fill in their comments regarding the evaluation.<br>We will now cover how to save the form so you can send it to an employee or have a copy to work on later.</p>');
}

//create PDF
var createPDFTutorial = function(){
	tutorialQueue.setIndex(8);

	var step1 = function(){
		// trigger the pdf button and explain the menu
		$("#makePDFModal").modal('show');
		$("#makePDFModal").css('z-index', 6);
		$("#makePDFModal").css('top', $(".tutorial-info-box").position().top+$(".tutorial-info-box").height()+80);
		$(".modal-backdrop").css('display', 'none');

		$(arrow).css('left', $(".tutorial-info-box").offset().left - $(arrow).width());
    	$(arrow).css('top', $(".tutorial-info-box").offset().top+$(".tutorial-info-box").height()+100);
    	$('#tutorial-content-container').html('<h3 class="text-center">Create the PDF</h3><p>Creating the PDF will not save your form.  If you want to be able to make revisions after generating the PDF be sure to hit <strong>Save</strong> before you <strong>Generate the PDF</strong>.  When you do hit <strong>Generate PDF</strong> the PDF will open in a new window where you can print or download it.<br><span class="warning text-center">WARNING</span><br>Using File->Print from the menu will <strong>NOT</strong> print the correct document, you must use this button to generate the PDF.</p>');
    	
	}

	var step2 = function(){
		$("#makePDFModal").modal('hide');
    	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
    	tutorialNext();
	}

	var steps = [];
	steps.push(step1);
	steps.push(step2);
	iterable(steps);

    moveArrowBottom($("#make-pdf-btn"));

    //initial step
    $('#tutorial-content-container').html('<h3 class="text-center">Creating the PDF</h3><p>This will be the <strong>LAST</strong> step you will perform.  You will not be able to generate the PDF if you have any errors on the form still, such as any required fields being blank.  Don\'t worry, it will warn you if that is the case.  To begin you would click this button (don\'t actually do it now, keep using the next button at the bottom).</p>');
    $("#tutorial-next-btn").attr("onclick", "");

    $("#tutorial-next-btn").on('click', function(){
    	if(steps.hasNext() && tutorialQueue.getIndex() === 8){
    		var func = steps.next();
    		func();
		}else{
			return;
		}
    });
}

//open
var openFileTutorial = function(){
	tutorialQueue.setIndex(9);

	var step1 = function(){
		// trigger the pdf button and explain the menu
		$("#openModal").modal('show');
		$("#openModal").css('z-index', 6);
		$("#openModal").css('top', $(".tutorial-info-box").position().top+$(".tutorial-info-box").height()+120);
		$(".modal-backdrop").css('display', 'none');

		$(arrow).css('left', $(".tutorial-info-box").offset().left - $(arrow).width());
    	$(arrow).css('top', $(".tutorial-info-box").offset().top+$(".tutorial-info-box").height()+140);
    	$('#tutorial-content-container').html('<h3 class="text-center">Opening</h3><p>This dialogue allows you to click on <strong>Choose File</strong> and browse your computer for the file you wish to upload.  Once you hit open, it will read the file and prepopulate the form with all the information you had saved before.<br><span class="text-center warning">WARNING</span><br>You can only open files that were generated by this program.</p>');
    	
	}

	var step2 = function(){
		$("#openModal").modal('hide');
    	$("#tutorial-next-btn").attr("onclick", "tutorialNext();");
    	tutorialNext();
	}

	var steps = [];
	steps.push(step1);
	steps.push(step2);
	iterable(steps);

    moveArrowBottom($("#open-btn"));

    //initial step
    $('#tutorial-content-container').html('<h3 class="text-center">Opening</h3><p>This button allows you to open a file you previously saved from this program.</p>');
    $("#tutorial-next-btn").attr("onclick", "");

    $("#tutorial-next-btn").on('click', function(){
    	if(steps.hasNext() && tutorialQueue.getIndex() === 9){
    		var func = steps.next();
    		func();
		}else{
			return;
		}
    });
}

//save
var saveFileTutorial = function(){
	tutorialQueue.setIndex(10);

    moveArrowBottom($("#save-btn"));

    //initial step
    $('#tutorial-content-container').html('<h3 class="text-center">Saving</h3><p>This button allows you to save all of the data from the form so you can come back and continue working any time, or save different drafts if you wish.  Clicking save will automatically download the data for you.<br><span class="text-center warning">WARNING</span><br>When you download the data file it is encrypted for security.  Do not attempt to alter it outside of this program or you will ruin the file.  Only this program can open the data file you will download in a useable format.<br><br>Using File->Save from the menu will <strong>NOT</strong> save your form, you must use this save button.</p>');

    	$("#tutorial-next-btn").html("Finish");
}

var iterable = function(arr){
	var cur = -1;
	arr.hasNext = (function(){
		return (cur+1 >= this.length) ? false : true;
	});
    arr.next = (function () {
    	return (++cur >= this.length) ? false : this[cur]; 
    });
    arr.prev = (function () { 
    	return (--cur < 0) ? false : this[cur]; 
    });
    arr.setIndex = (function(index){
    	cur = index;
    })
    arr.getIndex = function(){
    	return cur;
    }
    return arr;
}

$(function(){
	$(".tutorial-menu-close-btn, .tutorial-item-btn").on('click', function(){
		$(".tutorial-side-menu").removeClass("active");
	});

	$(".tutorial-menu-show-btn").on('click', function(){
		$(".tutorial-side-menu").addClass("active");
	});
});

var arrowLeft = '<div><i class="fa fa-arrow-left left-arrow" aria-hidden="true"></i></div>';
var infoBox = '<div class="tutorial-info-box tutorial-element raised-div"><div class="tutorial-content-container" id="tutorial-content-container"></div><div class="tutorial-navigate-buttons row"><div class="col-xs-12 text-center"><button class="btn btn-danger btn-lg" id="tutorial-close-btn" onclick="closeTutorial();">Close</button><button class="btn btn-primary btn-lg" id="tutorial-next-btn" onclick="tutorialNext();">Next</button></div></div></div>';
var arrowRight = '<div><i class="fa fa-arrow-right right-arrow tutorial-element" aria-hidden="true"></i></div>';