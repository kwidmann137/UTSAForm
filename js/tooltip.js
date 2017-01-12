var attributeDefinitions = {
	'TEAMWORK' : 'Supportive of team/departmental goals; willingly helps other by providing information, training, or work assistance; demonstrates flexibility in responding to changing work conditions, or unexpected issues that arise.',
	'SERVICE ORIENTATION' : 'Consistently demonstrates concern/courtesy to coworkers and customers; follows through on commitments to customers; works to improve level of service',
	'COMMUNICATION' : 'Listens effectively; responds clearly and directly; prepares clear concise reports, records or documentation; gives or explains instructions and ideas to other effectively',
	'ADAPTABILITY' : 'Ability to adjust to a variety of situations/issues; exhibits flexibility to changing work demands',
	'INNOVATION, CREATIVITY & INITIATIVE' : 'Works independently , willing to learn new skills, processes; engages in creative problem solving, open and receptive to new ideas; integrates change and makes appropriate suggestions (based on work experience) to improve work area/flow or processes; proactively works to identify and address work problems or issues',
	'MOTIVATION' : 'Enthusiastically assumes new tasks, responsibilities; takes personal responsibility for departmental success; works steadily and actively; demonstrates positive attitude toward self and others',
	'JOB KNOWLEDGE' : 'Applies technical and procedural know-how to "get the job done"; demonstrates understanding and mastery of the process, methods, systems and/or procedures; keeps informed of the latest developments in area of specialty',
	'JUDGEMENT' : 'Analyzes situations; uses problem solving skills; makes appropriate decisions consistent with the situation; obtains and evaluates pertinent information to determine source of and alternative solutions to problem',
	'QUANTITY & PRODUCTIVITY' : 'Accommodates multiple demands for commitment of time, energy and resources; develops and/or follows work procedures; handles information flow; organizes work assignments for optimum results; manages time and priorities appropriately',
	'QUALITY' : 'Demonstrates competence, accuracy, thoroughness, and reliability'
};

var supervisorAttributeDefinitions = {
	'STAFF DEVELOPMENT' : 'Promotes staff development by providing detailed instructions/training, and timely, honest feedback (e.g., completes timely performance appraisals on employees); accurately assesses the needs and strengths of others; recognizes employee successes; provides challenging assignments as opportunities for employees to learn and grow',
	'DECISION MAKING' : 'Knows when to refer matters to the next level; determines priorities and acts within the agreed upon time frame; develops alternatives with rationale and consequences for each course of action; uses the values and principles of the University to determine what is important, and to guide actions; effectively identifies solutions and solves problems',
	'LEADERSHIP' : 'Effectively conveys vision of unit goals; motivates employees to embrace the vision and contribute to unit/department success; serves as positive role model for employees; visibly supports University goals and mission and demonstrates dedication to the success of the organization; effectively addresses conflicts; facilitates communication; fosters productive work environment',
	'PROMOTES DIVERSITY' : 'Creates work environment which respects diversity and welcomes new ideas; proactively works to achieve/maintain diverse workforce',
	'COMPLICANCE, ACCOUNTABILITY &  RISK MANAGEMENT' : 'Has completed a formal risk assessment of department, identifying all known high risk areas, and made recommendations for improvement/change along with an implementation plan; maintains ethical management practices for self and staff; ensures compliance of University & state/federal practices, policies and laws; protects proprietary information; ensures proper use of organization assets and the accuracy of records and reports.'
};

var attributeGlyph = '<div class="attribute-glyph-div %type%" data-toggle="tooltip" title="%title%" onClick="copyTooltip(this);"> <span class="glyphicon glyphicon-copy attribute-glyph"></span> </div>';

$(function(){
    $('.attribute').each(function(){
    	var attribute = $('label', this).text();
    	var formattedGlyph = attributeGlyph.replace(/%title%/, attributeDefinitions[attribute]);
    	formattedGlyph = formattedGlyph.replace(/%type%/, 'employee-attribute-glyph');
    	$('.attribute-label-div', this).append(formattedGlyph);
    })

    $('.supervisor-attribute').each(function(){
    	var attribute = $('label', this).text();
    	var formattedGlyph = attributeGlyph.replace(/%title%/, supervisorAttributeDefinitions[attribute]);
    	formattedGlyph = formattedGlyph.replace(/%type%/, 'supervisor-attribute-glyph');
    	$('.attribute-label-div', this).append(formattedGlyph);
    })

    $(document).tooltip({
    });
});

function addButtonToolTips(){
    $('button[value="O"]').each(function(){
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('title', 'Employee consistently performs above that which is required. In addition, he/she may often make unique contributions and achieve exceptional accomplishments.');
    });
    $('button[value="SP-"]').each(function(){
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('title', 'Employee often meets the requirements of the job. However sometimes their performance is in need of improvement.  (This rating may also be used for employees new in the position who have not yet acquired/demonstrated core competencies or may need some supervision or instruction).');
    });
    $('button[value="SP"]').each(function(){
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('title', 'Employee is a strong solid performer whose performance consistently meets the requirements of the job. ');
    });
    $('button[value="SP+"]').each(function(){
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('title', 'Employee is a strong solid performer whose performance consistently meets the requirements of the job. Occasionally, this employee may exceed expectations of the job.');
    });
    $('button[value="I"]').each(function(){
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('title', 'While this employee may meet expectations some of the time, the employee needs improvement in many of the significantly important requirements of the job or goals established for the year.  A corrective action plan may be necessary to address performance and/or behavioral deficiencies.');
    });
}