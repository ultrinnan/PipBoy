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
    <link rel="icon" href="/images/favicon.png" type="image/x-icon" />

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

            <div class="screen">
                <div class="screen-reflection"></div>
                <div class="scan"></div>
                <nav><span class="active stat"></span><span class="inv"></span><span class="data"></span><a href="map.html"><span class="map"></span></a><a href="radio.html"><span class="radio"></span></a><p><span class="status"></span><span class="off special"></span></p>
                </nav>
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

            <div class="screen">
                <div class="screen-reflection"></div>
                <div class="scan"></div>
                <nav><span class="active stat"></span><span class="inv"></span><span class="data"></span><a href="map.html"><span class="map"></span></a><a href="radio.html"><span class="radio"></span></a><p><span class="status"></span><span class="off special"></span></p>
                    <br><br><br><div style="color:#000000;" style="float:center">
                        <br>
                        <div class="center">
                            <p style="color:#8df776;">THIS PAGE IS COMING SOON!</p>
                            <p class="map"><img src="images/VaultBoy.png" width="50px" height="73px" frameborder="0" style="border:0" allowfullscreen=""></iframe></p>
                        </div>
                </nav>

            </div>

            <div class="screen">
                <div class="screen-reflection"></div>
                <div class="scan"></div>
                <nav><span class="stat"></span><span class="inv"></span><span class="data"></span><span class="active map"></span><span class="radio"></span>
                    <br><br><br><div style="color:#000000;" style="float:center">
                        <br>
                        <p class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9564.440201391753!2d-4.0706345!3d53.1800057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39a1973ef2f59%3A0x2b14a49773617857!2sVault+111!5e0!3m2!1sen!2suk!4v1511631062944" width="200" height="150" frameborder="0" style="border:0" allowfullscreen=""></iframe></p>
                    </div>


                </nav>
            </div>

            <div class="screen">
                <div class="scan"></div>
                <nav><span class="stat"></span><span class="inv"></span><span class="data"></span><span class="map"></span><span class="active radio"></span>
                    <br><br><br><div style="color:#8df776;" style="float:left"><img src="/images/radiowaves.gif" style="float:right;padding-right: 5px;" width="33%" length="33%">
                        <a class="green" href="http://nightly.pw/pipboy/DiamondCityRadio.mp3" target="_blank"><p>� Diamond City Radio</p></a>
                        <p style="color:#003C00"> Classical Radio</p>
                        <p style="color:#003C00"> Trinity Tower Radio</p>
                        <p style="color:#003C00"> Military Frequency AF95</p>

                    </div>


                </nav>

                <embed src="http://nightly.pw/pipboy/DiamondCityRadio.mp3" autostart="true" loop="true" width="2" height="100px">
            </div>

        </div>
    </div>

    <footer>
        Copyright &copy; <?=date('Y');?>. FEDIRKO.PRO and Bethesda Game Studios
        <a target="_blank" class="footer_author" href="//fedirko.pro" title="created by FEDIRKO.PRO"></a>
    </footer>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/main.min.js?t=<?=time();?>"></script>
</body>
</html>