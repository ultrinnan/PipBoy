<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
<head>
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
    <meta property='og:image' content='/reference2.jpg' />
    <link rel="icon" href="/images/gear.png" type="image/x-icon" />

    <link rel="stylesheet" type="text/css" href="css/main.min.css"/>
</head>
<body>
    <div class="note">
        Please note: this app is designed for bigger screens!<br>
        Works best on screen 800x480
    </div>

    <div class="main">
        <video poster="/images/standby.jpg" autoplay muted id="video">
            <source src="/startup.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
        <div class="content" id="content">
            <div class="screen-reflection"></div>
            <div class="scan"></div>
            <div class="nav">
                <div class="nav_el" data-nav="0">
                    <div class="text setup"></div>
                </div>
                <div class="nav_el active" data-nav="1">
                    <div class="text">STAT</div>
                </div>
                <div class="nav_el" data-nav="2">
                    <div class="text">INV</div>
                </div>
                <div class="nav_el" data-nav="3">
                    <div class="text">DATA</div>
                </div>
                <div class="nav_el" data-nav="4" id="map_menu">
                    <div class="text">MAP</div>
                </div>
                <div class="nav_el" data-nav="5">
                    <div class="text">RADIO</div>
                </div>
            </div>

            <div class="screen" data-screen="0">
                <div class="header">Setup Page COMING SOON! Please stand by...</div>
                <div>
                    <h2>Pip-Boy 3018</h2>
                    <p>Your personal Pip-Boy for your Raspberry Pi with touchscreen (or any OS/web).</p>
                    <p>Designed for 5 inch touch screen (800 x 480 px).</p>
                    <p>Initially idea is to have Pip-Boy software on Raspberry Pi with some general information available in original game (Fallout 3/4/etc.).</p>
                    MVP functionality should consist of:
                    <ul>
                        <li>
                            initial loading screen with video (emulate pip-boy loading)
                        </li>
                        <li>
                            original tabs with static general info about common character
                        </li>
                        <li>
                            fallout styled google map (available on <a href="http://pipboy.fedirko.pro">http://pipboy.fedirko.pro</a>
                        </li>
                        <li>
                            Radio tab with possibility to play music
                        </li>
                        <li>
                            etc.
                        </li>
                    </ul>
                    <p>Source code on github - https://github.com/ultrinnan/PipBoy</p>
                    <p>You can request additional functionality via small donation :)</p>
                    <p>Feel free to use and modify it :)</p>
                    <hr>
                    <p>Created by Serhii Fedirko (<a href="https://fedirko.pro">https://fedirko.pro</a>)</p>
                </div>
            </div>

            <div class="screen active" data-screen="1">
                <div class="stat_nav">
                    <span class="stat active">Status</span>
                </div>
                <div class="stat">
                    <div class="vaultboy">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                        <div class="bar4"></div>
                        <div class="bar5"></div>
                        <div class="bar6"></div>
                    </div>
                    <div class="info-bar">
                        <div class="weapon"></div>
                        <div class="aim"><span class="number">13</span></div>
                        <div class="helmet"></div>
                        <div class="shield"><span class="number">16</span></div>
                        <div class="voltage"><span class="number">7</span></div>
                        <div class="nuclear"><span class="number">15</span></div>
                    </div>
                    <div class="supplies">
                        <span>Stimpak (0)</span>
                        <span>Radaway (0)</span>
                    </div>
                    <div class="hud-bar">
                        <div class="hp">HP 135/135</div>
                        <div class="exp">Level 6</div>
                        <div class="ap">AP 90/90</div>
                    </div>
                </div>
            </div>

            <div class="screen" data-screen="2">
                <div class="header">Page COMING SOON! Please stand by...</div>
                <div class="boy_thumb"></div>
            </div>

            <div class="screen" data-screen="3">
                <div class="header">Page COMING SOON! Please stand by...</div>
                <div class="boy_thumb"></div>
            </div>

            <div class="screen" data-screen="4">
                <div id="map">
                    Please check your internet connection to use map!
                </div>
            </div>

            <div class="screen radio" data-screen="5">
                <div class="list">
                    <div class="wave" data-wave="1">Radio</div>
                    <div class="wave current" data-wave="2">Fallout 3 Radio</div>
                    <div class="wave" data-wave="3">Fallout 4 Radio</div>
                    <div class="wave" data-wave="4">My Music</div>
                    <div class="list_title">Playlist</div>
                    <div class="music_list" id="#style-15">
                        <div class="wrapper" id="playList"></div>
                    </div>
                </div>
                <div class="player" id="player" data-wave="2" data-track="0">
                    <div class="controls">
                        <div class="control shuffle" id="shuffle"></div>
                        <div class="control prev" id="prev"></div>
                        <div class="control play" id="play"></div>
                        <div class="control next" id="next"></div>
                        <div class="control repeat" id="repeat"></div>
                    </div>
                    <div class="controls">
                        <div class="control mute" id="mute"></div>
                        <div class="volume">
                            <label for="rngVolume">
                                <input type="range" onchange="setVolume(this.value)" id="rngVolume" min="0" max="1" step="0.01" value="1">
                            </label>
                        </div>

                    </div>
                    <div class="container">
                        <audio controls id="audioPlayer">
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
<script src="js/main.min.js"></script>
</body>
</html>