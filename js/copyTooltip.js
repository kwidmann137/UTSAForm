function copyTooltip(ele){
	if($(ele).hasClass('employee-attribute-glyph')){
		var parent = $(ele).parents('.attribute');
		var attribute = $('label', parent).text();
		var text = attributeDefinitions[attribute];
		text = text.replace(/&quot;/g, '"');
		var commentSection = $('textarea', parent);
		var oldText = commentSection.val();
		var newText = oldText+text;
		commentSection.val(newText);
		commentSection.trigger('change');
		// $(ele).reisze();
	}else if($(ele).hasClass('supervisor-attribute-glyph')){
		var parent = $(ele).parents('.supervisor-attribute');
		var attribute = $('label', parent).text();
		var text = supervisorAttributeDefinitions[attribute];
		text = text.replace(/&quot;/g, '"');
		var commentSection = $('textarea', parent);
		var oldText = commentSection.val();
		var newText = oldText+text;
		commentSection.val(newText);
		commentSection.trigger('change');
		// $(ele).reisze();
	}
}