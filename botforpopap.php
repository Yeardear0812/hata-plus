<?php
try {
    $urname = $_POST['urname'];
    $phone = $_POST['phone'];

} catch (\Throwable $th) {
    $urname = 'error';
    $phone = 'error';

}
$token = "8518078847:AAEPYuwx6UYu3kSob3n39BhdAnNqbSSZ2Ig"; 
$chat_id = 6565356750;

$urname = urlencode($urname)
$phone = urlencode($phone)


$urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" .
    "ЖжжжЗаявка</b><b>\n" . "\n\n" .
    "Ім'я: <b>$urname</b>\n" .
    "Телефон: <b>$phone</b>\n" .

$urlQuery .= "&parse_mode=HTML";
$result = file_get_contents($urlQuery);
?>