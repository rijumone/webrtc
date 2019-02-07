(function() {
	var video = document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURL;

	navigator.getMedia = 	navigator.getUserMedia ||
							navigator.webkitGetUserMedia ||
							navigator.mozGetUserMedia ||
							navigator.msGetUserMedia;

	// Capture video
	navigator.getMedia({
		video: true,
		audio: false
	}, function(stream){
		console.log(stream)
	}, function(error){
		console.log(error)
	});
})();