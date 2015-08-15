function updateVideo() {
    var video = document.getElementById("myVideo");
    var videoLength = video.duration;
    
    var scrollPosition = $('#scroll').scrollTop();
    var scrollY = $('#scroll')[0].scrollHeight;

    video.currentTime = (scrollPosition / (scrollY - 500)) * videoLength;
    console.log(video.currentTime);

    if (video.currentTime > videoLength) {
    	video.currentTime = videoLength;
    }

    else if (video.currentTime < 0) {
    	console.log('under');
    }
}

$('#scroll').scroll(function () {
    updateVideo();

});