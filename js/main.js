var playlist = [];
var current_wave = '';
var current_track = '';
var audio_player = document.getElementById('audio_player');
var src = document.getElementById('src');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function playVideo(){
    var video = document.getElementById('video');
    video.play();
    video.addEventListener('ended',function(){
        $('.main video').hide();
        $('.main .content').show();
    });
}

audio_player.addEventListener('ended',function(){
    if ($('.repeat').hasClass('off')){
        $('.play').removeClass('active');
        $('.wave.current').removeClass('active');
        return;
    }
    play_next();
});

function getplaylist(){
    var player = $('.player');
    var wave = $('.wave.current').attr('data-wave');

    var list = '';
    $.ajax({
        url: 'get-playlist.php',
        type: 'POST',
        data: {wave: wave},
        dataType: 'json',
        error: function () {
            alert('При выполнении запроса произошла ошибка');
        },
        success: function( data ) {
            playlist = data;
            src.src = playlist[0].path;

            player.attr('data-wave', wave);
            current_wave = wave;
            player.attr('data-track', 0);
            current_track = 0;

            for (var i = 0; i< playlist.length; i++){
                if (i === 0){
                    list += '<div class="track current">' + playlist[i].name + '</div>';
                } else {
                    list += '<div class="track">' + playlist[i].name + '</div>';
                }
            }

            $('.music_list .wrapper').html(list);
            $('.music_list').mCustomScrollbar("update");

            audio_player.load(); //call this to just preload the audio without playing
            play_wave(); //call this to play the song right away
        }
    });
}

function playToggler(){
    $('.play').toggleClass('active');
    $('.wave.current').toggleClass('active');
}

function play_wave() {
    if (audio_player.paused) {
        audio_player.play();
    }
    $('.play').addClass('active');
    $('.wave.current').addClass('active');

    $('.music_list').mCustomScrollbar("scrollTo", $('.track.current'));
}
function pause_wave() {
    if (audio_player.paused) {
        return;
    } else {
        audio_player.pause();
    }
    $('.play').removeClass('active');
    $('.wave.current').removeClass('active');
}
function play_next() {
    var next_track;
    if ($('.shuffle').hasClass('off')){
        if ((current_track + 2) > playlist.length){
            next_track = 0;
        } else {
            next_track = current_track + 1;
        }
    } else {
        next_track = getRandomInt(playlist.length);
    }
    src.src = playlist[next_track].path;

    $('.player').attr('data-track', next_track);
    current_track = next_track;

    $('.track').removeClass('current');
    $('.track:eq('+current_track+')').addClass('current');

    audio_player.load(); //call this to just preload the audio without playing
    play_wave(); //call this to play the song right away
}

function playPause() {
    if (audio_player.paused) {
        audio_player.play();
    } else {
        audio_player.pause();
    }
    playToggler();
}

function setVolume(volume) {
    audio_player.volume = volume;
}

$(document).ready(function(){

    $(".music_list").mCustomScrollbar();

    var prev = $('.prev');
    var play = $('.play');
    var next = $('.next');
    var mute = $('.mute');
    var repeat = $('.repeat');

    // var song = new Audio(playlist[0]); //with fallback
    // var duration = song.duration;

    $('.play, .pause').click(function() {
        if (audio_player.paused) {
            audio_player.play();
        } else {
            audio_player.pause();
        }
        playToggler();
    });

    mute.click(function () {
        $(this).toggleClass('muted');
        if ($(this).hasClass('muted')){
            audio_player.muted = true;
        } else {
            audio_player.muted = false;
        }
    });

    $('.repeat, .shuffle').click(function () {
        $(this).toggleClass('off');
    });

    prev.click(function () {
        var prev_track;
        if ($('.shuffle').hasClass('off')){
            if ((current_track) === 0){
                prev_track = playlist.length - 1;
            } else {
                prev_track = current_track - 1;
            }
        } else {
            prev_track = getRandomInt(playlist.length);
        }

        src.src = playlist[prev_track].path;

        $('.player').attr('data-track', prev_track);
        current_track = prev_track;

        $('.track').removeClass('current');
        $('.track:eq('+current_track+')').addClass('current');

        audio_player.load(); //call this to just preload the audio without playing
        play_wave(); //call this to play the song right away
    });

    next.click(function () {
        play_next();
    });

    $('.nav_el').click(function () {
        $('.nav_el, .screen').removeClass('active');
        $(this).addClass('active');
        var current_screen_id = $(this).attr('data-nav');
        var current_screen = $('*[data-screen="'+current_screen_id+'"]');
        current_screen.addClass('active');
        if (current_screen.hasClass('radio') && !play.hasClass('active')){
            getplaylist();
        }
    });

    $('.wave').click(function () {
        $('.wave').removeClass('current active');
        $(this).addClass('current');
        var current_radio_id = $(this).attr('data-wave');
        // pause_wave();
        getplaylist();
        // play_wave();
    });

});