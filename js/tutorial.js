// have a global tutorial value
var tutorial;

var infoBox = '<div class="tutorial-info-box tutorial-element raised-div"><div class="tutorial-content-container" id="tutorial-content-container"></div><div class="tutorial-navigate-buttons row"><div class="col-xs-12 text-center"><button class="btn btn-primary btn-lg pull-left" id="tutorial-back-btn" onclick="tutorialBack();">Back</button><button class="btn btn-success btn-lg pull-right" id="tutorial-next-btn" onclick="tutorialNext();">Next</button></div></div></div>';
var arrowImg = '<div><img class="arrow tutorial-element" src="images/greenArrow.png"/></div>';

function Tutorial(){
	this.currStep;
}

Tutorial.prototype.createTutorialItems = function(){
	
	//instantiate all tutorial items
	this.welcome = new welcomeToTutorial();
	this.employeeInfo = new employeeInfoTutorial(); 
	this.jobs= new essentialJobFunctionsTutorial(); 
	this.projects = new projectsTutorial(); 
	this.developmentPlans = new developmentPlanTutorial(); 
	this.attributes = new attributesTutorial(); 
	this.supervisorAttributes = new supservisorsOnlyTutorial(); 
	this.overallRating = new overallRatingTutorial(); 
	this.employeeComment = new employeeCommentTutorial(); 
	this.save = new saveFileTutorial(); 
	this.open = new openFileTutorial(); 
	this.createPDF = new createPDFTutorial(); 
	this.share = new shareFileTutorial();

	//set the order of all tutorial items
	this.welcome.prev = null;
	this.welcome.next = this.employeeInfo;
	this.employeeInfo.prev = this.welcome;
	this.employeeInfo.next = this.jobs;
	this.jobs.prev = this.employeeInfo;
	this.jobs.next = this.projects;
	this.projects.prev = this.jobs; 
	this.projects.next = this.developmentPlans; 
	this.developmentPlans.prev = this.projects; 
	this.developmentPlans.next = this.attributes; 
	this.attributes.prev = this.developmentPlans; 
	this.attributes.next = this.supervisorAttributes; 
	this.supervisorAttributes.prev = this.attributes; 
	this.supervisorAttributes.next = this.overallRating; 
	this.overallRating.prev = this.supervisorAttributes; 
	this.overallRating.next = this.employeeComment; 
	this.employeeComment.prev = this.overallRating; 
	this.employeeComment.next = this.save; 
	this.save.prev = this.employeeComment; 
	this.save.next = this.share; 
	this.share.prev = this.save;
	this.share.next = this.open;
	this.open.prev = this.share; 
	this.open.next = this.createPDF; 
	this.createPDF.prev = this.open; 
	this.createPDF.next = null; 

	this.currStep = this.welcome;
}

var startTutorial = function(){
	console.log('In start tutorial');
	if(typeof tutorial !== 'undefined'){
		console.log("tutorial existed");
		if(typeof tutorial.currStep !== 'undefined'){
			console.log("currstep existed, cleaning");
			tutorial.currStep.clean();
			$(".tutorial-element").remove();
		}
	}
	tutorial = new Tutorial();
	tutorial.createTutorialItems();
	$(".tutorial-background").css('display', "inline");
	$(".tutorial-side-menu").addClass("active");
	$(".tutorial-menu-show-btn").css('display', 'inline');

	$('body').prepend(infoBox);
	tutorial.currStep.start();
}

var cleanTutorial = function(){
	$("#tutorial-next-btn").html("Next");
	tutorial.currStep.clean();
}

var closeTutorial = function(){
	tutorial.currStep.clean();
	$(".tutorial-background").css('display', "none");
	$(".tutorial-menu-show-btn").css('display', 'none');
	$(".tutorial-side-menu").removeClass("active");

	//clear tutorial elements
	$(".tutorial-element").remove();
}

var tutorialBack = function(){
	//hide side menu
	$(".tutorial-side-menu").removeClass("active");
	if(tutorial.currStep.currSubStep.prev !== null){
		tutorial.currStep.currSubStep = tutorial.currStep.currSubStep.prev;
		tutorial.currStep.currSubStep.run();
	}else{
		if(tutorial.currStep.prev !== null){
			//clean up last step
			tutorial.currStep.clean();
			//get next tutorial
			tutorial.currStep = tutorial.currStep.prev;
			// start next tutorail
			tutorial.currStep.start();
		}
	}	
}

