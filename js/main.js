// Do not name the function "play()"
function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        $('.main video').hide();
        $('.main .content').show();
    });
}

$(document).ready(function(){
    // playVideo();

});