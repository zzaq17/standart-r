<?php

$recepient = "orders@standartcleaning.ru";
$sitename = "Клининговая компания «Стандарт»";

$leadData = $_POST['DATA'];

// get lead data from the form
$postData = array(
	'TITLE' => $leadData['TITLE'],
	'NAME' => $leadData['NAME'],
	'PHONE_WORK' => $leadData['PHONE_WORK'],
	'UF_CRM_1596305490' => $leadData['UF_CRM_1596305490'],
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

// переменные письма
$bgc = "#00bc80";
$subject = $postData['TITLE'];
if ($postData['COMMENTS']):
	$comment = '<tr><td style="padding: 10px; border: #eee 1px solid; width: 140px;"><b>Сообщение</b></td><td style="padding: 10px; border: #eee 1px solid;">'.$postData['comment'].'</td></tr>';
	endif;
$dateLead = date("d.m.y H:i");

// содержание письма
$subject = $postData['TITLE'];
$message = '
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>'.$subject.'</title>
</head>
<body>
	<table style="width: 100%; max-width: 600px; border-collapse: collapse;">
		<tr style="background-color: '.$bgc.'; background-image: url(../img/Logo-Klever-1x1.png)">
			<td style="padding: 20px; text-align: center; color: white; font-size: 22px" colspan="2"><b>Заявка Жуковский</b></td>
		</tr>
		<tr>
			<td style="padding: 10px; border: #eee 1px solid; max-width: 140px;"><b>Имя</b></td>
			<td style="padding: 10px; border: #eee 1px solid;">'.$postData['NAME'].'</td>
		</tr>
		<tr style="background-color: #eee">
			<td style="padding: 10px; border: #eee 1px solid; max-width: 140px;"><b>Телефон</b></td>
			<td style="padding: 10px; border: #eee 1px solid;">'.$postData['PHONE_WORK'].'</td>
		</tr>
		<tr>
			<td style="padding: 10px; border: #eee 1px solid; max-width: 140px;"><b>Откуда</b></td>
			<td style="padding: 10px; border: #eee 1px solid;">'.$postData['UF_CRM_1590424887'].' <br/>'.$postData['PAGE'].'</td>
		</tr>
		<tr style="background-color: #eee">
			<td style="padding: 10px; border: #eee 1px solid; width: 140px;"><b>Дата заявки</b></td>
			<td style="padding: 10px; border: #eee 1px solid;">'.$dateLead.'</td>
		</tr>'
		.$comment.'
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
