<?
header("Content-Type: application/json");

$name = $_POST["name"];
$message = "Сообщение от пользователя: $name";

$result = mail("crismsfiva@gmail.com", "тест письма", $message);


echo json_encode(array('status' => $result));

?>
