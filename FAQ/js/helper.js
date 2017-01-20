var item = '<div class="faq-item"><div class="col-xs-12"><h4>%question%</h4></div><div class="col-xs-12"><p>%answer%</p></div></div>'

$(function(){
	$.each(FAQ.items, function(){
		var formattedItem = item.replace(/%question%/, this.question);
		var formattedItem = formattedItem.replace(/%answer%/, this.answer);
		$('.faq-container').append(formattedItem);
	})
});