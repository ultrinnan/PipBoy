let playlist = [];
let current_wave = '';
let current_track = '';
let audio_player = document.getElementById('audio_player');
let src = document.getElementById('src');

function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.4021702, lng: 30.3926088},
        zoom: 10,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#002b08"
                    },
                    {
                        "lightness": "1"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#005919"
                    },
                    {
                        "lightness": "0"
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#00ff3c"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#00ff1c"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#005a02"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0c5116"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#007a12"
                    },
                    {
                        "lightness": "-26"
                    },
                    {
                        "saturation": "-27"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#00ff12"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#025201"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#006317"
                    },
                    {
                        "lightness": "-8"
                    },
                    {
                        "saturation": "-20"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#008d15"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": "1.75"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": "-4"
                    },
                    {
                        "weight": "1.10"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "weight": "7.53"
                    },
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#03a100"
                    },
                    {
                        "weight": "3.02"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#00ff1c"
                    },
                    {
                        "weight": "1.64"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": "2.70"
                    },
                    {
                        "saturation": "32"
                    },
                    {
                        "lightness": "-6"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#211010"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#007803"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 16
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": "0.65"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#003503"
                    },
                    {
                        "lightness": "1"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#001f00"
                    },
                    {
                        "lightness": "2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#008909"
                    }
                ]
            }
        ]
    });
}

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

    playVideo();

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