<?php

$music_path = 'music/fallout3_station'; //fallback

$_POST = json_decode(file_get_contents('php://input'), true);
if ($_POST && $_POST['wave']){
    switch ($_POST['wave']){
        case '1':
            $music_path = 'music/noise';
            break;
        case '3':
            $music_path = 'music/fallout4_station';
            break;
        case '4':
            $music_path = 'music/put_your_music_here';
            break;
        default: //same as 2
            $music_path = 'music/fallout3_station';
            break;
    }
}

$list = [];

function beautify_name($name){
    $name = str_replace(['_', '[', ']', '.mp3'], [' ', '(', ')', ''], $name);
    return $name;
}

function scan_dir($dir){
    $result = [];
    $files = array_diff(scandir($dir, 0), array('.', '..'));

    foreach ($files as $file){
        $info = pathinfo($file);
        if ($info['extension'] === 'mp3') {
            $result[] = [
                'name' => beautify_name($file),
                'path' => $dir . '/' .  $file,
            ];
        } elseif (is_dir($dir . '/' . $file)){
            $sub_result = scan_dir($dir . '/' . $file);
            foreach ($sub_result as $sub){
                $result[] = $sub;
            }
        }
    }
    return $result;
}

$list = scan_dir($music_path);

echo json_encode($list);

