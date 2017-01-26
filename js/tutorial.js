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
	this.createEmployeePDF = new createEmployeePDF();
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
	this.save.next = this.open; 
	this.open.prev = this.save; 
	this.open.next = this.share; 
	this.share.prev = this.open;
	this.share.next = this.createEmployeePDF;
	this.createEmployeePDF.prev = this.share;
	this.createEmployeePDF.next = this.createPDF;
	this.createPDF.prev = this.createEmployeePDF; 
	this.createPDF.next = null; 

	this.currStep = this.welcome;
}

var startTutorial = function(){
	if(typeof tutorial !== 'undefined'){
		if(typeof tutorial.currStep !== 'undefined'){
			tutorial.currStep.clean();
			$(".tutorial-element").remove();
		}
	}
	if($(".arrow").length===0){
		$("body").prepend(arrowImg);
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
	$("#tutorial-next-btn").removeClass('btn-warning');
	$("#tutorial-next-btn").addClass('btn-primary');
	$("#tutorial-next-btn").addClass('pull-right');
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
			$(".arrow").attr('src', 'images/upArrow.png');
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
			$('#tutorial-content-container').html("<h3>Welcome to the tutorial</h3><p>A few things before you start:</p><ul><li>Navigate this tutorial using the Next and Back buttons or use the buttons on the left menu bar to take you directly to a specific topic.</li><li>At any time you can click on the <strong>Exit Tutorial</strong> button to return to editing the form.</li></ul>");
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
    	$('#tutorial-content-container').html("<h3 class='text-center'>Employee Info</h3><p>Fill out only the years for the review period, employees Name, Title, EMPL ID and Job Code.</p>");
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
		if(self.jobsAdded === 1){
			$(".job-function button[value='O']").last().tooltip().mouseout();
			deleteElement($(".function-close-btn").last());
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
		    $('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>List an essential job function/responsibility and the standards for each. The standard describes performance in that function that would meet expectations.</p>');
		}
	}

	self.step2 = {
		//explain button
		run : function(){
			moveArrow($("#add-essential-function-btn"), "right");
			$('html, body').animate({
		        scrollTop: $(".arrow").offset().top-450
		    });
    		$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Click this button to add an essential job function/responsibility and the standard.</p>');
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
	    	$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>“Essential Job Function” and “Standard” fields are mandatory.  Comments are preferred for all ratings, but required for ratings of O and I.</p>');
	    }
	}

	self.step4 = {
		//explain ratings
		run: function(){
			moveArrow($(".job-function .btn-group").last(), "right");
			$(".job-function button[value='O']").last().tooltip().mouseover();
			$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Use these buttons to select the appropriate rating for each job function. Hover over each of the options to see a definition. When you select a rating it will turn green.</p>');
		}
	}

	self.step5 = {
		//explain delete btn
		run: function(){
			$(".job-function button[value='O']").last().tooltip().mouseout();
			moveArrow($(".function-close-btn").last(), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Job Functions</h3><p>Click this button to delete the associated job function.</p>');
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
		self.step5.next = null;
		self.currSubStep = self.step1;
		self.currSubStep.run();
	}

	self.clean = function(){
		if(self.projectsAdded === 1){
			$(".project .date-picker").last().trigger('blur');
			$(".project button[value='O']").last().tooltip().mouseout();
			deleteElement($(".project-close-btn").last());
			self.projectsAdded--;
		}
	}

	self.step1 = {
		run: function(){
			//explain button
			moveArrow($("#add-project-btn"), "right");
			$('html, body').animate({
		        scrollTop: $(".arrow").offset().top-450
		    });
	    	$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Click on the Add Project button to add any special projects that the employee has worked on.</p>');
	    }
	}

	self.step2 = {
		run: function(){
			//trigger button and explain fields
			if(self.projectsAdded === 0){
				$("#add-project-btn").trigger('click');
				self.projectsAdded++;
			}
	    	moveArrow($(".project").last(), "right");
	    	$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>If a special projects was assigned, the Standard field is mandatory. Comments are preferred for all ratings, but required for ratings of O and I.</p>');
	    }
	}

	self.step3 = {
		run: function(){
			//explain calendar
			var datePicker = $(".project .date-picker").last();
			moveArrow(datePicker, "right");
			datePicker.trigger('focus');
			$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Click in this field to choose the due date from the calendar.  <strong>This field is not required.</strong></p>');
		}
	}

	self.step4 = {
		run: function(){
			//explain ratings
			moveArrow($(".project .btn-group").last(), "right");
			$(".project button[value='O']").last().tooltip().mouseover();
			$('#tutorial-content-container').html('<h3 class="text-center">Projects</h3><p>Use these buttons to select the appropriate rating. Hover over each of the options to see a definition. When you select a button it will turn green.</p>');
		}
	}

	self.step5 = {
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
			deleteElement($(".development-plan-close-btn").last());
			self.developmentPlansAdded--;
		}
	}

	self.step1 = {
		run: function(){
			$('html, body').animate({
		        scrollTop: $(".development-plans-container").offset().top-450
		    });
		    moveArrow($(".development-plans-container"), "right");

		    $('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Complete the employee’s development plans and training requirements (if any).</p>');
		}
	}

	self.step2 = {
		run: function(){
			//explain button
			moveArrow($("#add-development-plan-btn"), "right");
			$('html, body').animate({
		        scrollTop: $(".arrow").offset().top-450
		    });
	    	$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Click this button to add a Development Plan.</p>');
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
	    	$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>If a Development Plan is added, both fields are required, but dates are not.</p>');
	    }
	}

	self.step4 = {
		run: function(){
			//explain calendar
			var datePicker = $(".development-plan .date-picker").last();
			moveArrow(datePicker, "right");
			datePicker.trigger('focus');
			$('#tutorial-content-container').html('<h3 class="text-center">Development Plans</h3><p>Click in this field to choose the due date from the calendar.  <strong>This field is not required.</strong></p>');
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

		    $('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Evaluate the employee on each attribute. For ratings of “O” or “I”, a comment is required.</p>');
		}
	}

	self.step2 = {
		run: function(){
		//explain clipboard
			moveArrow($("#attribute-1 .attribute-glyph"), "right");
			$("#attribute-1 .attribute-glyph").tooltip().mouseover();
	    	$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Hover over the green clipboard icon to see a definition of the attribute.</p>');
	    }
    	
	}

	self.step3 = {
		run: function(){
		//explain clipboard
	    	$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Click on the green clipboard to automatically copy the contents into the field if you would like to use and edit.</p>');
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
			$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Use these buttons to select the appropriate rating. Hover over each of the options to see a definition. When you select a rating, it will turn green.</p>');
		}
	}
}

//supervisors only
function supservisorsOnlyTutorial(){
	var self = this;
	self.oldContents;
	self.currSubStep = null;
	self.origState;

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
		$("#supervisor-attributes-container").css('display', self.origState);
	}

	self.step1 = {
		run: function(){
			self.origState = $("#supervisor-attributes-container").css('display');
			$("#supervisor-attributes-container").css('display', 'inline');
			$('html, body').animate({
		        scrollTop: $("#supervisor-attributes-container").offset().top-450
		    });
		    moveArrow($("#supervisor-attributes-container"), "right");

		    $('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>There are an additional set of attributes required of supervisors. For ratings of “O” or “I” a comment is required.</p>');
		}
	}

	self.step2 = {
		run: function(){
		//explain clipboard
			moveArrow($("#supervisor-attribute-1 .attribute-glyph"), "right");
			$("#supervisor-attribute-1 .attribute-glyph").tooltip().mouseover();
	    	$('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>Hover over the green clipboard icon to see a definition of the attribute.</p>');
	    }
    	
	}

	self.step3 = {
		run: function(){
			//explain clipboard
			$("#supervisor-attribute-1 .attribute-glyph").tooltip().mouseout();
	    	$('#tutorial-content-container').html('<h3 class="text-center">Supervisor Attributes</h3><p>Click on the green clipboard to automatically copy the contents into the field if you would like to use and edit.</p>');
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
			$('#tutorial-content-container').html('<h3 class="text-center">Attributes</h3><p>Use these buttons to select the appropriate rating. Hover over each of the options to see a definition. When you select a rating, it will turn green.</p>');
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

		    $('#tutorial-content-container').html('<h3 class="text-center">Overall Rating</h3><p>Provide your overall rating of the employee (consider all sections of the performance evaluation).</p>');
		}
	}

	self.step2 = {
		run: function(){
			//explain ratings
			moveArrow($("#overall-rating-section .btn-group"), "right");
			$("#overall-rating-section button[value='O']").last().tooltip().mouseover();
			$('#tutorial-content-container').html('<h3 class="text-center">Overall Rating</h3><p>Use these buttons to select the appropriate rating. Hover over each of the options to see a definition. When you select a rating, it will turn green.</p>');
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

		    $('#tutorial-content-container').html('<h3 class="text-center">Employee Comments</h3><p>The employee can add comments, if any.</p>');
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
		self.step2.next = self.step3;
		self.step3.prev = self.step2;
		self.step3.next = null;
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
	    	$('#tutorial-content-container').html('<h3 class="text-center">Print Final</h3><p>This will be the <strong>LAST</strong> step you perform.  Only once the form is completely filled out and without errors can you perform this step.  Selecting the red <strong>Create PDF</strong> button will create the PDF with the form data you entered in the form.</p>');
	    }
	}
	self.step2 = {
		run: function(){
			// trigger the pdf button and explain the menu
			$("#makePDFModal").modal('show');
			$("#makePDFModal").css('z-index', 6);
			$("#makePDFModal").css('top', $(".tutorial-info-box").position().top+$(".tutorial-info-box").height()+80);
			$(".modal-backdrop").css('z-index', 5);
			$(".modal-backdrop").css('display', 'none');

			$(".arrow").attr('src', 'images/greenArrow.png');
			$(".arrow").css('left', $(".tutorial-info-box").offset().left - $(".arrow").width());
	    	$(".arrow").css('top', $(".tutorial-info-box").offset().top+$(".tutorial-info-box").height()+100);
	    	$('#tutorial-content-container').html('<h3 class="text-center">Create, Print, and Save the PDF</h3><p>Now that you have completed entering the form data and your employee has reviewed it, it is time to copy the form/data to a PDF document.</p><p>The <strong>Print Final</strong> button will generate a PDF that will be populated with the form data you entered.  A signature page will be added to the end of the document.</p><p>The PDF created will open in a new window.  From that window you can do a final review of the PDF before saving and/or printing.</p><p>Use standard file->print method to PRINT the PDF in the new window.</p>');	
	    }
	}
	self.step3 = {
		run: function(){
			// trigger the pdf button and explain the menu
	    	$('#tutorial-content-container').html('<h3 class="text-center">Create, Print, and Save the PDF</h3><p>You can <strong>SAVE</strong> the PDF from the new window using standard file->save but you will not be able to make future edits to the PDF. You can click the <strong>SAVE</strong> button before creating the PDF in order to save the file for future edits.  If you are unsure about how the save process works, simply go to the “Save File For Editing” tutorial.</p><p><span class="warning text-center">WARNING</span><br>Please be aware that creating a PDF <strong>DOES NOT SAVE</strong> the information currently in the form for future editing. </p>');	
	    	$("#tutorial-next-btn").removeClass('btn-primary');
	    	$("#tutorial-next-btn").removeClass('pull-right');
	    	$("#tutorial-next-btn").addClass('btn-warning');
	    	$("#tutorial-next-btn").html("Finish");
	    	$("#tutorial-back-btn").css('display', 'none');
	    }
	}
}

