<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
<head>
    <meta http-equiv="Expires" content="Fri, Jan 01 1900 00:00:00 GMT">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta name="author" content="Serhii Fedirko">
    <meta name="revisit-after" content="1 days">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

    <title>Pip-Boy 3018</title>
    <meta name="description" content="Your personal Pip-Boy for your Raspberry Pi with touchscreen (or any OS/web).">
    <meta name="keywords" content="pipboy, pip-boy, fallout, vaultboy, vault-boy, vault">
    <meta property='og:url' content='pipboy.fedirko.pro' />
    <meta property='og:title' content='Pip-Boy 3018' />
    <meta property='og:description' content='Your personal Pip-Boy for your Raspberry Pi with touchscreen (or any OS/web).' />
    <meta property='og:type' content='article' />
    <meta property='og:image' content='/images/VaultBoy.png' />
    <link rel="icon" href="/images/gear.png" type="image/x-icon" />

    <link rel="stylesheet" type="text/css" href="css/jquery.mCustomScrollbar.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/main.min.css?t=<?=time();?>"/>
</head>
<body>
    <div class="note">
        Please note: this app is designed for bigger screens!<br>
        Works best on screen 800x480
    </div>

    <div class="main">
<!--        <video poster="/images/standby.jpg" autoplay id="video">-->
<!--            <source src="/startup.mp4" type="video/mp4">-->
<!--            Your browser does not support HTML5 video.-->
<!--        </video>-->
        <div class="content">
            <div class="screen-reflection"></div>
            <div class="scan"></div>
            <div class="nav">
                <div class="nav_el" data-nav="0">
                    <div class="text setup"></div>
                </div>
                <div class="nav_el" data-nav="1">
                    <div class="text">STAT</div>
                </div>
                <div class="nav_el" data-nav="2">
                    <div class="text">INV</div>
                </div>
                <div class="nav_el" data-nav="3">
                    <div class="text">DATA</div>
                </div>
                <div class="nav_el" data-nav="4">
                    <div class="text">MAP</div>
                </div>
                <div class="nav_el active" data-nav="5">
                    <div class="text">RADIO</div>
                </div>
            </div>

            <div class="screen" data-screen="0">
                some settings will be here
            </div>

            <div class="screen" data-screen="1">
                <p>
                    <span class="status"></span>
                    <span class="off special"></span>
                </p>
                <div class="vaultboy">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                    <div class="bar4"></div>
                    <div class="bar5"></div>
                    <div class="bar6"></div>
                </div>
                <div class="supplies"><span>Stimpak (0)</span><span>Radaway (0)</span><span>Stix</span>
                </div>
                <div class="info-bar">
                    <span class="weapon"></span>
                    <span class="aim"><p>21</p></span>
                    <span class="helmet"></span>
                    <span class="shield"><p>110</p></span>
                    <span class="voltage"><p>126</p></span>
                    <span class="nuclear"><p>35</p></span>
                </div>
                <div class="hud-bar">
                    <div class="hp"></div>
                    <div class="exp"></div>
                    <div class="ap"></div>
                </div>
            </div>

            <div class="screen" data-screen="2">
                <p style="color:#8df776;">THIS PAGE IS COMING SOON!</p>
                <p class="map">
                    <img src="images/VaultBoy.png" width="50px" height="73px" frameborder="0" style="border:0" allowfullscreen="">
                </p>
            </div>

            <div class="screen" data-screen="3">
<!--                        <p class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9564.440201391753!2d-4.0706345!3d53.1800057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39a1973ef2f59%3A0x2b14a49773617857!2sVault+111!5e0!3m2!1sen!2suk!4v1511631062944" width="200" height="150" frameborder="0" style="border:0" allowfullscreen=""></iframe></p>-->
            </div>

            <div class="screen" data-screen="4">
                some data here
            </div>

            <div class="screen radio active" data-screen="5">
                <div class="list">
                    <div class="wave" data-wave="1">Radio</div>
                    <div class="wave current" data-wave="2">Fallout 3 Radio</div>
                    <div class="wave" data-wave="3">Fallout 4 Radio</div>
                    <div class="wave" data-wave="4">My Music</div>
                    <div class="list_title">Playlist</div>
                    <div class="music_list">
                        <div class="wrapper"></div>
                    </div>
                </div>
                <div class="player" data-wave="2" data-track="0">
                    <div class="controlls">
                        <div class="controll shuffle"></div>
                        <div class="controll prev"></div>
                        <div class="controll play"></div>
                        <div class="controll next"></div>
                        <div class="controll repeat"></div>
                    </div>
                    <div class="controlls">
                        <div class="controll mute"></div>
                        <div class="volume">
                            <input type="range" onchange="setVolume(this.value)" id="rngVolume" min="0" max="1" step="0.01" value="1">
                        </div>

                    </div>
                    <div class="container">
                        <audio controls id="audio_player">
                            <source id="src" src="music/fallout3_station/!world-on-fire.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <footer>
        Copyright &copy; <?=date('Y');?>. FEDIRKO.PRO and Bethesda Game Studios
        <a target="_blank" class="footer_author" href="//fedirko.pro" title="created by FEDIRKO.PRO"></a>
    </footer>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="js/main.js?t=<?=time();?>"></script>
</body>
</html>