<?
$phone = $_POST['userName'];
$name = $_POST['userPhone'];
$promo = $_POST['promoCode'];
$message = "Телефон: {$phone} Имя: {$name} Промокод: {$promo}";
// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");
// Отправляем
$success = mail('uber@rabotauber.ru', 'Заполнена заявка с промокодом с сайта Уберпартнер.рф', $message);

if($success) {
  echo 1;
} else {
  echo 0;
}
