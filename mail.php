<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
                           // Enable verbose debug output
                                     // Set mailer to use SMTP                              // Enable SMTP authentication
$mail->Username = 'question@strana-03.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Qwerty123456'; // Ваш пароль от почты с которой будут отправляться письма                          // Enable TLS encryption, `ssl` also accepted

$mail->setFrom('question@strana-03.ru'); // от кого будет уходить письмо?
$mail->addAddress('summers92@mail.ru');
$mail->addAddress('kirkruzhkov@yandex.ru'); // Кому будет уходить письмо                                 
$mail->isHTML(true);// Set email format to HTML

$mail->Subject = 'Заявка с сайта Strana-03';
$mail->Body    = 'Пользователь: ' .$name . ' оставил заявку, на номер ' .$phone. '<br>Почта этого пользователя: ' .$email. '<br>Сообщение пользователя: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thanks.html');
}
?>