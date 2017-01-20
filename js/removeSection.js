function removeSection(ele){
	$('#promptToDeleteModal').modal('show');
	$('#delete-btn-yes').unbind().on('click', function(){
		deleteElement(ele);
		$('#promptToDeleteModal').modal('hide');
		return;
	});
	$('#delete-btn-no').unbind().on('click', function(){
		$('#promptToDeleteModal').modal('hide');
		return;
	});
}


function deleteElement(ele){
	if($(ele).hasClass('function-close-btn')){
		var id = $(ele).parents('.job-function').attr('id');
		$('#'+id).remove();
		var currFunction = 1;
		$('.job-function').each(function(){
			$(this).attr('id', 'job-function-'+currFunction);
			$('.job-function-header', this).text("Job Function "+currFunction);
			currFunction++
		})
		numOfEssentialFunctions--;
	}else if($(ele).hasClass('project-close-btn')){
		var id = $(ele).parents('.project').attr('id');
		$('#'+id).remove();
		var currProject = 1;
		$('.project').each(function(){
			$(this).attr('id', 'project-'+currProject);
			$('.project-header', this).text("Project "+currProject);
			currProject++
		})
		numOfProjects--;
	}else if($(ele).hasClass('development-plan-close-btn')){
		var id = $(ele).parents('.development-plan').attr('id');
		$('#'+id).remove();
		var currDevelopmentPlan = 1;
		$('.development-plan').each(function(){
			$(this).attr('id', 'development-plan-'+currDevelopmentPlan);
			$('.development-plan-header', this).text("Training/Skill "+currDevelopmentPlan);
			currDevelopmentPlan++
		})
		numOfDevelopmentPlans--;
	}
}