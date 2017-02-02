<?php
	require('./fpdf/fpdf.php');
	define("FONTSIZE", 10);
	define("PADDING", 5);
	
	class PDF extends FPDF{

		private $data;
		private $title = 'NON-FACULTY PERFORMANCE REVIEW';

		function setData($in){
			global $data;
			$converted_in = iconv('UTF-8', 'ASCII//TRANSLIT', $in);
			$data = json_decode($converted_in);
			// echo mb_detect_encoding($in)."\n";
			// echo mb_detect_encoding($converted_in)."\n";
			// echo mb_detect_encoding($data->jobFunctions[0]->textareas['essential-job-function-1-text-area-1'])."\n";
			// echo $data->jobFunctions[0]->textareas['essential-job-function-1-text-area-1'];
		}

		function Header(){
			if($this->PageNo() == 1){
				$image = '../images/UTSA_HRLogo_Formal.png';
				$this->centerImage($image, ".2");
				$this->SetFont('Arial','B',14);
				$w = $this->GetStringWidth($this->title);
				$x = (($this->GetPageWidth()-20)/2)-($w/2);
				$this->Cell(0, 12, $this->title,0,1,'C');
				$this->printEmployeeInfo();
			}else{
				$this->SetFont('Arial','B',14);
				$this->Cell(0, 12, $this->title,0,1,'C');
				$this->printEmployeeInfo();
			}
		}

		function Footer(){
			$this->SetY(-15);
			$this->SetFont('', '', 10);
			$this->Cell(0, 8, "Page ".$this->PageNo(), 'T', 0, 'R');

		}

		function printEvaluation(){
			global $data;

			$this->AddPage();
			// print job functions
			$this->printJobFunctionsHeader();
			if($data->numOfEssentialFunctions > 0){
				$jobNum = 0;
				foreach($data->jobFunctions as $job){
					$jobNum++;
					$this->printJobFunction($job, $jobNum);
				}
			}else{
				$this->Cell(0, FONTSIZE, "No Essential Job Functions reported for employee", 0, 1, 'C');
				$this->Ln(PADDING);
			}

			$this->AddPage();
			$this->printProjectsHeader();
			if($data->numOfProjects > 0){
				$projectNum = 0;
				foreach($data->projects as $project){
					$projectNum++;
					$this->printProject($project, $projectNum);
				}
			}else{
				$this->Cell(0, FONTSIZE, "No Projects reported for employee", 0, 1 , 'C');
				$this->Ln(PADDING);
			}

			$this->AddPage();
			$this->printDevelopmentPlansHeader();
			if($data->numOfDevelopmentPlans > 0){
				$planNum = 0;
				foreach($data->developmentPlans as $plan){
					$planNum++;
					$this->printDevelopmentPlan($plan, $planNum);
				}
			}else{
				$this->Cell(0, FONTSIZE, "No Development Plans reported for employee", 0, 1 , 'C'); 
				$this->Ln(PADDING);
			}

			$this->AddPage();
			$this->printAttributesHeader();
			foreach($data->attributes as $attribute){
				$this->printAttribute($attribute);
			}
			$this->Ln(PADDING);

			$this->AddPage();
			$this->printSupervisorAttributesHeader();
			if($data->isSupervisor == 'no'){
				$this->Cell(0, FONTSIZE, "This employee is not a supervisor", 0, 1 , 'C'); 
				$this->Ln(PADDING);
			}else{
				foreach($data->supervisorAttributes as $attribute){
					$this->printSupervisorAttribute($attribute);
				}
				$this->Ln(PADDING);
			}

			$this->AddPage();
			//print overall rating
			$this->printOverallRating($data->overallRating);


			// print employee comment
			$this->printEmployeeComment($data->employeeComment);

			$this->AddPage();
			// print signatures
			$this->printSignatures();

		}

		function printEmployeeCopy(){
			global $data;

			$this->AddPage();
			// print job functions
			$this->printJobFunctionsHeader();
			if($data->numOfEssentialFunctions > 0){
				$jobNum = 0;
				foreach($data->jobFunctions as $job){
					$jobNum++;
					$this->printJobFunction($job, $jobNum);
				}
			}else{
				$this->Cell(0, FONTSIZE, "No Essential Job Functions reported for employee", 0, 1, 'C');
				$this->Ln(PADDING);
			}

			$this->AddPage();
			$this->printProjectsHeader();
			if($data->numOfProjects > 0){
				$projectNum = 0;
				foreach($data->projects as $project){
					$projectNum++;
					$this->printProject($project, $projectNum);
				}
			}else{
				$this->Cell(0, FONTSIZE, "No Projects reported for employee", 0, 1 , 'C');
				$this->Ln(PADDING);
			}

			$this->AddPage();
			$this->printDevelopmentPlansHeader();
			if($data->numOfDevelopmentPlans > 0){
				$planNum = 0;
				foreach($data->developmentPlans as $plan){
					$planNum++;
					$this->printDevelopmentPlan($plan, $planNum);
				}
			}else{
				$this->Cell(0, FONTSIZE, "No Development Plans reported for employee", 0, 1 , 'C'); 
				$this->Ln(PADDING);
			}

			$this->AddPage();
			$this->printAttributesHeader();
			foreach($data->attributes as $attribute){
				$this->printAttribute($attribute);
			}
			$this->Ln(PADDING);

			$this->AddPage();
			$this->printSupervisorAttributesHeader();
			if($data->isSupervisor == 'no'){
				$this->Cell(0, FONTSIZE, "This employee is not a supervisor", 0, 1 , 'C'); 
				$this->Ln(PADDING);
			}else{
				foreach($data->supervisorAttributes as $attribute){
					$this->printSupervisorAttribute($attribute);
				}
				$this->Ln(PADDING);
			}

			$this->AddPage();
			//print overall rating
			$this->printOverallRating($data->overallRating);


			// print employee comment
			$this->printEmployeeComment($data->employeeComment);

		}

		function printEmployeeInfo(){
			global $data;
			$this->SetFont('Arial','',10);
			$this->Cell (0, 8, "Review Period: 2/1/2016 To 1/31/2017", 0, 1, 'C');
			$tenth = ($this->GetPageWidth()-20)/10;
			$this->Cell($tenth*3, 6, "Name: ".$data->employee_name, "LBT",0);
			$this->Cell($tenth*3, 6, "Title: ".$data->employee_title, "BT",0);
			$this->Cell($tenth*2, 6, "EMPL ID: ".$data->employee_id, "BT",0);
			$this->Cell($tenth*2, 6, "Job Code: ".$data->job_code, "RBT",1);
			$this->Ln(PADDING);
		}

		function printJobFunction($job, $jobNum){
			//print top top and rating
			$value = current((array)$job->textareas[0]);
			// if(!$this->fitsOnPage($value, FONTSIZE)){
			// 	$this->AddPage();
			// }
			$this->Cell(0, FONTSIZE, "Essential Job Function ".$jobNum, 0, 1);
			$this->setInputTitleFont();
			$this->Cell((($this->GetPageWidth()-20)/12)*10, PADDING, "ESSENTIAL JOB FUNCTIONS", "LT", 0);
			$this->Cell(0, PADDING, "RATING: ".$job->selectedRating, 1, 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $value, "LBR", "L");

			//print standard
			$value = current((array)$job->textareas[1]);
			// if(!$this->fitsOnPage($value, FONTSIZE)){
			// 	$this->AddPage();
			// }
			$this->setInputTitleFont();
			$this->Cell(0, PADDING, "STANDARD", "LTR", 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $value, "LBR", "L");

			//print comments
			$value = current((array)$job->textareas[2]);
			// if(!$this->fitsOnPage($value, FONTSIZE)){
			// 	$this->AddPage();
			// }
			$this->setInputTitleFont();
			$this->Cell(0, PADDING, "COMMENTS", "LTR", 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $value, "LBR", "L");

			$this->Ln(PADDING);
		}

		function printProject($project, $projectNum){
			//print top top and rating
			$value = current((array)$project->textareas[0]);
			// if(!$this->fitsOnPage($value, FONTSIZE)){
			// 	$this->AddPage();
			// }
			$this->Cell(0, FONTSIZE, "Project ".$projectNum, 0, 1);
			$this->setInputTitleFont();
			$this->Cell((($this->GetPageWidth()-20)/12)*10, PADDING, "SPECIAL PROJECTS", "LT", 0);
			$this->Cell(0, PADDING, "RATING: ".$project->selectedRating, 1, 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $value, "LBR", "L");

			//print standard
			$value = current((array)$project->textareas[1]);
			// if(!$this->fitsOnPage($value, FONTSIZE)){
			// 	$this->AddPage();
			// }
			$this->setInputTitleFont();
			$this->Cell(0, PADDING, "STANDARD", "LTR", 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $value, "LBR", "L");

			//print comments
			$value = current((array)$project->textareas[2]);
			// if(!$this->fitsOnPage($value, FONTSIZE)){
			// 	$this->AddPage();
			// }
			// if($project->dueDate == "none"){
			// 	$project->dueDate = '';
			// }
			$this->setInputTitleFont();
			$this->Cell((($this->GetPageWidth()-20)/12)*10, PADDING, "COMMENTS", "LT", 0);
			$this->Cell(0, PADDING, "Due Date: ".$project->dueDate, 1, 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $value, "LBR", "L");

			$this->Ln(PADDING);
		}
		
		function printDevelopmentPlan($plan, $planNum){
			//print top top and rating
			$value = current((array)$plan->textareas[0]);
			// if(!$this->fitsOnPage($value, FONTSIZE)){
			// 	$this->AddPage();
			// }
			// if($plan->dueDate == 'none'){
			// 	$plan->dueDate ='';
			// }
			$this->Cell(0, FONTSIZE, "Development Plan ".$planNum, 0, 1);
			$this->setInputTitleFont();
			$this->Cell((($this->GetPageWidth()-20)/12)*9.5, PADDING, "TRAINING/SKILLS REQUIRED", "LT", 0);
			$this->Cell(0, PADDING, "Due/Compl Date: ".$plan->dueDate, 1, 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $value, "LBR", "L");

			//print comments
			$value = current((array)$plan->textareas[1]);
			// if(!$this->fitsOnPage($value, FONTSIZE)){
			// 	$this->AddPage();
			// }
			// if($plan->startDate == "none"){
			// 	$plan->startDate = '';
			// }
			// if($plan->endDate == 'none'){
			// 	$plan->endDate ='';
			// }
			$this->setInputTitleFont();
			$this->Cell(0, PADDING, "COMMENTS", "LTR", 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $value, "LBR", "L");

			$this->Ln(PADDING);
		}

		function printAttribute($attribute){
			// if(!$this->fitsOnPage($attribute->comment, FONTSIZE)){
			// 	$this->AddPage();
			// }
			$this->setInputTitleFont();
			$this->Cell((($this->GetPageWidth()-20)/12)*9.5, PADDING, $attribute->attribute, "LT", 0);
			$this->Cell(0, PADDING, "Rating: ".$attribute->rating, 1, 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $attribute->comment, "LBR", "L");
			
		}

		function printSupervisorAttribute($attribute){
			// if(!$this->fitsOnPage($attribute->comment, FONTSIZE)){
			// 	$this->AddPage();
			// }
			$this->setInputTitleFont();
			$this->Cell((($this->GetPageWidth()-20)/12)*9.5, PADDING, $attribute->attribute, "LT", 0);
			$this->Cell(0, PADDING, "Rating: ".$attribute->rating, 1, 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $attribute->comment, "LBR", "L");

		}

		function printOverallRating($data){
			$this->SetFont('', "BU", FONTSIZE+6);
			$this->Cell(0,PADDING+3, "OVERALL RATING", 0, 1);
			$this->setInputTitleFont();
			$this->Cell((($this->GetPageWidth()-20)/12)*9.5, PADDING, "PERFORMANCE SUMMARY/MANAGER'S COMMENTS", "LT", 0);
			$this->Cell(0, PADDING, "Rating: ".$data->overallRating, 1, 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $data->overallComment, "LBR", "L");
			$this->Ln(PADDING);
		}

		function printEmployeeComment($comment){
			$this->setInputTitleFont();
			$this->Cell(0, PADDING, "EMPLOYEE COMMENT", "LTR", 1);
			$this->setInputRegularFont();
			$this->MultiCell(0, PADDING, $comment, "LBR", "L");
			$this->Ln(PADDING);
		}

		function printSignatures(){
			// $this->AddPage();
			$section = ($this->GetPageWidth()-20)/20;
			$this->setSectionHeaderTitleFont();
			$this->Cell(0,PADDING, "SIGNATURES:", 0, 1);
			$this->Ln(PADDING*2);
			$this->SetFont('', '', 8);
			//first line
			$this->Ln(PADDING*3);
			$x = $this->GetX();
			$y = $this->GetY();
			$stringWidth = $this->GetStringWidth("Employee Signature");
			$this->Cell($stringWidth, 4, "Employee Signature", 0, 0);
			$this->SetTextColor(255,0,0);
			$this->Cell($section, 4, " *", 0, 0);
			$this->SetTextColor(0,0,0);
			$this->SetXY($x, $y);
			$this->Cell($section*6, 4, "", "T", 0);
			$this->Cell($section*2, 4, "", 0, 0);
			$this->Cell($section*6, 4, "Employee Printed Name", "T", 0);
			$this->Cell($section*2, 4, "", 0, 0);
			$this->Cell($section*4, 4, "Date", "T", 1);
			
			//note for employee signature
			$this->Ln(PADDING);
			$x = $this->GetX();
			$y = $this->GetY();
			$this->SetTextColor(255,0,0);
			$this->Cell($section, 4, " *", 0, 0);
			$this->SetXY($x, $y);
			$this->SetTextColor(0, 0 ,0);
			$this->Cell(0, 4, "    Your signature does not necessarily signify agreement with the appraisal; but simply that the appraisal has been discussed with you.", "B", 1);
			$this->SetTextColor(255,0,0);
			$this->Cell(0, 4, "If the employee chooses not to sign the appraisal, have another member of the management team witness the delivery of the appraisal.", 0 ,1);
			$this->SetTextColor(0,0,0);

			//second
			$this->Ln(PADDING*3);
			$this->Cell($section*6, 4, "Supervisor Signature", "T", 0);
			$this->Cell($section*2, 4, "", 0, 0);
			$this->Cell($section*6, 4, "Supervisor Printed Name", "T", 0);
			$this->Cell($section*2, 4, "", 0, 0);
			$this->Cell($section*4, 4, "Date", "T", 1);
			//third
			$this->Ln(PADDING*3);
			$this->Cell($section*6, 4, "Additional Supervisor Signature", "T", 0);
			$this->Cell($section*2, 4, "", 0, 0);
			$this->Cell($section*6, 4, "Supervisor Printed Name", "T", 0);
			$this->Cell($section*2, 4, "", 0, 0);
			$this->Cell($section*4, 4, "Date", "T", 1);
			
			//fourth
			$this->Ln(PADDING*3);
			$x = $this->GetX();
			$y = $this->GetY();
			$stringWidth = $this->GetStringWidth("Additional ");
			$this->Cell($stringWidth, 4, "Additional ", 0, 0);
			$this->SetTextColor(255,0,0);
			$this->Cell($section*3, 4, "(* if required)", 0, 0);
			$this->SetXY($x, $y);
			$this->SetTextColor(0,0,0);
			$this->Cell($section*6, 4, "", "T", 0);
			$this->Cell($section*2, 4, "", 0, 0);
			$this->Cell($section*6, 4, "Printed Name", "T", 0);
			$this->Cell($section*2, 4, "", 0, 0);
			$this->Cell($section*4, 4, "Date", "T", 1);

			$this->Ln(PADDING);
			$this->SetFont('', '', 12);
			$this->Cell(0, 6, "Send a copy of the completed form with all required signatures to:", 0, 1, 'C');
			$this->Cell(0, 6, "UTSA - Office of Human Resources: Attention HR Records", 0, 1, 'C');
			$this->Cell(0, 6, "or scan and email to: HR-Records@utsa.edu", 0, 1, 'C');

			$this->Ln(PADDING);
			$this->MultiCell(0, 6, "Discuss with your employee their performance plan for the upcoming year 2/1/17 - 1/31/18. Record the information in a document (of your choosing) until the new software is available in early summer.", 0, 'C');

		}

		function setSectionHeaderTitleFont(){
			$this->SetFont('', 'B', FONTSIZE+4);
		}

		function setSectionHeaderRegularFont(){
			$this->SetFont('', '', FONTSIZE);
		}

		function setInputTitleFont(){
			$this->SetFont('', 'B', FONTSIZE);
		}

		function setInputRegularFont(){
			$this->SetFont('', '', FONTSIZE);
		}

		function printJobFunctionsHeader(){
			$this->setSectionHeaderTitleFont();
			$w = $this->GetStringWidth("Section I. ESSENTIAL JOB FUNCTIONS/RESPONSIBILITIES");
			$this->Cell($w, PADDING, "Section I. ESSENTIAL JOB FUNCTIONS/RESPONSIBILITIES", 0, 1);
			$this->SetFont('', '', FONTSIZE);
			$this->MultiCell(0, PADDING, "List the essential job functions/responsibilites of this employee.  These are the major responsibilities of the job. It defines the job (along with the reason it exists).  Typically this would include 5-8 key essential job functions and can be found in the job description or position description.", 0, 'L');
			$this->Ln(PADDING);
		}

		function printProjectsHeader(){
			$this->setSectionHeaderTitleFont();
			$w = $this->GetStringWidth("Section II. PROJECTS");
			$this->Cell($w, PADDING, "Section II. PROJECTS", 0, 1);
			$this->SetFont('', '', FONTSIZE);
			$this->MultiCell(0, PADDING, "List the special projects that have been assigned to this employee for the year (typically major projects would not exceed 3-4).  Some employees may not have special projects assigned at all.", 0, 'L');
			$this->Ln(PADDING);
		}

		function printDevelopmentPlansHeader(){
			$this->setSectionHeaderTitleFont();
			$w = $this->GetStringWidth("Section III. DEVELOPMENT PLANS");
			$this->Cell($w, PADDING, "Section III. DEVELOPMENT PLANS", 0, 1);
			$this->SetFont('', '', FONTSIZE);
			$this->MultiCell(0, PADDING, "Employees are always encouraged to actively engage in self development affairs.  Identify specific work assignments, training (courses/classes, skills, books, magazines, seminars or CEU's) designed to increase the individual's effectiveness in present job and/or prepare for future job assignments\n** While this section will not have a rating, it should be a factor used to determine overall performance. **", 0, 'L');
			$this->Ln(PADDING);
		}

		function printAttributesHeader(){
			$this->setSectionHeaderTitleFont();
			$w = $this->GetStringWidth("Section IV. ATTRIBUTES");
			$this->Cell($w, PADDING, "Section IV. ATTRIBUTES", 0, 1);
			$this->SetFont('', '', FONTSIZE);
			$this->MultiCell(0, PADDING, '- For each attribute in which an employee is rated "Outstanding" or "Improvement Needed" comments are required'."\n".'For each attribute in which an employee is rated "Solid Performance" comments are not necessary, but are desirable', 0, 'L');
			$this->Ln(PADDING);
		}

		function printSupervisorAttributesHeader(){
			$this->setSectionHeaderTitleFont();
			$w = $this->GetStringWidth("Section V. SUPERVISORS ONLY");
			$this->Cell($w, PADDING, "Section V. SUPERVISORS ONLY", 0, 1);
			$this->SetFont('', '', FONTSIZE);
			$this->MultiCell(0, PADDING, 'Please compelete this page of attributes (in addition to the previous page) for employees.  Supervisor for purposes of this exercise is defined as those who have the responsibility of supervising others, whether in a formal capacity (e.g., by title) or informal.  Supervisors will be rated on 15 attributes (total).'."\N".'Comments are not required for a rating of "SP"', 0, 'L');
			$this->Ln(PADDING);
		}

		function centerImage($img, $printWidth){
			list($width, $height) = getimagesize($img);
			$heightRatio = $height/$width;
			$newWidth = $this->GetPageWidth()*$printWidth;
			$x = ($this->GetPageWidth()/2)-($newWidth/2);
			$this->Image($img, $x, null, $newWidth, $newWidth*$heightRatio);
		}
		function leftImage($img, $printWidth){
			list($width, $height) = getimagesize($img);
			$heightRatio = $height/$width;
			$newWidth = $this->GetPageWidth()*$printWidth;
			$x = ($this->GetPageWidth()/2)-($newWidth/2);
			$this->Image($img, 10, null, $newWidth, $newWidth*$heightRatio);
		}

		function fitsOnPage($string, $lineHeight){
			$endOfPage = $this->GetPageHeight()-15;
			$currY = $this->GetY();
			$currX = $this->GetX();
			$maxStringWidth = ($this->GetPageWidth()-20);
			$linesReq = 1;
			$remainingLength = $this->GetStringWidth($string);
			$remainingLength = $remainingLength-($maxStringWidth - $currX);
			while($remainingLength > $maxStringWidth){
				$remainingLength -= $maxStringWidth;
				$linesReq++;
			}
			if($remainingLength > 0){
				$linesReq++;
			}

			$linesRemaining = ($endOfPage - $currY)/$lineHeight;
			if ($linesReq < $linesRemaining-1){
				return TRUE;
			}else{
				return FALSE;
			}
		}

		function GetMultiCellHeight($w, $h, $txt, $border=null, $align='J') {
			// Calculate MultiCell with automatic or explicit line breaks height
			// $border is un-used, but I kept it in the parameters to keep the call
			//   to this function consistent with MultiCell()
			$cw = &$this->CurrentFont['cw'];
			if($w==0)
				$w = $this->w-$this->rMargin-$this->x;
			$wmax = ($w-2*$this->cMargin)*1000/$this->FontSize;
			$s = str_replace("\r",'',$txt);
			$nb = strlen($s);
			if($nb>0 && $s[$nb-1]=="\n")
				$nb--;
			$sep = -1;
			$i = 0;
			$j = 0;
			$l = 0;
			$ns = 0;
			$height = 0;
			while($i<$nb)
			{
				// Get next character
				$c = $s[$i];
				if($c=="\n")
				{
					// Explicit line break
					if($this->ws>0)
					{
						$this->ws = 0;
						$this->_out('0 Tw');
					}
					//Increase Height
					$height += $h;
					$i++;
					$sep = -1;
					$j = $i;
					$l = 0;
					$ns = 0;
					continue;
				}
				if($c==' ')
				{
					$sep = $i;
					$ls = $l;
					$ns++;
				}
				$l += $cw[$c];
				if($l>$wmax)
				{
					// Automatic line break
					if($sep==-1)
					{
						if($i==$j)
							$i++;
						if($this->ws>0)
						{
							$this->ws = 0;
							$this->_out('0 Tw');
						}
						//Increase Height
						$height += $h;
					}
					else
					{
						if($align=='J')
						{
							$this->ws = ($ns>1) ? ($wmax-$ls)/1000*$this->FontSize/($ns-1) : 0;
							$this->_out(sprintf('%.3F Tw',$this->ws*$this->k));
						}
						//Increase Height
						$height += $h;
						$i = $sep+1;
					}
					$sep = -1;
					$j = $i;
					$l = 0;
					$ns = 0;
				}
				else
					$i++;
			}
			// Last chunk
			if($this->ws>0)
			{
				$this->ws = 0;
				$this->_out('0 Tw');
			}
			//Increase Height
			$height += $h;

			return $height;
		}
	}
?>