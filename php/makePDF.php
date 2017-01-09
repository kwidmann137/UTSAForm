<?php
	require('./fpdf/fpdf.php');

	// echo "In make PDF.php"

	$pdf = new FPDF();
	$pdf->AddPage();
	$pdf->SetFont('Arial','B', 16);
	$pdf->Cell(40,10,'HelloWorld');
	$pdf->Output('evaluation-review.pdf', 'F');
?>