var tutorialNext = function(){
	//hide side menu
	$(".tutorial-side-menu").removeClass("active");
	if(tutorial.currStep.currSubStep.next !== null){
		tutorial.currStep.currSubStep = tutorial.currStep.currSubStep.next;
		tutorial.currStep.currSubStep.run();
	}else{
		if(tutorial.currStep.next !== null){
			//clean up last step
			tutorial.currStep.clean();
			//get next tutorial
			tutorial.currStep = tutorial.currStep.next;
			// start next tutorail
			tutorial.currStep.start();
		}else{
			closeTutorial();
		}
	}	
}

var moveArrow = function(to, direction){
	if(direction == 'up'){
		$(".arrow").attr('src', 'images/upArrow.png');
		arrow = ".arrow";
		if($(arrow).length===0){
			$("body").prepend(arrowImg);
		}
	    $(arrow).css('left', to.offset().left - $(arrow).width()/2+20);
	    $(arrow).css('top', to.offset().top + to.height());
	}else if(direction == 'right'){
		$(".arrow").attr('src', 'images/greenArrow.png');
		arrow = ".arrow";
		if($(arrow).length===0){
			$("body").prepend(arrowImg);
		}
	    $(arrow).css('left', to.offset().left - $(arrow).width());
	    $(arrow).css('top', to.offset().top- $(arrow).height()/2);
	}
}

function welcomeToTutorial(){
	var self = this;
	self.currSubStep = null;

	self.step1 = {
		next : null,
		prev : null,
		// add next button at bottom
		run : function(){
		$('#tutorial-content-container').html("<h3>Welcome to the tutorial!</h3><p>A few things before you start:</p><ul><li>The form is disabled during the tutorials.</li><li>You can navigate through the entire tutorial by clicking the <strong>next</strong button at the bottom.</li><li>You can also choose specific portions with the menu bar on the left hand side (which you can collapse and reopen).</li><li>At any time you can click the close button at the bottom to return to the active form.</li></ul>");
		}
	}

	self.start = function(){
		//set new curr step
		tutorial.currStep = self;

		//start initial step
		self.currSubStep = self.step1;
		self.currSubStep.run();
		$("#tutorial-back-btn").css('display', 'none');
	}

	self.clean = function(){
		//nothing to clean
	}
}
//employee info
function employeeInfoTutorial(){
	var self = this;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){

	}

	self.step1 = {
		next : null,
		prev : null,
		run :function(){
		$('html, body').animate({
        	scrollTop: $(".employee-info-section").offset().top-450
    	});
    	moveArrow($(".employee-info-section"), "right");
    	$('#tutorial-content-container').html("<h3 class='text-center'>Employee Info</h3><p>Fill out the years for the review period, employees Name, Title, EMPL ID and Job Code.</p>");
    	}
	}
}

