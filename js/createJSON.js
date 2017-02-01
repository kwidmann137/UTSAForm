var formData = {};

function createJSON(){

	formData = {};

	// capture review period info
	$('.review-period-section input').each(function(){
		var field = this.id;
		var input = $(this).val();
		
		formData[field] = input;
	});

	// capture employee info
	$('.employee-info-section input').each(function(){
		var field = this.id;
		var input = $(this).val();
		
		formData[field] = input;
	});

	// capture job functions
	formData['numOfEssentialFunctions'] = $(".job-function").length;
	if($(".job-function").length > 0){
		formData['jobFunctions'] = [];
		$('.job-function').each(function(){
			var jobFunction = {}
			jobFunction['textareas'] = []
			$('textarea', this).each(function(){
				var item = {};
				var field = $(this).attr('id');
				var input = $(this).val();
				if(typeof input === 'undefined'){
					input = ''/*none*/;
				}
				item[field] = input;
				jobFunction.textareas.push(item);
			});
			var input = $('.selected-rating', this).val();
			if(typeof input !== 'undefined'){
				jobFunction['selectedRating'] = input;
			}else{
				jobFunction['selectedRating'] = ''/*none*/;
			}
			formData.jobFunctions.push(jobFunction);
		});
	}

	// capture projects
	formData['numOfProjects'] = $(".project").length;
	if($(".project").length > 0){
		formData['projects'] = [];
		$('.project').each(function(){
			var project = {};
			project['textareas'] = [];
			$('textarea', this).each(function(){
				var item = {};
				var field = $(this).attr('id');
				var input = $(this).val();
				if(typeof input === 'undefined'){
					input = ''/*none*/;
				}
				item[field] = input;
				project.textareas.push(item);
			});
			var input = $('.selected-rating', this).val();
			if(typeof input !== 'undefined'){
				project['selectedRating'] = input;
			}else{
				project['selectedRating'] = ''/*none*/;
			}

			var dueDate = $('.project-due-date', this).val();
			if(dueDate !== ""){
				project['dueDate'] = dueDate;
			}else{
				project['dueDate'] = ''/*none*/;
			}
			formData.projects.push(project);
		});
	}

	//capture development plans
	formData['numOfDevelopmentPlans'] = $(".development-plan").length;
	if($(".development-plan").length > 0){
		formData['developmentPlans'] = [];
		$('.development-plan').each(function(){
			var developmentPlan = {};
			developmentPlan['textareas'] = [];
			$('textarea', this).each(function(){
				var item = {};
				var field = $(this).attr('id');
				var input = $(this).val();
				if(typeof input === 'undefined'){
					input = ''/*none*/;
				}
				item[field] = input;
				developmentPlan.textareas.push(item);
			});
			var dueDate = $('.development-plan-due-date', this).val();
			if(dueDate !== ""){
				developmentPlan['dueDate'] = dueDate;
			}else{
				developmentPlan['dueDate'] = ''/*none*/;
			}
			var startDate = $('.development-plan-start-date', this).val();
			if(startDate !== ""){
				developmentPlan['startDate'] = startDate;
			}else{
				developmentPlan['startDate'] = ''/*none*/;
			}
			var endDate = $('.development-plan-end-date', this).val();
			if(endDate !== ""){
				developmentPlan['endDate'] = endDate;
			}else{
				developmentPlan['endDate'] = ''/*none*/;
			}
			formData.developmentPlans.push(developmentPlan);
		})
	}

	//capture attributes
	formData['attributes'] = [];
	$('.attribute').each(function(){
		var item = {};
		var attribute = $('label', this).text();
		var comment = $('textarea', this).val();
		if(typeof comment === 'undefined'){
			comment = ''/*none*/;
		}
		item['attribute'] = attribute;
		item['comment'] = comment;
		var rating = $('.selected-rating', this).val();
		if(typeof rating !== 'undefined'){
			item['rating'] = rating;
		}else{
			item['rating'] = ''/*none*/;
		}
		formData.attributes.push(item);
	})

	//caputre supervisor attributes
	if($('.selected-supervisor-status').val() === 'Yes'){
		formData['isSupervisor'] = 'yes';
		formData['supervisorAttributes'] = [];
		$('.supervisor-attribute').each(function(){
			var item = {};
			var attribute = $('label', this).text();
			var comment = $('textarea', this).val();
			if(typeof comment === 'undefined'){
				comment = ''/*none*/;
			}
			item['attribute'] = attribute;
			item['comment'] = comment;
			var rating = $('.selected-rating', this).val();
			if(typeof rating !== 'undefined'){
				item['rating'] = rating;
			}else{
				item['rating'] = ''/*none*/;
			}
			formData.supervisorAttributes.push(item);
		});
	}else{
		if($('.selected-supervisor-status').length === 1){
			formData['isSupervisor'] = 'no';
		}else{
			formData['usSupervisor'] = '';
		}
		formData['supervisorAttributes'] = '';
	}

	//capture overall rating
	formData['overallRating'] = {};
	var overallComment = $('textarea', '#overall-rating-section').val();
	if(typeof overallComment === 'undefined'){
		overallComment = ''/*none*/;
	}
	formData.overallRating['overallComment'] = overallComment;
	var overallRating = $('.selected-rating', "#overall-rating-section").val();
	if(typeof overallRating !== 'undefined'){
		formData.overallRating['overallRating'] = overallRating;
	}else{
		formData.overallRating['overallRating'] = ''/*none*/;
	}

	// capture position type
	var positionType = $('.selected-position-type', '#position-class-section').val();
	if(typeof positionType !== 'undefined'){
		formData['positionType'] = positionType;
	}else{
		formData['positionType'] = ''/*none*/;
	}

	var employeeComment = $('textarea', "#employee-comments-section").val();
	if(typeof employeeComment === 'undefined'){
		employeeComment = ''/*none*/;
	}
	formData['employeeComment'] = employeeComment;
}