function createEmployeePDF(){
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
			moveArrow($("#make-employee-pdf-btn"), "up");

	    	//initial step
	    	$('#tutorial-content-container').html('<h3 class="text-center">Print for Review</h3><p>This will create a PDF version of the form that you can share with your employee if you prefer to have your employee review a hard copy.  It will create a PDF in the same way as the Create PDF button except no Signature Page will be generated.</p>');
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
			$('#tutorial-content-container').html('<h3 class="text-center">Opening</h3><p>The blue <strong>Open</strong> button allows you to open a file you previously saved from this program.</p>');
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
	    	$('#tutorial-content-container').html('<h3 class="text-center">Opening</h3><p>Browse your computer to retrieve your previously saved file.</p><p>The default file location is in the <strong>Downloads</strong> folder under your profile on the computer you saved it to.</p><p>Select the file and click <strong>Open</strong>.  It will read the file and prepopulate the form with all the information you previously saved.</p><p><span class="warning text-center">WARNING</span><br>You can only open files that were generated by this program.</p>');
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

	}

	self.step1 = {
		run: function(){
			moveArrow($("#save-btn"), "up");

		    //initial step
		    $('#tutorial-content-container').html('<h3 class="text-center">Saving</h3><p>The green <strong>Save</strong> button allows you to save the data you entered on the form so you can continue working at a later time.</p><p>Clicking <strong>Save</strong> will automatically download the data for you to a default file location in the Downloads folder.</p><p>The default file name is formData.txt</p><p>It is advised that you save and rename your file for each Performance Evaluation created. See “Saving your documents” in the FAQ.</p>');
		}
	}

	self.step2 = {
		run: function(){

		    //initial step
		    $('#tutorial-content-container').html('<h3 class="text-center">Saving</h3><p>This web form is developed to work best with Firefox and Chrome browsers.  Since the file is downloaded by the browser, the way the download is handled varies slightly depending upon your browser.  Details on downloads are located as video at <strong>SAVE</strong> button</p>');
		}
	}

	self.step3 = {
		run: function(){
		    //initial step
		    $('#tutorial-content-container').html('<h3 class="text-center">Saving</h3><p>If you are starting a new form, the data will save as formData.txt.  If you are working on form you opened, the data will save with the same name, but an index attached.  (i.e. sameName.txt (1) then sameName.txt(2)).  If you download multiple files they will be index (i.e. formData(1).txt, formData(2).txt etc.).  If you are saving for multiple employees or multiple versions it is highly recommended you rename these files in order to make it easier to keep track and store them for later use.  If you are not sure how to rename a file, view “How to Rename a File” in the FAQ.</p>');
		}
	}

	self.step4 = {
		run: function(){

		    //initial step
		    $('#tutorial-content-container').html('<h3 class="text-center">Saving</h3><p><span class="warning text-center">FILE SAVE WARNING</span><br>Using File->Save from the browser menu is <strong>NOT</strong> the correct method to save the form data, you must use the green <strong>Save</strong> button.</p>');
		}
	}

	self.step5 = {
		run: function(){

		    //initial step
		    $('#tutorial-content-container').html('<h3 class="text-center">Saving</h3><p><span class="warning text-center">ENCRYPTION WARNING</span><br>When you download the data file it is encrypted for security. Do not attempt to alter it outside of this program or you will ruin the file. Only this program can open the data file you will download in a useable format.</p>');
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
		    $('#tutorial-content-container').html('<h3 class="text-center">Sharing</h3><p>You will share the form with another employee the same way you would share any other file. You can share it via email, google drive, or any other way you wish. Just remember not to alter it outside of this program. The next step offers a template you can use to send to the employee if they have never used this form before.  It will help get them started.</p>');
		}
	}

	self.step2 = {
		run: function(){
		    $('#tutorial-content-container').html('<h3 class="text-center">Sharing</h3><p>Share the file however you wish, email, cloud storage etc.  You can send the following template to provide the employee with instructions:</p><div class="share-template"><p><h4>Steps to open form</h4><br>Step 1 ) Open a copy of the file shared with you.<br>Step 2 ) Proceed to this link: <a href="http://terry.it.utsa.edu/www1/hr/compensation/PerformanceEvaluation/form/">http://terry.it.utsa.edu/www1/hr/compensation/PerformanceEvaluation/form/</a><br>Step 3) Once there, click on the tutorial button in the top right hand corner to learn about the form, including how to open the file provided.</p></div>');
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