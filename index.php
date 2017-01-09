<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/createJSON.js"></script>
    <script type="text/javascript" src="js/save.js"></script>
    <script type="text/javascript" src="js/open.js"></script>
    <script type="text/javascript" src="js/makePDF.js"></script>
    <script type="text/javascript" src="js/addEssentialFunction.js"></script>
    <script type="text/javascript" src="js/addProject.js"></script>
    <script type="text/javascript" src="js/addDevelopmentPlan.js"></script>
    <script type="text/javascript" src="js/copyTooltip.js"></script>
    <script type="text/javascript" src="js/removeSection.js"></script>
    <script type="text/javascript" src="js/datepicker.js"></script>
    <script type="text/javascript" src="js/tooltip.js"></script>
    <script type="text/javascript" src="js/ratingButton.js"></script>
    <script type="text/javascript" src="js/validateForm.js"></script>
    <script type="text/javascript" src="bootstrap/addons/bootstrap-datepicker-1.6.4-dist/js/bootstrap-datepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <div class="container">
        <div class="top-bar row">
            <button type="button" class="btn btn-success btn-md pull-right menu-btn" onclick="save();" >Save</button>
            <button type="button" class="btn btn-primary btn-md pull-right menu-btn" data-toggle="modal" data-target="#openModal">
              Open
            </button>
            <button type="button" class="btn btn-danger btn-md pull-right menu-btn" onclick="makePDF();" >Create PDF</button>
        </div>
        <div class="form-header row">
            <div class="col-xs-12 text-center"><img src="images/UTSALogo.png"></div>
            <div class="col-xs-12 text-center">
                <!-- <p>The Univeristy of Texas at San Antonio</p> -->
                <h2>NON-FACULTY PERFORMANCE EVALUATION REVIEW</h2>
            </div>
            <div class="col-xs-2"></div>
        </div>
        <div class="form">
            <div class=" row form-group text-center review-period-section">
                <div class="col-xs-12 review-period-section">
                    <span class="review-period-label">Review Period From: 2/1/&nbsp;</span>
                <input class="form-control year-input" type="text" name="review_period_from" id="review_period_from">
                <span class="review-period-label">&nbsp;&nbsp;To: 1/31/&nbsp;</span>
                <input class="form-control year-input" type="text" name="review_period_to" id="review_period_to">
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
            <div class="form-group row" id="essential-job-functions-section">
                <div class="col-xs-12">
                    <h3>SECTION I. ESSENTIAL JOB FUNCTIONS/RESPONSIBILITIES</h3>
                    <p class="section-description essential-job-functionssection-description">List the essential job functions/responsibilites of this employee.  These are the major responsibilities of the job. It defines the job (along with the reason it exists).  Typically this would include 5-8 key essential job functions and can be found in the job description or position description.</p>
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
                    <button class="btn btn-primary btn-md pull-right" onclick="addProject();">Add Project</button>
                </div>
            </div>
            <div class="form-group row" id="development-plans-section">
                <div class="col-xs-12 development-plans-description">
                    <h3>SECTION III. DEVELOPMENT PLANS</h3>
                    <p class="section-description development-plans-section-description"><strong>Employees are always encouraged to actively engage in self development affairs.</strong>  Identify specific work assignments, training (courses/classes, skills, books, magazines, seminars or CEU's) designed to increase the individual's effectiveness in present job and/or prepare for future job assignments.</p>
                    <p><strong>** While this section will not have a rating, it should be a factor used to determine overall performance. **</strong></p>
                </div>
                <div class="col-xs-12 development-plans-container" id="development-plans-container">

                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <button class="btn btn-primary btn-md pull-right" onclick="addDevelopmentPlan();">Add Training/Skill</button>
                    </div>
                </div>
            </div>
            <div class="form-group row" id="attributes-section">
                <div class="col-xs-12 attributes-description">
                    <h3>SECTION IV. ATTRIBUTES</h3>
                    <p class="section-description attributes-description">
                        <strong>To be completed for all employees, including supervisors</strong>
                        <ul>
                            <li>For each attribute in which an employee is rated "Outstanding" or "Improvement Needed" comments <strong>are required</strong></li>
                            <li>For each attribute in which an employee is rated "Solid Performance", <strong>comments are not necessary, but are desirable</strong></li>

                        </ul>
                    </p>
                    <p class="instruction">You can hover over the clipboard by each attribute to see a description.  Click clipboard to add the description to the associated text area!</p>
                </div>
                <div class="col-xs-12 attributes-container" id="attributes-container">
                    <div class="row attribute" id="attribute-1">
                        <div class="col-xs-2 attribute-label-div">
                            <label>TEAMWORK</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control" placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-2">
                        <div class="col-xs-2 attribute-label-div">
                            <label>SERVICE ORIENTATION</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-3">
                        <div class="col-xs-2 attribute-label-div">
                            <label>COMMUNICATION</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-4">
                        <div class="col-xs-2 attribute-label-div">
                            <label>ADAPTABILITY</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-5">
                        <div class="col-xs-2 attribute-label-div">
                            <label>INNOVATION, CREATIVITY &amp; INITIATIVE</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-6">
                        <div class="col-xs-2 attribute-label-div">
                            <label>MOTIVATION</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-7">
                        <div class="col-xs-2 attribute-label-div">
                            <label>JOB KNOWLEDGE</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-8">
                        <div class="col-xs-2 attribute-label-div">
                            <label>JUDGEMENT</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-9">
                        <div class="col-xs-2 attribute-label-div">
                            <label>QUANTITY &amp; PRODUCTIVITY</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row attribute" id="attribute-10">
                        <div class="col-xs-2 attribute-label-div">
                            <label>QUALITY</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
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
                        <br><strong>Comments are not required for a rating of "SP"</strong>
                    </p>
                </div>
                <div class="col-xs-12 attributes-container" id="supervisor-attributes-container">
                    <div class="row supervisor-attribute" id="supervisor-attribute-1">
                        <div class="col-xs-2 attribute-label-div">
                            <label>STAFF DEVELOPMENT</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control" placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row supervisor-attribute" id="supervisor-attribute-2">
                        <div class="col-xs-2 attribute-label-div">
                            <label>DECISION MAKING</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row supervisor-attribute" id="supervisor-attribute-3">
                        <div class="col-xs-2 attribute-label-div">
                            <label>LEADERSHIP</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row supervisor-attribute" id="supervisor-attribute-4">
                        <div class="col-xs-2 attribute-label-div">
                            <label>PROMOTES DIVERSITY</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                    <div class="row supervisor-attribute" id="supervisor-attribute-5">
                        <div class="col-xs-2 attribute-label-div">
                            <label>COMPLICANCE, ACCOUNTABILITY &amp;  RISK MANAGEMENT</label>
                        </div>
                        <div class="col-xs-8">
                            <textarea class="form-control"  placeholder="Comment..."></textarea>
                        </div>
                        <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                                <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                                <button type="button" class="btn btn-default rating-btn" value="I">I</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row" id="overall-rating-section">
                <div class="col-xs-12 overall-rating-description">
                    <h3>SECTION VI. OVERALL RATING</h3>
                    <p class="section-description">When providing comments/summary, consider the employee's performance in: Section I - Essential Job Functions, Section II - Projects, Section III - Development Plans, Sections IV &amp; V - Attributes</p>
                </div>
                <div class="col-xs-10">
                    <textarea class="form-control"  placeholder="Performance Summary/Manager's Comments -- REQUIRED"></textarea>
                </div>
                 <div class="col-xs-2" role="group" aria-label="Rating:"><span class="rating-label">Choose Rating:<br></span>
                    <div class="btn-group">
                        <button type="button" class="btn btn-default rating-btn left-btn" value="O">O</button>
                        <button type="button" class="btn btn-default rating-btn" value="SP">SP</button>
                        <button type="button" class="btn btn-default rating-btn" value="I">I</button>
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
        </div>
    </div>

    <!-- Modal -->
    <div class="modal" id="openModal" tabindex="-1" role="dialog" aria-labelledby="Open" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Open File</h4>
          </div>
            <div class="modal-body">
                <form enctype="multipart/form-data" action="php/upload.php" method="POST" id="upload-Form">
                    <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
                    <label for="userfile">Open file:</label>
                    <input name="userfile" type="file" id="userfile"/>
                    <input type="button" name="uploadFormBtn" value="Open" id="uploadFormBtn" onclick="openFormData();"/>
                </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
</body>
</html>