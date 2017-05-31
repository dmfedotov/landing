<?
header("Content-Type: application/json");

$name = $_POST["name"];
$message = "Сообщение от пользователя: $name";

$result = mail("dimanmw2@yandex.ru", "тест письма", $message);


echo json_encode(array('status' => $result));

?>
