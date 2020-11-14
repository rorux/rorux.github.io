var video = document.getElementById("video"),
    button = document.getElementById("video-play");

button.addEventListener("click", function () {
    button.className += " video-play-btn--hide";
    video.play()
    video.setAttribute("controls", "controls");
}, false);