//add essential job function
function essentialJobFunctionsTutorial(){
	var self = this;
	self.currSubStep = null;
	self.jobsAdded = 0;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = self.step3;
		self.step3.prev = self.step2;
		self.step3.next = self.step4;
		self.step4.prev = self.step3;
		self.step4.next = self.step5;
		self.step5.prev = self.step4;
		self.step5.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		console.log("In clean function for essential jobs functions");
		if(self.jobsAdded === 1){
			$(".job-function button[value='O']").last().tooltip().mouseout();
			$(".function-close-btn").last().trigger('click');
			self.jobsAdded--;
		}
	}

	self.step1 = {
		run : function(){
			$('html, body').animate({
			//reset next function
		        scrollTop: $(".essential-job-functions-container").offset().top-450
		    });
		    moveArrow($(".essential-job-functions-container"), "right");
		    $('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Here you will fill out the employees job functions.</p>');
		}
	}

	self.step2 = {
		//explain button
		run : function(){
			moveArrow($("#add-essential-function-btn"), "right");
    		$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Click self button to add a function.</p>');
    	}
    	
	}

	self.step3 = {
		//trigger button and explain fields
		run: function(){
			if(self.jobsAdded === 0){
				$("#add-essential-function-btn").trigger('click');
				self.jobsAdded++;
			}
	    	moveArrow($(".job-function").last(), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Essential Job Funciton and Standard fields are mandatory.<br>Comments are preferred for all ratings, but <strong>required</strong> for ratings of O and I.</p>');
	    }
	}

	self.step4 = {
		//explain ratings
		run: function(){
			moveArrow($(".job-function .btn-group").last(), "right");
			$(".job-function button[value='O']").last().tooltip().mouseover();
			$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
		}
	}

	self.step5 = {
		//explain delete btn
		run: function(){
			$(".job-function button[value='O']").last().tooltip().mouseout();
			moveArrow($(".function-close-btn").last(), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Click this button to delete the associated function.</p>');
	    }
	}
}

//add project
function projectsTutorial(){
	var self = this;
	self.projectsAdded = 0;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = self.step3;
		self.step3.prev = self.step2;
		self.step3.next = self.step4;
		self.step4.prev = self.step3;
		self.step4.next = self.step5;
		self.step5.prev = self.step4;
		self.step5.next = self.step6;
		self.step6.prev = self.step5;
		self.step6.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		if(self.projectsAdded === 1){
			$(".project .date-picker").last().trigger('blur');
			$(".project button[value='O']").last().tooltip().mouseout();
			$(".project-close-btn").last().trigger('click');
			self.projectsAdded--;
		}
	}

	self.step1 = {
		run: function(){
			$('html, body').animate({
		        scrollTop: $(".projects-container").offset().top-450
		    });
		    moveArrow($(".projects-container"), "right");

		    //set initial step
		    $('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Here you will fill out the employees special projects.</p>');
		}
	}

	self.step2 = {
		run: function(){
			//explain button
			moveArrow($("#add-project-btn"), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Click self button to add a Project.</p>');
	    }
	}

	self.step3 = {
		run: function(){
			//trigger button and explain fields
			if(self.projectsAdded === 0){
				$("#add-project-btn").trigger('click');
				self.projectsAdded++;
			}
	    	moveArrow($(".project").last(), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Special Project and Standard fields are mandatory.<br>Comments are preferred for all ratings, but <strong>required</strong> for ratings of O and I.</p>');
	    }
	}

	self.step4 = {
		run: function(){
			//explain calendar
			var datePicker = $(".project .date-picker").last();
			moveArrow(datePicker, "right");
			datePicker.trigger('focus');
			$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Click in self field to choose the due date from the calendar.<br><strong>self field is not required.</strong></p>');
		}
	}

	self.step5 = {
		run: function(){
			//explain ratings
			moveArrow($(".project .btn-group").last(), "right");
			$(".project button[value='O']").last().tooltip().mouseover();
			$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
		}
	}

	self.step6 = {
		run: function(){
			//explain delete btn
			$(".project button[value='O']").last().tooltip().mouseout();
			moveArrow($(".project-close-btn").last(), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Click this button to delete the associated project.</p>');
	    }
	}
}

//add training/skill
function developmentPlanTutorial(){
	var self = this;
	self.developmentPlansAdded = 0;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = self.step3;
		self.step3.prev = self.step2;
		self.step3.next = self.step4;
		self.step4.prev = self.step3;
		self.step4.next = self.step5;
		self.step5.prev = self.step4;
		self.step5.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		if(self.developmentPlansAdded === 1){
			$(".development-plan .date-picker").last().trigger('blur');
			$(".development-plan-close-btn").last().trigger('click');
			self.developmentPlansAdded--;
		}
	}

	self.step1 = {
		run: function(){
			$('html, body').animate({
		        scrollTop: $(".development-plans-container").offset().top-450
		    });
		    moveArrow($(".development-plans-container"), "right");

		    $('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Here you will fill out the employees special projects.</p>');
		}
	}

	self.step2 = {
		run: function(){
			//explain button
			moveArrow($("#add-development-plan-btn"), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Click self button to add a Development Plan.</p>');
	    }
    	
	}

	self.step3 = {
		run: function(){
			//trigger button and explain fields
			if(self.developmentPlansAdded === 0){
				$("#add-development-plan-btn").trigger('click');
				self.developmentPlansAdded++;
			}
	    	moveArrow($(".development-plan").last(), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Both Fields are required, but dates are not.</p>');
	    }
	}

	self.step4 = {
		run: function(){
			//explain calendar
			var datePicker = $(".development-plan .date-picker").last();
			moveArrow(datePicker, "right");
			datePicker.trigger('focus');
			$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Click in self field to choose the due date from the calendar.<br><strong>this field is not required.</strong></p>');
		}
	}

	self.step5 = {
		run: function(){
			//explain delete btn
			moveArrow($(".development-plan-close-btn").last(), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Click this button to delete the associated development plan.</p>');
	    }
	}
}

//attributes
function attributesTutorial(){
	var self = this;
	self.oldContents;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = self.step3;
		self.step3.prev = self.step2;
		self.step3.next = self.step4;
		self.step4.prev = self.step3;
		self.step4.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		$("#attribute-1 .attribute-glyph").last().tooltip().mouseout();
		if(typeof self.oldContents !== 'undefined'){
			$("#attribute-1 textarea").val(self.oldContents);
		}
		$("#attribute-1 button[value='O']").last().tooltip().mouseout();
	}

	self.step1 = {
		run: function(){
			$('html, body').animate({
		        scrollTop: $(".attributes-container").offset().top-450
		    });
		    moveArrow($(".attributes-container"), "right");

		    $('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Here you will rank the employee for each attribute.  For ratings of "O" or "I" a comment is required.</p>');
		}
	}

	self.step2 = {
		run: function(){
		//explain clipboard
			moveArrow($("#attribute-1 .attribute-glyph"), "right");
			$("#attribute-1 .attribute-glyph").tooltip().mouseover();
	    	$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>You can hover over the clipboard icon to see a definition of the attribute.</p>');
	    }
    	
	}

	self.step3 = {
		run: function(){
		//explain clipboard
	    	$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>You can also choose to click on the clipboard to automatically copy the contents into the field.</p>');
	    	self.oldContents = $("#attribute-1 textarea").val();
	    	$("#attribute-1 textarea").val('');
	    	$("#attribute-1 .attribute-glyph").last().tooltip().mouseout();
	    	$("#attribute-1 .attribute-glyph").trigger('click');
	    }
	}

	self.step4 = {
		run: function(){
		//explain ratings
			$("#attribute-1 textarea").val(self.oldContents);
			moveArrow($("#attribute-1 .btn-group"), "right");
			$("#attribute-1 button[value='O']").last().tooltip().mouseover();
			$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
		}
	}
}

//supervisors only
function supservisorsOnlyTutorial(){
	var self = this;
	self.oldContents;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = self.step3;
		self.step3.prev = self.step2;
		self.step3.next = self.step4;
		self.step4.prev = self.step3;
		self.step4.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		$("#supervisor-attribute-1 .attribute-glyph").tooltip().mouseout();
		if(typeof self.oldContents !== 'undefined'){
			$("#supervisor-attribute-1 textarea").val(self.oldContents);
		}
		$("#supervisor-attribute-1 button[value='O']").last().tooltip().mouseout();
	}

	self.step1 = {
		run: function(){
			$('html, body').animate({
		        scrollTop: $("#supervisor-attributes-container").offset().top-450
		    });
		    moveArrow($("#supervisor-attributes-container"), "right");

		    $('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>Here you will rank supervisors for each attribute.  For ratings of "O" or "I" a comment is required.</p>');
		}
	}

	self.step2 = {
		run: function(){
		//explain clipboard
			moveArrow($("#supervisor-attribute-1 .attribute-glyph"), "right");
			$("#supervisor-attribute-1 .attribute-glyph").tooltip().mouseover();
	    	$('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>You can hover over the clipboard icon to see a definition of the attribute.</p>');
	    }
    	
	}

	self.step3 = {
		run: function(){
			//explain clipboard
			$("#supervisor-attribute-1 .attribute-glyph").tooltip().mouseout();
	    	$('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>You can also choose to click on the clipboard to automatically copy the contents into the field.</p>');
	    	self.oldContents = $("#supervisor-attribute-1 textarea").val();
	    	$("#supervisor-attribute-1 textarea").val('');
	    	$("#supervisor-attribute-1 .attribute-glyph").last().tooltip().mouseout();
	    	$("#supervisor-attribute-1 .attribute-glyph").trigger('click');
	    }
	}

	self.step4 = {
		run: function(){
			//explain ratings
			$("#supervisor-attribute-1 textarea").val(self.oldContents);
			moveArrow($("#supervisor-attribute-1 .btn-group"), "right");
			$("#supervisor-attribute-1 button[value='O']").last().tooltip().mouseover();
			$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
		}
	}
}

//overall rating
function overallRatingTutorial(){
	var self = this;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		$("#overall-rating-section button[value='O']").last().tooltip().mouseout();
	}

	self.step1 = {
		run: function(){
			$('html, body').animate({
		        scrollTop: $("#overall-rating-section").offset().top-450
		    });
		    moveArrow($("#overall-rating-section"), "right");

		    $('#tutorial-content-container').html('<h3 class="text-center">Overall Rating</h3><p>Provide your overall rating of the employee.</p>');
		}
	}

	self.step2 = {
		run: function(){
			//explain ratings
			moveArrow($("#overall-rating-section .btn-group"), "right");
			$("#overall-rating-section button[value='O']").last().tooltip().mouseover();
			$('#tutorial-content-container').html('<h3 class="text-center">Overall Rating</h3><p>Use these buttons to select the appropriate rating.  You can hover over each of the options to see a definition.  When you select a button it will turn green.</p>');
		}
	}
}

//employee comments
function employeeCommentTutorial(){
	var self = this;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){

	}

	self.step1 = {
		run: function(){
		$('html, body').animate({
		        scrollTop: $("#employee-comments-section").offset().top-450
		    });
		    moveArrow($("#employee-comments-section"), "right");

		    $('#tutorial-content-container').html('<h3 class="text-center">Employee Comments</h3><p>The employee should fill in their comments regarding the evaluation.<br>We will now cover how to save the form so you can send it to an employee or have a copy to work on later.</p>');
		}
	}
}

//create PDF
function createPDFTutorial(){
	var self = this;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		$("#makePDFModal").modal('hide');
	}

	self.step1 = {
		run: function(){
			moveArrow($("#make-pdf-btn"), "up");

	    	//initial step
	    	$('#tutorial-content-container').html('<h3 class="text-center">Creating the PDF</h3><p>This will be the <strong>LAST</strong> step you will perform.  You will not be able to generate the PDF if you have any errors on the form still, such as any required fields being blank.  Don\'t worry, it will warn you if that is the case.  To begin you would click this button (don\'t actually do it now, keep using the next button at the bottom).</p>');
	    }
	}
	self.step2 = {
		run: function(){
			// trigger the pdf button and explain the menu
			$("#makePDFModal").modal('show');
			$("#makePDFModal").css('z-index', 6);
			$("#makePDFModal").css('top', $(".tutorial-info-box").position().top+$(".tutorial-info-box").height()+80);
			$(".modal-backdrop").css('z-index', '5');
			$(".modal-backdrop").css('display', 'none');

			$(".arrow").attr('src', 'images/greenArrow.png');
			$(".arrow").css('left', $(".tutorial-info-box").offset().left - $(".arrow").width());
	    	$(".arrow").css('top', $(".tutorial-info-box").offset().top+$(".tutorial-info-box").height()+100);
	    	$('#tutorial-content-container').html('<h3 class="text-center">Create the PDF</h3><p>Creating the PDF will not save your form.  If you want to be able to make revisions after generating the PDF be sure to hit <strong>Save</strong> before you <strong>Generate the PDF</strong>.  When you do hit <strong>Generate PDF</strong> the PDF will open in a new window where you can print or download it.<br><span class="warning text-center">WARNING</span><br>Using File->Print from the menu will <strong>NOT</strong> print the correct document, you must use this button to generate the PDF.</p>');	
	    	$("#tutorial-next-btn").removeClass('btn-primary');
	    	$("#tutorial-next-btn").removeClass('pull-right');
	    	$("#tutorial-next-btn").addClass('btn-warning');
	    	$("#tutorial-next-btn").html("Finish");
	    	$("#tutorial-back-btn").css('display', 'none');
	    }
	}
}

