<?php

$recepient = "orders@standartcleaning.ru";
$sitename = "Клининговая компания «Стандарт»";

$leadData = $_POST['DATA'];

// get lead data from the form
$postData = array(
	'TITLE' => $leadData['TITLE'],
	'NAME' => $leadData['NAME'],
	'PHONE_WORK' => $leadData['PHONE_WORK'],
	'UF_CRM_1587037828276' => $leadData['UF_CRM_1587037828276'],
	'UF_CRM_1590424887' => $leadData['UF_CRM_1590424887'],
	'PAGE' => $leadData['PAGE'],
	'COMMENTS' => $leadData['COMMENTS'],
);

$dateTime = date("d.m.y H:i");

// отправка нескольким адресатам
$to  = 'orders@standartcleaning.ru' . ', '; // кому отправляем
$to .= 'lead.standartcleaning@yandex.ru' . ', '; // Внимание! Так пишем второй и тд адреса
// не забываем запятую. Даже в последнем контакте лишней не будет
// Для начинающих! $to .= точка в этом случае для Дописывания в переменную

// содержание письма
$subject = $postData['TITLE'];
$message = '
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>'.$subject.'</title>
</head>
<body>
	<table style="width: 100%; border-collapse: collapse;">
		<tr style="background-color: #00bc80; background-image: url(../img/Logo-Klever-1x1.png)">
		<td style="padding: 20px; text-align: center; color: white; font-size: 22px" colspan="2"><b>Заявка </br>ramenskoye</b></td>
		</tr>
		<tr>
		<td style="padding: 10px; border: #eee 1px solid; max-width: 100px;"><b>Имя</b></td>
		<td style="padding: 10px; border: #eee 1px solid;">'.$postData['NAME'].'</td>
		</tr>
		<tr style="background-color: #eee">
		<td style="padding: 10px; border: #eee 1px solid; max-width: 100px;"><b>Телефон</b></td>
		<td style="padding: 10px; border: #eee 1px solid;">'.$postData['PHONE_WORK'].'</td>
		</tr>
		<tr>
		<td style="padding: 10px; border: #eee 1px solid; max-width: 100px;"><b>Когда</b></td>
		<td style="padding: 10px; border: #eee 1px solid;">'.$dateTime.'</td>
		</tr>
		<tr style="background-color: #eee">
		<td style="padding: 10px; border: #eee 1px solid; max-width: 100px;"><b>Откуда</b></td>
		<td style="padding: 10px; border: #eee 1px solid;">'.$postData['UF_CRM_1590424887'].' <br>'.$postData['PAGE'].'</td>
		</tr>
		<tr>
		<td style="padding: 10px; border: #eee 1px solid; max-width: 100px;"><b>Сообщение</b></td>
		<td style="padding: 10px; border: #eee 1px solid;">'.$postData['COMMENTS'].'</td>
		</tr>
		</table>
</body>
';

// устанавливаем тип сообщения Content-type, если хотим
$headers  = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
"From: ".$sitename." <".$recepient.">" . PHP_EOL .
'Reply-To: '.$recepient.'' . PHP_EOL;

// отправляем
mail($to, $subject, $message, $headers);

