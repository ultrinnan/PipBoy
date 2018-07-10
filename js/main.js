var playlist = [];

var audio_player = document.getElementById('audio_player');

function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        $('.main video').hide();
        $('.main .content').show();
    });
}

function getplaylist(){
    //ajax will be here

    playlist = [
        '/music/fallout3_station/world-on-fire.mp3'
    ];
    console.log(playlist);
}

function setVolume(volume) {
    audio_player.volume = volume;
}

$(document).ready(function(){

    var prev = $('.prev');
    var play = $('.play');
    var pause = $('.pause');
    var next = $('.next');
    var mute = $('.mute');

    var song = new Audio(playlist[0]); //with fallback
    var duration = song.duration;

    $('.play, .pause').click(function() {
        if (audio_player.paused) {
            audio_player.play();
            play.hide();
            pause.show();
        } else {
            audio_player.pause();
            pause.hide();
            play.show();
        }
    });

    mute.click(function () {
        $(this).toggleClass('muted');
        if ($(this).hasClass('muted')){
            audio_player.muted = true;
        } else {
            audio_player.muted = false;
        }
    });

    // $("#seek").bind("change", function() {
    //     song.currentTime = $(this).val();
    //     $("#seek").attr("max", song.duration);
    // });
    // song.addEventListener('timeupdate',function (){
    //     curtime = parseInt(song.currentTime, 10);
    //     $("#seek").attr("value", curtime);
    // });


    $('.nav_el').click(function () {
        $('.nav_el, .screen').removeClass('active');
        $(this).addClass('active');
        var current_screen_id = $(this).attr('data-nav');
        var current_screen = $('*[data-screen="'+current_screen_id+'"]')
        current_screen.addClass('active');
        if (current_screen.hasClass('radio')){
            getplaylist();
            song.play();
        }
    });

    // myaudio.play(); - This will play the music.
    // myaudio.pause(); - This will stop the music.
    // myaudio.duration; - Returns the length of the music track.
    // myaudio.currentTime = 0; - This will rewind the audio to the beginning.
    // myaudio.loop = true; - This will make the audio track loop.
    // myaudio.muted = true; - This will mute the track

});