function updateVideo() {
    var video = document.getElementById("myVideo");
    var videoLength = video.duration;
    
    var scrollPosition = $('#scroll').scrollTop();
    var scrollY = $('#scroll')[0].scrollHeight;

    console.log(videoLength);

    video.currentTime = (scrollPosition / (scrollY - 500)) * videoLength;
    console.log(video.currentTime);
}

$('#scroll').scroll(function () {
	$('#scroll-instructions').fadeTo("slow", 0, function() {});
   	updateVideo();

});

