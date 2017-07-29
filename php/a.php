<?php
// $url = "http://www.104.com.tw/i/apis/jobsearch.cfm?cat=2001001001&area=6001001001&fmt=8&
// cols=J,JOB,NAME";
 
$host = 'http://www.104.com.tw/i/apis/jobsearch.cfm';
$queryString = '?cat=2001001001&area=6001001001&fmt=8&cols=J,JOB,NAME';
$queryString = urlencode($queryString);

$url = $host . $queryString;

try {
    $ch = curl_init();

    if (FALSE === $ch)
        throw new Exception('failed to initialize');

    curl_setopt($ch, CURLOPT_URL, $url); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    //curl_setopt(/* ... */);

    $content = curl_exec($ch);

    if (FALSE === $content)
        throw new Exception(curl_error($ch), curl_errno($ch));

    // ...process $content now
} catch(Exception $e) {

    trigger_error(sprintf(
        'Curl failed with error #%d: %s',
        $e->getCode(), $e->getMessage()),
        E_USER_ERROR);

}

echo 'check content';
var_dump($content);


?>
