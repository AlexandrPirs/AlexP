<?
$phone = $_POST['tell'];
$name = $_POST['name'];
$message = "Телефон: {$phone} Имя: {$name}";
// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");
// Отправляем
$success = mail('uber@rabotauber.ru', 'Заполнена заявка с сайта Уберпартнер.рф', $message);


if($success) {
echo 1;
} else {
echo 0;
}