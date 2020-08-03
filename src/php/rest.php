<?
// CRM server conection data
define('CRM_HOST', 'kompaniyastandart.bitrix24.ru'); // your CRM domain name
// define('CRM_HOST', 'zzaq-studio.bitrix24.ru'); // your CRM domain name
define('CRM_PORT', '443'); // CRM server port
define('CRM_PATH', '/crm/configs/import/lead.php'); // CRM server REST service path

// CRM server authorization data
define('CRM_LOGIN', 'a.kutsenko@standartcleaning.ru'); // login of a CRM user able to manage leads
define('CRM_PASSWORD', 'standartanna18'); // password of a CRM user
// define('CRM_LOGIN', 'andrey@zzaq-studio.com'); // login of a CRM user able to manage leads
// define('CRM_PASSWORD', 'b6z-CbB-cdT-gEe'); // password of a CRM user

/********************************************************************************************/

// POST processing
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$leadData = $_POST['DATA'];

	// get lead data from the form
	$postData = array(
		'TITLE' => $leadData['TITLE'],
		'NAME' => $leadData['NAME'],
		'PHONE_WORK' => $leadData['PHONE_WORK'],
		'UF_CRM_1596305490' => $leadData['UF_CRM_1596305490'],
		'UF_CRM_1590424887' => $leadData['UF_CRM_1590424887'],
		'PAGE' => $leadData['UF_CRM_1590425151'],
	);

	// append authorization data
		$postData['LOGIN'] = CRM_LOGIN;
		$postData['PASSWORD'] = CRM_PASSWORD;

	// open socket to CRM
	$fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
	if ($fp)
	{
		// prepare POST data
		$strPostData = '';
		foreach ($postData as $key => $value)
			$strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);

		// prepare POST headers
		$str = "POST ".CRM_PATH." HTTP/1.0\r\n";
		$str .= "Host: ".CRM_HOST."\r\n";
		$str .= "Content-Type: application/x-www-form-urlencoded\r\n";
		$str .= "Content-Length: ".strlen($strPostData)."\r\n";
		$str .= "Connection: close\r\n\r\n";

		$str .= $strPostData;

		// send POST to CRM
		fwrite($fp, $str);

		// get CRM headers
		$result = '';
		while (!feof($fp))
		{
			$result .= fgets($fp, 128);
		}
		fclose($fp);

		// cut response headers
		$response = explode("\r\n\r\n", $result);

		$output = '<pre>'.print_r($response[1], 1).'</pre>';
	}
	else
	{
		echo 'Connection Failed! '.$errstr.' ('.$errno.')';
	}
}
else
{
	$output = '';
}


