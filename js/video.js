function playVideo(ele){
	var parent = $(ele).closest('.modal-dialog');
	var type = parent.closest(".modal");

	if(type.attr('id') == "openModal"){
		var source = '<iframe width="853" height="480" src="https://www.youtube.com/embed/AfUtCN3eyQc?rel=0" frameborder="0" allowfullscreen></iframe>';
	}else if(type.attr('id') == "promptToSaveModal"){
		if($(ele).text() === 'FireFox'){
			var source = '<iframe width="853" height="480" src="https://www.youtube.com/embed/v9GEKwewzV4?rel=0" frameborder="0" allowfullscreen></iframe>';
		}else{
			var source = '<iframe width="853" height="480" src="https://www.youtube.com/embed/fp3Oy-PPPl0?rel=0" frameborder="0" allowfullscreen></iframe>';
		}
	}

	parent.css('width', '900px');
	$(".video-container", parent).css('width', '868px');
	$(".video-container", parent).css('height', '500px');

	// var video = '<video width="800" controls> <source src="%src1%" type="video/mp4"> <source src="%src2%" type="video/ogg"> Your browser does not support HTML5 video.</video>';
	// var formattedVideo = video.replace(/%src1%/, source1);
	// var formattedVideo = formattedVideo.replace(/%src2%/, source2);
	$(".video-container", parent).empty();
	$(".video-container", parent).append(source);
}

$(function(){
	$(".modal").on('hidden.bs.modal', function (e) {
	    $(".video-container", ".modal").empty();
	    $(".modal-dialog", this).css('width', '600px');
        $(".video-container").css('width', 'auto');
        $(".video-container").css('height', 'auto');
	});
});