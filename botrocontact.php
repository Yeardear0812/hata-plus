<?php
try {
    $username = $_POST['username'];
    $usersurname = $_POST['usersurname'];
    $tema = $_POST['tema'];
    $text = $_POST['text'];
    $accept = $_POST['accept'];
} catch (\Throwable $th) {
    $username = 'error';
    $usersurname = 'error';
    $tema = 'error';
    $text = 'error';
    $accept = 'error';
}
$token = "8518078847:AAEPYuwx6UYu3kSob3n39BhdAnNqbSSZ2Ig"; 
$chat_id = 6565356750;

$username = urlencode($username)
$usersuname = urlencode($usersuname)
$tema = urlencode($tema)
$text = urlencode($text)
$accept = urlencode($accept)

$urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" .
    "ЖжжжЗаявка</b><b>\n" . "\n\n" .
    "Ім'я замовника: <b>$username</b>\n" .
    "Прізвище замовника: <b>$usersurname</b>\n" .
    "Тема: <b>$tema</b>\n" .
    "Текст: <b>$text</b>\n" .
    "Accept: <b>$accept</b>" . "\n\n" .
$urlQuery .= "&parse_mode=HTML";
$result = file_get_contents($urlQuery);
?>