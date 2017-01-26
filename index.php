<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Performance Evaluation</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/createJSON.js"></script>
    <script type="text/javascript" src="js/save.js"></script>
    <script type="text/javascript" src="js/open.js"></script>
    <script type="text/javascript" src="js/makePDF.js"></script>
    <script type="text/javascript" src="js/makeEmplPDF.js"></script>
    <script type="text/javascript" src="js/addEssentialFunction.js"></script>
    <script type="text/javascript" src="js/addProject.js"></script>
    <script type="text/javascript" src="js/addDevelopmentPlan.js"></script>
    <script type="text/javascript" src="js/copyTooltip.js"></script>
    <script type="text/javascript" src="js/removeSection.js"></script>
    <script type="text/javascript" src="js/datepicker.js"></script>
    <script type="text/javascript" src="js/tooltip.js"></script>
    <script type="text/javascript" src="js/ratingButton.js"></script>
    <script type="text/javascript" src="js/validateForm.js"></script>
    <script type="text/javascript" src="js/tutorial.js"></script>
    <script type="text/javascript" src="js/general.js"></script>
    <script type="text/javascript" src="js/textareaResize.js"></script>
    <script type="text/javascript" src="js/supervisorAttributes.js"></script>
    <script type="text/javascript" src="js/video.js"></script>
    <script type="text/javascript" src="bootstrap/addons/bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome/css/font-awesome.min.css">
