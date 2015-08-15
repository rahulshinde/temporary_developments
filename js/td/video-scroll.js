function updateVideo() {
    var video = document.getElementById("myVideo");
    var videoLength = video.duration;
    
    var scrollPosition = $('#scroll').scrollTop();
    var scrollY = $('#scroll')[0].scrollHeight;

    video.currentTime = 30 + (scrollPosition / (scrollY - 500)) * videoLength;
    console.log(video.currentTime);

    if (video.currentTime > videoLength) {
    	console.log('hello');
    }
}

$('#scroll').scroll(function () {
    updateVideo();

});