//open
function openFileTutorial(){
	var self = this;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		$("#openModal").modal('hide');
	}

	self.step1 = {
		run: function(){
			moveArrow($("#open-btn"), "up");

			//initial step
			$('#tutorial-content-container').html('<h3 class="text-center">Opening</h3><p>This button allows you to open a file you previously saved from this program.</p>');
		}
	}

	self.step2 = {
		run: function(){
			// trigger the pdf button and explain the menu
			$("#openModal").modal('show');
			$("#openModal").css('z-index', 6);
			$("#openModal").css('top', $(".tutorial-info-box").position().top+$(".tutorial-info-box").height()+120);
			$(".modal-backdrop").css('display', 'none');

			$(".arrow").attr('src', 'images/greenArrow.png');
			$(arrow).css('left', $(".tutorial-info-box").offset().left - $(arrow).width());
	    	$(arrow).css('top', $(".tutorial-info-box").offset().top+$(".tutorial-info-box").height()+140);
	    	$('#tutorial-content-container').html('<h3 class="text-center">Opening</h3><p>This dialogue allows you to click on <strong>Choose File</strong> and browse your computer for the file you wish to upload.  Once you hit open, it will read the file and prepopulate the form with all the information you had saved before.<br><span class="text-center warning">WARNING</span><br>You can only open files that were generated by this program.</p>');
		}
	}
}