</head>
<body>
    <div class="top-bar row">
        <div class="col-xs-12 text-right">
            <a href="FAQ/" target="_blank" type="button" class="btn btn-warning btn-md menu-btn" >FAQ</a>
            <button type="button" class="btn btn-info btn-md menu-btn" onclick="startTutorial();" >Tutorial</button>
            <button type="button" class="btn btn-primary btn-md menu-btn" data-toggle="modal" data-target="#openModal" id="open-btn">
              Open
            </button>
            <button type="button" class="btn btn-success btn-md menu-btn" onclick="save();" id="save-btn">Save</button>
            <button type="button" class="btn btn-secondary btn-md menu-btn" onclick="validateEmplPDF();" id="make-employee-pdf-btn">Print for Review</button>
            <button type="button" class="btn btn-danger btn-md menu-btn" onclick="validatePDF();" id="make-pdf-btn">Print Final</button>
        </div>
    </div>
    <button class="tutorial-menu-show-btn btn btn-danger"><i class="fa fa-bars show-icon" aria-hidden="true"></i></i></button>
    <div class="tutorial-side-menu row">
        <div class="col-xs-12">
            <button class="tutorial-menu-close-btn btn btn-danger"><i class="fa fa-times close-icon" aria-hidden="true"></i></button>
            <h1 class="tutorial-menu-header">Tutorials:</h1>
             <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.welcome.start();">Welcome to the tutorial</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.employeeInfo.start();">Employee Information</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.jobs.start();">Job Functions</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.projects.start();">Projects</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.developmentPlans.start();">Development Plans</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.attributes.start();">Attributes</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.supervisorAttributes.start();">Supervisor Attributes</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.overallRating.start();">Overall Rating</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.employeeComment.start();">Employee Comment</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial();  tutorial.save.start();">Save File For Editing</button>
             <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.open.start();">Open A Saved File</button>
             <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.createEmployeePDF.start();">Print for Review</button>
            <button class="btn tutorial-item-btn btn-primary" onclick="cleanTutorial(); tutorial.createPDF.start();">Print Final</button>
            <button class="btn btn-danger" id="tutorial-close-btn" onclick="closeTutorial();">Exit Tutorial</button>
        </div>
    </div>`
    <div class="container">
        <div class="form-header row">
            <div class="col-xs-12 text-center"><img class="img-responsive logo" src="images/UTSA_HRLogo_Formal.png"></div>
            <div class="col-xs-12 text-center">
                <!-- <p>The Univeristy of Texas at San Antonio</p> -->
                <h2 class="page-header">NON-FACULTY PERFORMANCE EVALUATION REVIEW</h2>
            </div>
            <div class="col-xs-2"></div>
        </div>
        <div class="form">
            <div class="row">
                <div class="col-xs-12 text-center">
                    <h4 class="browser-warning">Recommended Browsers are Chrome and FireFox.  IE is not supported.</h4>
                </div>
            </div>
            <div class=" row form-group text-center review-period-section">
                <div class="col-xs-6 review-period-section">
                    <label class="review-period-label">Review Period From: 2/1/&nbsp;</label>
                    <div class="row year-input">
                        <div class="col-xs-12">
                            <input class="form-control" type="text" name="review_period_from" id="review_period_from">
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 review-period-section">
                    <label class="review-period-label">&nbsp;&nbsp;To: 1/31/&nbsp;</label>
                    <div class="row year-input">
                        <div class="col-xs-12">
                            <input class="form-control" type="text" name="review_period_to" id="review_period_to">  
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group text-center row employee-info-section">
                <div class="col-xs-3">
                    <input type="text" class="form-control" id="employee_name" placeholder="Employee Name">
                </div>
                <div class="col-xs-3">
                    <input type="text" class="form-control" id="employee_title" placeholder="Employee Title">
                </div>
                <div class="col-xs-3">
                    <input type="text" class="form-control" id="employee_id" placeholder="Employee ID">
                </div>
                <div class="col-xs-3">
                    <input type="text" class="form-control" id="job_code" placeholder="Job Code">
                </div>
            </div>
            <div class="row">
               <div class="col-xs-0 col-sm-1 col-md-2"></div>
                <div class="col-xs-12 col-sm-10 col-md-8">
                    <p class="certification-rule text-center">Rule 30501 of the Rules and Regulations of the U.T. System Board of Regents requires all employees (administrative, faculty, and classified) receive an annual evaluation during the past fiscal year.</p>
                </div>
                <div class="col-xs-0 col-sm-1 col-md-2"></div>
            </div>
            <div class="row">
               <div class="col-xs-0 col-sm-1 col-md-2"></div>
                <div class="col-xs-12 col-sm-10 col-md-8">
                    <p class="comments-warning text-center">Comment are required for <u>all</u> ratings (in each section) of Outstanding "O" or Improvement Needed "I".</p>
                    <p class="comments-warning text-center">Ratings of SP (SP-, SP, SP+) do not <u>require</u> comments.</p>
                </div>
                <div class="col-xs-0 col-sm-1 col-md-2"></div>
            </div>
            <div class="form-group row" id="essential-job-functions-section">
                <div class="col-xs-12">
                    <h3>SECTION I. ESSENTIAL JOB FUNCTIONS/RESPONSIBILITIES</h3>
                    <p class="section-description essential-job-functionssection-description">List the essential job functions (major)/responsibilites of the job for this employee.  It defines the job (along with the reason it exists).  Typically this would include 5-8 key essential job functions and can be found in the job or position description.</p>
                </div>
                <div class="col-xs-12 essential-job-functions-container" id="essential-job-functions-container"></div>
                <div class="col-xs-12" id="add-essential-function-btn-div">
                    <button id="add-essential-function-btn" type="button" class="btn btn-primary btn-md pull-right" onclick="addEssentialFunction();">Add Essential Function</button>
                </div>

            </div>
            <div class="form-group row" id="projects-section">
                <div class="col-xs-12" id="projects-section-description">
                    <h3>SECTION II. PROJECTS</h3>
                    <p class="section-description projects-section-description">List the special projects that have been assigned to this employee for the year (typically major projects would not exceed 3-4).  Some employees may not have special projects assigned at all.</p>
                </div>
                <div class="col-xs-12 projects-container" id="projects-container"></div>
                <div class="col-xs-12">
                    <button class="btn btn-primary btn-md pull-right" id="add-project-btn" onclick="addProject();">Add Project</button>
                </div>
            </div>
            <div class="form-group row" id="development-plans-section">
                <div class="col-xs-12 development-plans-description">
                    <h3>SECTION III. DEVELOPMENT PLANS</h3>
                    <p class="section-description development-plans-section-description"><strong>Employees are always encouraged to actively engage in self development activities.</strong>  Identify specific work assignments, training (courses/classes, skills, books, magazines, seminars or CEU's) designed to increase the individual's effectiveness in their present job and/or to prepare for future job assignments.</p>
                    <p><strong>** While this section will not have a rating, it should be a factor used to determine overall performance. **</strong></p>
                    <p><strong class="instruction">** Comments are required **</strong></p>
                </div>
                <div class="col-xs-12 development-plans-container" id="development-plans-container">

                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button class="btn btn-primary btn-md pull-right" id="add-development-plan-btn" onclick="addDevelopmentPlan();">Add Development Plan</button>
                    </div>
                </div>
            </div>
            <div class="form-group row" id="attributes-section">
                <div class="col-xs-12 attributes-description">
                    <h3>SECTION IV. ATTRIBUTES</h3>
                    <p class="section-description attributes-description">
                        <strong>To be completed for all employees, including supervisors</strong>
                    </p>
                    <p class="instruction">You can hover over the clipboard icon (<span class="glyphicon glyphicon-copy attribute-glyph"></span>) by each attribute to see a description.  If you choose to use the Attribute description and edit, you can click on the clipboard icon (<span class="glyphicon glyphicon-copy attribute-glyph"></span>) and proceed with edits.</p>
                </div>
                <div class="col-xs-12 attributes-container" id="attributes-container">
                    <div class="row attribute" id="attribute-1">
                        <div class="col-xs-2 attribute-label-div">
                            <label>TEAMWORK</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control" placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-2">
                        <div class="col-xs-2 attribute-label-div">
                            <label>SERVICE ORIENTATION</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-3">
                        <div class="col-xs-2 attribute-label-div">
                            <label>COMMUNICATION</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                           </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-4">
                        <div class="col-xs-2 attribute-label-div">
                            <label>ADAPTABILITY</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-5">
                        <div class="col-xs-2 attribute-label-div">
                            <label>INNOVATION, CREATIVITY &amp; INITIATIVE</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-6">
                        <div class="col-xs-2 attribute-label-div">
                            <label>MOTIVATION</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-7">
                        <div class="col-xs-2 attribute-label-div">
                            <label>JOB KNOWLEDGE</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-8">
                        <div class="col-xs-2 attribute-label-div">
                            <label>JUDGEMENT</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-9">
                        <div class="col-xs-2 attribute-label-div">
                            <label>QUANTITY &amp; PRODUCTIVITY</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-10">
                        <div class="col-xs-2 attribute-label-div">
                            <label>QUALITY</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row" id="supervisor-attributes-section">
                <div class="col-xs-12">
                    <h3>SECTION V. SUPERVISORS ONLY</h3>
                    <p class="section-description supervisor-attributes-description">
                        Please compelete this page of attributes (in addition to the previous page) for employees.  Supervisor for purposes of this exercise is defined as those who have the responsibility of supervising others, whether in a formal capacity (e.g., by title) or informal.  Supervisors will be rated on 15 attributes (total).
                    </p>
                </div>
                <div class="col-xs-12 text-center supervisor-question-div">
                    Is this employee a supervisor? <button class="btn supervisor-status-btn" type="button" name="supervisor-yes" value="Yes">Yes</button><button class="btn supervisor-status-btn" type="button" name="supervisor-no" value="No">No</button>
                </div>
                <div class="col-xs-12 attributes-container" id="supervisor-attributes-container">
                    <div class="row supervisor-attribute" id="supervisor-attribute-1">
                        <div class="col-xs-2 attribute-label-div">
                            <label>STAFF DEVELOPMENT</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control" placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row supervisor-attribute" id="supervisor-attribute-2">
                        <div class="col-xs-2 attribute-label-div">
                            <label>DECISION MAKING</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row supervisor-attribute" id="supervisor-attribute-3">
                        <div class="col-xs-2 attribute-label-div">
                            <label>LEADERSHIP</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row supervisor-attribute" id="supervisor-attribute-4">
                        <div class="col-xs-2 attribute-label-div">
                            <label>PROMOTES DIVERSITY</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                    <div class="row supervisor-attribute" id="supervisor-attribute-5">
                        <div class="col-xs-2 attribute-label-div">
                            <label>COMPLICANCE, ACCOUNTABILITY &amp;  RISK MANAGEMENT</label>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                                <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row" id="overall-rating-section">
                <div class="col-xs-12 overall-rating-description">
                    <h3>SECTION VI. OVERALL RATING</h3>
                    <p class="section-description">When providing comments/summary, consider the entire performance evaluation</p>
                </div>
                <div class="col-xs-9">
                    <textarea class="form-control"  placeholder="Performance Summary/Manager's Comments -- REQUIRED"></textarea>
                </div>
                 <div class="col-xs-3" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                    <div class="btn-group">
                        <button type="button" class="btn btn-default rating-btn left-btn" value="I">I</button>
                        <button type="button" class="btn btn-default rating-btn" value="SP-">SP-</button>
                        <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                        <button type="button" class="btn btn-default rating-btn" value="SP+">SP+</button>
                        <button type="button" class="btn btn-default rating-btn" value="O">O</button>
                    </div>
                </div>
            </div>
<!--             <div class="form-group row" id="position-class-section">
                <div class="col-xs-8">
                    <h4>According to the <a href="http://www.utsa.edu/hr/compensation/index.html" data-target="_blank">UTSA's pay plan</a>, this position is classified as a/an:</h4>
                </div>
                <div class="col-xs-4">
                    <div class="btn-group position-btn-group row">
                        <button type="button" class="btn btn-default col-xs-12 text-center position-btn" value="A&P Exempt">A&amp;P Exempt</button>
                        <button type="button" class="btn btn-default  col-xs-12 text-center position-btn" value="Classified Exempt">Classified Exempt</button>
                        <button type="button" class="btn btn-default  col-xs-12 text-center position-btn" value="Classified Non Exempt">Classified Non Exempt</button>
                    </div>
                </div>
            </div> -->
            <div class="form-group row" id="employee-comments-section">
                <div class="col-xs-12 employee-comments-description">
                    <h3>SECTION VII. EMPLOYEE COMMENTS</h3>
                    <p class="section-description">Enter below any comments you wish to make about your appraisal</p>
                </div>
                <div class="col-xs-12">
                    <textarea class="form-control"  placeholder="Employee comments..."></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <p class="warning">Send a copy of the completed form with all required signatures to: UTSA – Office of Human Resources: Attention HR Records or scan and email to:<a href="mailto:HR-Records@utsa.edu">HR-Records@utsa.edu</a></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for opening -->
    <div class="modal" id="openModal" tabindex="-1" role="dialog" aria-labelledby="Open" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Open File</h4>
          </div>
            <div class="modal-body text-center">
                <form enctype="multipart/form-data" action="php/upload.php" method="POST" id="upload-Form">
                    <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
                    <input  name="userfile" type="file" id="userfile"/>
                    <br>
                    <input  class="btn btn-success btn-md" type="button" name="uploadFormBtn" value="Open" id="uploadFormBtn" onclick="openFormData();"/>
                </form>
                <br>
                <p>If you are unable to open the form, please select your browser to see step by step instructions on how to properly open the file.  <strong>You can only open a file you previously saved with this program</strong>.</p>
                <div class="text-center">
                    <button class="btn btn-md btn-warning" onclick="playVideo(this);">FireFox</button>
                    <button class="btn btn-md btn-info" onclick="playVideo(this);">Chrome</button>
                </div>
                <div class="video-container">
                    
                </div>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for asking to delete -->
    <div class="modal" id="promptToDeleteModal" tabindex="-1" role="dialog" aria-labelledby="Warning" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title text-center makePDFModalHeader" id="myModalLabel">Warning</h4>
          </div>
            <div class="modal-body">
                <p>Are you sure you want to delete this item?</p>
          </div>
          <div class="modal-footer">
                <button class="btn btn-md btn-success pull-left" id="delete-btn-no">No</button>
                <button class="btn btn-md btn-danger pull-right" id="delete-btn-yes">Yes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for asking to save-->
    <div class="modal" id="promptToSaveModal" tabindex="-1" role="dialog" aria-labelledby="Warning" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title text-center makePDFModalHeader" id="myModalLabel">Warning</h4>
          </div>
            <div class="modal-body">
                <p>Saving this form will save the file on your local computer.  You can access the file via the "File Explorer" in order to move, or rename the file.  Renaming is highly suggested so you know which employee the form is for.<br><br>If you are unsure of how to do this please chose your browser below to watch a video with step by step instructions.</p>
                <div class="text-center">
                    <button class="btn btn-md btn-warning" onclick="playVideo(this);">FireFox</button>
                    <button class="btn btn-md btn-info" onclick="playVideo(this);">Chrome</button>
                </div>
                <div class="video-container">
                    
                </div>
          </div>
          <div class="modal-footer">
            <div class="text-center">
                <button class="btn btn-md btn-success" id="save-btn-yes">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for creating PDF and prompting to save -->
    <div class="modal" id="makePDFModal" tabindex="-1" role="dialog" aria-labelledby="Warning" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title text-center makePDFModalHeader" id="myModalLabel">Warning</h4>
          </div>
            <div class="modal-body">
                <p>Please be aware that <strong>Generating a PDF</strong> does not save the information currently in the form. If you would like to <strong>have this data in an editable format</strong> please click <strong>Save</strong> below to save the form data before generating your PDF, otherwise just click Generate PDF.</p>
                <div class="text-center">
                    <button class="btn btn-md btn-success" onclick="save();">Save</button>
                    <button class="btn btn-md btn-danger" onclick="generatePDF();">Generate PDF</button>
                </div>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for creating Employee copy of PDF and prompting to save -->
    <div class="modal" id="makeEmplPDFModal" tabindex="-1" role="dialog" aria-labelledby="Warning" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title text-center makePDFModalHeader" id="myModalLabel">Warning</h4>
          </div>
            <div class="modal-body">
                <p>Please be aware that <strong>Generating a PDF</strong> does not save the information currently in the form. If you would like to <strong>have this data in an editable format</strong> please click <strong>Save</strong> below to save the form data before generating your PDF, otherwise just click <strong>Generate Employee PDF</strong>.</p>
                <div class="text-center">
                    <button class="btn btn-md btn-success" onclick="save();">Save</button>
                    <button class="btn btn-md btn-danger" onclick="generateEmplPDF();">Generate Employee PDF</button>
                </div>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for errors when attempting to create PDF -->
    <div class="modal" id="makePDFErrorModal" tabindex="-1" role="dialog" aria-labelledby="Warning" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title text-center makePDFModalHeader" id="myModalLabel">Warning</h4>
          </div>
            <div class="modal-body">
            <!-- will be filled in by js -->
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>

    <div class="tutorial-background"></div>
</body>
</html>