function updateVideo() {
    var video = document.getElementById("myVideo");
    var videoLength = video.duration;
    
    var scrollPosition = $('#scroll').scrollTop();
    var scrollY = $('#scroll')[0].scrollHeight;

    if (video.currentTime > videoLength) {
    	video.currentTime = 109.22;
    }

    else if (video.currentTime < 0) {
    	video.currentTime = 0;
    }

    else {
    	video.currentTime = (scrollPosition / (scrollY - 500)) * videoLength;
    	console.log(video.currentTime);
    }
}

$('#scroll').scroll(function () {
    updateVideo();

});