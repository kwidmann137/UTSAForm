var developmentPlanSection = '<div class="row development-plan" id="development-plan-%num%"> <div class="col-xs-10"> <p class="development-plan-header">Training/Skill %num%</p> </div> <div class="col-xs-2"> <button class="btn btn-danger btn-sm pull-right section-close-btn development-plan-close-btn" onclick="removeSection(this);"><span class="glyphicon glyphicon-trash"></span> </button> </div> <div class="col-xs-10"> <textarea class="development-plan-textarea-1 form-control" id="development-plan-%num%-text-area-1" placeholder="Training/Skills Required"></textarea> </div> <div class="input-group input-append col-xs-2 date dateRangePicker"> <input type="text" class="form-control development-plan-due-date date-picker" name="date" placeholder="Due/Compl. Date..."><span class="input-group-addon add-on"><span class="glyphicon glyphicon-calendar"></span></span> </div> <div class="col-xs-10"> <textarea class="development-plan-textarea-2 form-control" id="development-plan-%num%-text-area-2" placeholder="Comments"></textarea> </div> <div class="col-xs-2"> </div></div>'

var numOfDevelopmentPlans = 0;

function addDevelopmentPlan(){
	var formattedSection = developmentPlanSection.replace(/%num%/g, $(".development-plan").length+1);
    $('#development-plans-container').append(formattedSection);
    // updateDynamicallyAddedTextAreas();
}