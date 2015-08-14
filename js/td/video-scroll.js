function updateVideo() {
    var video = document.getElementById("myVideo");
    var videoLength = video.duration;
    
    var scrollPosition = $('#scroll').scrollTop();
    var scrollY = $('#scroll')[0].scrollHeight;

    console.log(videoLength - (videoLength / ($('#scroll')[0].scrollHeight * $('#scroll')[0].scrollHeight)))

    console.log((scrollPosition / (scrollY - 500)) * videoLength);

    video.currentTime = (scrollPosition / (scrollY - 500)) * videoLength;
}

$('#scroll').scroll(function () {
    updateVideo();

});