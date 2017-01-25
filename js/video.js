function playVideo(ele){
	var parent = $(ele).closest('.modal-dialog');
	var type = parent.closest(".modal");

	if(type.attr('id') == "openModal"){
		var source1 = "./videos/Open-On-Chrome/Video/MP4/Open-On-Chrome.mp4";
		var source2 = "./videos/Open-On-Chrome/Video/WebM/Open-On-Chrome.webm";
	}else if(type.attr('id') == "promptToSaveModal"){
		if($(ele).text() === 'FireFox'){
			var source1 = "./videos/Save-On-Firefox/Video/MP4/Save-On-Firefox.mp4";
			var source2 = "./videos/Save-On-Firefox/Video/WebM/Save-On-Firefox.webm";
		}else{
			var source1 = "./videos/Save-On-Chrome/Video/MP4/Save-On-Chrome.mp4";
			var source2 = "./videos/Save-On-Chrome/Video/WebM/Save-On-Chrome.webm";
		}
	}

	parent.css('width', '900px');
	$(".video-container", parent).css('width', '868px');
	$(".video-container", parent).css('height', '500px');

	var video = '<video width="800" controls> <source src="%src1%" type="video/mp4"> <source src="%src2%" type="video/ogg"> Your browser does not support HTML5 video.</video>';
	var formattedVideo = video.replace(/%src1%/, source1);
	var formattedVideo = formattedVideo.replace(/%src2%/, source2);
	$(".video-container", parent).empty();
	$(".video-container", parent).append(formattedVideo);
}