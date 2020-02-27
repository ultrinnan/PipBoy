let playlist = [];
let wave = document.getElementsByClassName('wave');
let nav_el = document.getElementsByClassName('nav_el');
let screens = document.getElementsByClassName('screen');
let currentWave, currentTrack, prevTrack, nextTrack;
const video = document.getElementById('video');
const audioPlayer = document.getElementById('audioPlayer');
const player = document.getElementById('player');
const playListWrapper = document.getElementById('playList');
const shuffle = document.getElementById('shuffle');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
const repeat = document.getElementById('repeat');
const mute = document.getElementById('mute');

const src = document.getElementById('src');

function initMap() {
    // Styles a map in night mode.
    const map = new google.maps.Map(document.getElementById('map'), {
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
    video.play();
    video.addEventListener('ended',function(){
        video.style.display = 'none';
        document.getElementById('content').style.display = 'block';
    });
}

audioPlayer.addEventListener('ended',function(){
    currentWave = document.getElementsByClassName('wave current');
    if (repeat.classList.contains('off')){
        play.classList.remove('active');
        currentWave.classList.remove('active');
        return;
    }
    playNext();
});

prev.addEventListener('click', function () {
    if (shuffle.classList.contains('off')){
        if ((currentTrack) === 0){
            prevTrack = playlist.length - 1;
        } else {
            prevTrack = currentTrack - 1;
        }
    } else {
        prevTrack = getRandomInt(playlist.length);
    }

    setActiveTrack(prevTrack);
});

function setActiveTrack(track) {
    src.src = playlist[track].path;

    player.setAttribute('data-track', track);
    currentTrack = track;

    let tracks = document.getElementsByClassName('track');
    for(let i = 0; i < tracks.length; i++) {
        tracks[i].classList.remove('current');
        if (i === currentTrack) {
            tracks[i].classList.add('current');
        }
    }
    audioPlayer.load(); //call this to just preload the audio without playing
    playWave(); //call this to play the song right away
}

play.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    playToggler();
});

next.addEventListener('click', function () {
    playNext();
});

mute.addEventListener('click', function () {
    mute.classList.toggle('muted');
    audioPlayer.muted = mute.classList.contains('muted');
});

repeat.addEventListener('click', function () {
    repeat.classList.toggle('off')
});

shuffle.addEventListener('click', function () {
    shuffle.classList.toggle('off')
});

for(let i = 0; i < wave.length; i++) {
    wave[i].addEventListener("click", function() {
        for(let j = 0; j < wave.length; j++) {
            wave[j].classList.remove('current','active');
        }
        this.classList.add('current');
        getPlayList();
    })
}

for(let i = 0; i < nav_el.length; i++) {
    nav_el[i].addEventListener('click', function () {
        for (let j = 0; j < nav_el.length; j++) {
            nav_el[j].classList.remove('active');
        }
        for (let j = 0; j < screens.length; j++) {
            screens[j].classList.remove('active');
        }
        this.classList.add('active');
        const currentScreenId = this.getAttribute('data-nav');
        const currentScreen = document.querySelector('*[data-screen="'+currentScreenId+'"]');
        currentScreen.classList.add('active');
        if (currentScreen.classList.contains('radio') && !play.classList.contains('active')){
            getPlayList();
        }
    })
}

function getPlayList(){
    const wave = document.getElementsByClassName('wave current')[0].getAttribute('data-wave');

    let list = '';

    const url = 'get-playlist.php';
    const data = {
        wave: wave,
    };
    const options = {
        method: "POST",
        body: JSON.stringify(data),
    };

    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            playlist = data;
            src.src = playlist[0].path;

            player.setAttribute('data-wave', wave);
            currentWave = wave;
            player.setAttribute('data-track', '0');
            currentTrack = 0;

            for (let i = 0; i< playlist.length; i++){
                if (i === 0){
                    list += `<div class="track current">${playlist[i].name}</div>`;
                } else {
                    list += `<div class="track">${playlist[i].name}</div>`;
                }
            }

            playListWrapper.innerHTML = list;

            audioPlayer.load(); //call this to just preload the audio without playing
            playWave(); //call this to play the song right away
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function playToggler(){
    play.classList.toggle('active');
    document.getElementsByClassName('wave current')[0].classList.toggle('active');
}

function playWave() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    }
    play.classList.add('active');
    document.getElementsByClassName('wave current')[0].classList.add('active');
    const track = document.getElementsByClassName('track current')[0];
    document.getElementsByClassName('music_list')[0].scrollTop = track.offsetTop - 8; //small margin
}

function playNext() {
    if (shuffle.classList.contains('off')){
        if ((currentTrack + 2) > playlist.length){
            nextTrack = 0;
        } else {
            nextTrack = currentTrack + 1;
        }
    } else {
        nextTrack = getRandomInt(playlist.length);
    }
    setActiveTrack(nextTrack);
}

function setVolume(volume) {
    audioPlayer.volume = volume;
}

playVideo();

if (window.location.href.indexOf("local") > -1) {
    //local site, no need in map
    document.getElementById('map_menu').style.display = 'none';
} else {
    let script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfDK6QXFdhV1zyclw9zopL-_uFv_syObI&callback=initMap";
    script.setAttribute('async', 'true');
    script.setAttribute('defer', 'true');
    document.getElementsByTagName("body")[0].appendChild(script);
}
