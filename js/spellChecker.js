function checkSpelling(btn){
	console.log(btn);
	var textarea = $(btn).prev('textarea');
	console.log(textarea);
	var checker = new sc.SpellChecker({
	    button: $(btn), // HTML element that will open the spell checker when clicked
	    textInput: $(textarea), // HTML field containing the text to spell check
	    action: 'js/spellChecker/spellcheck.php' // URL of the server side script 
	});
}