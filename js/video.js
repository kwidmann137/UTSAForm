function playVideo(ele){
	if($(ele).text() === 'FireFox'){
		console.log("FireFox");
		var source1 = "./videos/Save-On-Firefox/Video/MP4/Save-On-Firefox.mp4";
		var source2 = "./videos/Save-On-Firefox/Video/WebM/Save-On-Firefox.webm";
	}else{
		console.log("Chrome");
		var source1 = "./videos/Save-On-Chrome/Video/MP4/Save-On-Chrome.mp4";
		var source2 = "./videos/Save-On-Chrome/Video/WebM/Save-On-Chrome.webm";
	}

	$("#promptToSaveModal .modal-dialog").css('width', '900px');
	$("#promptToSaveModal .video-container").css('width', '868px');
	$("#promptToSaveModal .video-container").css('height', '500px');

	var video = '<video width="800" controls> <source src="%src1%" type="video/mp4"> <source src="%src2%" type="video/ogg"> Your browser does not support HTML5 video.</video>';
	var formattedVideo = video.replace(/%src1%/, source1);
	var formattedVideo = formattedVideo.replace(/%src2%/, source2);
	$("#promptToSaveModal .video-container").empty();
	$("#promptToSaveModal .video-container").append(formattedVideo);
}