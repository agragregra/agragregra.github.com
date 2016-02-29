<?php

//Send Mail PHP Script

$frm_name = stripcslashes($_POST['name']);
$frm_phone = stripcslashes($_POST['phone']);
$frm_city = stripcslashes($_POST['city']);
$frm_info = stripcslashes($_POST['info']);

if ($frm_city) {
	$frm_city = "City: $frm_city";
}

//Variables you can change

$mailto = 'agragregra@ya.ru'; // Enter your mail addres here. 
$subject = 'New submit from English Courses'; // Enter the subject here.

$error_message = 'Error sending your message'; // Message displayed if an error occurs
$success_message = 'Message Sent'; // Message displayed id the email has been sent successfully


$message = "Name: $frm_name\r\nPhone: $frm_phone\r\nInfo: $frm_info\r\n$frm_city";
$headers = "From: $frm_name <$mailto>" . "\r\n" . "Reply-To: $mailto" . "\r\n" . "X-Mailer: PHP/" . phpversion();

if((strlen($frm_name) < 1 ) || (strlen($frm_phone) < 1 )) {

	echo($error_message);

} else {

	if( mail($mailto, $subject, $message, $headers) ) {
		
		echo($success_message);

	} else {

		echo($error_message);

	}

}