//save
function saveFileTutorial(){
	var self  = this;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){

	}

	self.step1 = {
		run: function(){
			moveArrow($("#save-btn"), "up");

		    //initial step
		    $('#tutorial-content-container').html('<h3 class="text-center">Saving</h3><p>This button allows you to save all of the data from the form so you can come back and continue working any time, or save different drafts if you wish.  Clicking save will automatically download the data for you.<br><span class="text-center warning">WARNING</span><br>When you download the data file it is encrypted for security.  Do not attempt to alter it outside of this program or you will ruin the file.  Only this program can open the data file you will download in a useable format.<br><br>Using File->Save from the menu will <strong>NOT</strong> save your form, you must use this save button.</p>');
		}
	}
}

function shareFileTutorial(){
	var self  = this;
	self.currSubStep = null;

	self.start = function(){
		$("#tutorial-back-btn").css('display', 'inline');
		//set new curr step
		tutorial.currStep = self;
		self.step1.prev = null;
		self.step1.next = self.step2;
		self.step2.prev = self.step1;
		self.step2.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){

	}

	self.step1 = {
		run: function(){
			moveArrow($("#save-btn"), "up");

		    //initial step
		    $('#tutorial-content-container').html('<h3 class="text-center">Sharing</h3><p> You will share the form with another employee the same way you would share any other file.  You can share it via email, google drive, or any other way you wish.  Just remember to not alter it outside of this program.  The next step offers a template you can use to send to the employee if they have never used this form before, it will help get them started.</p>');
		}
	}

	self.step2 = {
		run: function(){
		    $('#tutorial-content-container').html('<h3 class="text-center">Sharing</h3><p>Share the file however you wish, email, cloud storage etc.  You can send the following template to provide them with instructions:</p><div class="share-template"><p><h4>Steps to open form</h4><br>Step 1 ) Download a copy of the file shared with you<br>Step 2 ) Proceed to this link: <a href="http://terry.it.utsa.edu/www1/hr/compensation/PerformanceEvaluation/form/">http://terry.it.utsa.edu/www1/hr/compensation/PerformanceEvaluation/form/</a><br>Step 3) Once there click on the tutorial button in the top right hand corner to learn about the form, including how to open the file provided</p></div>');
		}
	}
}

$(function(){
	$(".tutorial-menu-show-btn").on('click', function(){
		$(".tutorial-side-menu").addClass("active");
	});
	$(".tutorial-menu-close-btn").on('click', function(){
		$(".tutorial-side-menu").removeClass("active");
	});
	$(".tutorial-item-btn").on('click', function(){
		$(".tutorial-side-menu").removeClass("active");
	});
});