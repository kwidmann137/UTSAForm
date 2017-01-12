<?php
	require('pdf.php');

	$rawData = $_POST['myData'];
	$pdf = new PDF('L', 'mm', 'A4');
	$pdf->setData($rawData);
	$pdf->SetFont('Arial','', 12);
	$pdf->printEvaluation();
	$pdf->Output('evaluation-review.pdf','F');
?>	