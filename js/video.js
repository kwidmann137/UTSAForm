function playVideo(ele){
	if($(ele).text() === 'FireFox'){
		console.log("FireFox");
		var source = "Firefox";
	}else{
		console.log("Chrome");
		var source = "Chrome";
	}

	$("#promptToSaveModal .modal-dialog").css('width', '900px');
	$("#promptToSaveModal .video-container").css('width', '900px');
	$("#promptToSaveModal .video-container").css('height', '500px');

	var video = '<video width="800" controls> <source src="%src%" type="video/mp4"> <source src="%src%" type="video/ogg"> Your browser does not support HTML5 video.</video>';
	var formattedVideo = video.replace(/%src%/g, source);
	$("#promptToSaveModal .video-container").empty();
	$("#promptToSaveModal .video-container").append(formattedVideo);
}